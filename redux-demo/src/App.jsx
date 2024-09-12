import { useDispatch } from 'react-redux'
import './App.css'
import { ADD_USER } from './redux/userSlice'

function App() {
  const dispatch = useDispatch()
  let handleAdd=()=>{
    dispatch(ADD_USER("harshita"))
  }
    return (
      <>
        <button type="button" onClick={handleAdd}>Add User</button>
      </>
    )
}

export default App
