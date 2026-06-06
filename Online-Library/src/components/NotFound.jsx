
import { useRouteError } from "react-router-dom"



function NotFound() {

  const error = useRouteError();

  return (
    <div>

      <h1>Oops !!</h1>
      <h2>Please Enter Correct Path</h2>

      <h3>{error.status} {error.statusText}</h3>
      <h3>{error.data}</h3>


    </div>
  )

}



export default NotFound