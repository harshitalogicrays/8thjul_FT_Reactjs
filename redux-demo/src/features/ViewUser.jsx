import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_ALL_USERS, REMOVE_USER, selectUsers } from '../redux/userSlice'

const ViewUser = () => {
    // const users = useSelector((state)=>state.user.users)

    const users = useSelector(selectUsers)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>User List</h1><hr/>
      <div class="table-responsive" >
        <table class="table table-bordered table-striped table-hovered"  >
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.length==0 && <tr><td colSpan={5}>No user found</td></tr>}
                {users.map((user,i)=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-danger"
                     onClick={()=>dispatch(REMOVE_USER(user.id))}
                        >
                              <FaTrashAlt/>
                        </button>
                        
                      </td>
                </tr>
                )}
            </tbody>
        </table>
      </div>
      {users.length !=0 &&
      <button
        type="button"
        class="btn btn-danger btn-lg"
        onClick={()=>dispatch(REMOVE_ALL_USERS())}
      >
        Remove All
      </button>
    }
    </div>
  )
}

export default ViewUser
