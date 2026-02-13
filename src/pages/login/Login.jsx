
import "./Login.css";
import logo from "../../assets/logo.png"
import { useState } from "react";
import { login , singup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif"


const Login = () => {

const [singInState , setSingInSate] = useState("Sing In");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoding] = useState(false);

const user_auth = async (event)=>{
  event.preventDefault();
  setLoding(true);
  if(singInState==="Sing In"){
    await login(email, password)
  }else{
    await singup(name, email, password);
  }
  setLoding(false);
}

  return (
  loading?<div className="loading-spinner">
    <img src={netflix_spinner} alt="" />
</div>:
  <div className='login'>
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{singInState}</h1>
        <form>
          {
            singInState === 'Sing Up'?
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your Name" /> : <></>
          }
          
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" />
          <button onClick={user_auth} type="submit" >{singInState}</button>
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
