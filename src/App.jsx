import React, {useState} from 'react'
import CreateArticle from './components/CreateArticle'
import Login from './components/Login'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <>
      { authenticated ? (
        <CreateArticle />
      ) : (
        <Login 
          authenticate={(authStatus) => setAuthenticated(authStatus)}
        />
      )}
    </>
  )
}

export default App