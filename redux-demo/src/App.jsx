import AddUser from './features/AddUser'
import ViewUser from './features/ViewUser'

function App() {
    return (
      <>
       <div className="container shadow p-3 mt-5">
        <div className="row">
          <div className="col">
            <AddUser/>
          </div>
          <div className="col">
            <ViewUser/>
          </div>
        </div>
       </div>
      </>
    )
}

export default App
