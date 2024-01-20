import React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')
  const openLogin = () => setOpenModal('login')
  const openRegister = () => setOpenModal('register')
  const close = () => setOpenModal('none')

  function login(formData) {
    console.log('login', formData)
  }
  function register(formData) {
    console.log('register', formData)
  }

  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <button onClick={openLogin}>Login</button>
      <button onClick={openRegister}>Register</button>

      <Dialog
        aria-label="Login form"
        isOpen={openModal === 'login'}
        onDismiss={close}
      >
        <button className="close-button" onClick={close}>
          Close
        </button>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>

      <Dialog
        aria-label="Registration form"
        isOpen={openModal === 'register'}
        onDismiss={close}
      >
        <button className="close-button" onClick={close}>
          Close
        </button>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
