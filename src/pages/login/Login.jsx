
import "./Login.css";
import logo from "../../assets/logo.png"
import { useState } from "react";


const Login = () => {

const [singInState , setSingInSate] = useState("Sing In")

  return (
    <div className='login'>
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{singInState}</h1>
        <form>
          {
            singInState === 'Sing Up'? <input type="text" placeholder="Enter your Name" /> : <></>
          }
          
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Enter your password" />
          <button>{singInState}</button>
          <div className="form-help">
            <div className="remamber">
              <input type="checkbox" />
              <label htmlFor="">Remamber me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            singInState === 'Sing In'? <p>New to Netflix? <span onClick={()=>{setSingInSate("Sing Up")}}>Sing Up Now</span></p>
            :<p>Already Have Account? <span onClick={()=>{setSingInSate("Sing In")}}>Sing In Now</span></p>
          }
          
          
        </div>
      </div>
     

    </div>
  )
}

export default Login
