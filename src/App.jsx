import './App.css'
import {AuthContextProvidor} from './index'
function App() {

  return (

   <>
   <AuthContextProvidor>
    <span>Hola desde content</span>
   </AuthContextProvidor>
   </>
  )
}

export default App
