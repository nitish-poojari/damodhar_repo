
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
function Login() {
  let User=[
    {
      Name:"Damodhar",
      contact:9923064941,
      Email:"damu@gmail.com",
      city:"Aurangabad",
      password:'damu'
    },
    {
      Name:"Sahil",
      contact:9168329427,
      Email:"sahil@gmail.com",
      city:"pune",
      password:'sahil'
    },
    {
      Name:"Abhishek",
      contact:1234567890,
      Email:"abhi@gmail.com",
      city:"jalna",
      password:'abhi'
    },
  ]
  const Admin={
    Email:'admin@gmail.com',
    password:'admin'
  }
  let [Login,setLogin] = useState({})
  let login=()=>{
    for(let i=0;i<User.length;i++){
      if(User[i].Email==Login.Email && User[i].password==Login.password){
        navigate('/Available_hotel')
        return
      }
      else if(Admin.Email==Login.Email && Admin.password==Login.password){
        navigate('/Add_hotel')
        return
      }
    }
    alert("Enter Correct Details") 
  }
  let handleChange=(e)=>{
    setLogin({...Login,[e.target.id]:e.target.value})
  }
const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-center m-5">
      <div className="col-md-4 m-5"></div>
      {/* form  start */}
      <div className="col-md-4 ">
        <form  className="m-2 border p-3">
          <div className="register">
            <h5 className="text-center">Login</h5>
            <hr />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email 
            </label>
            <input
                onChange={handleChange}
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
            />
          </div>

          <button onClick={login} type="button" className="btn btn-success mb-1">
            Login
          </button>
            <p className='text-dark'><Link to="/Register">Register Now</Link></p>
        </form>
      </div>
        <div className="col-md-4"></div>
    </div>    
  )
}
export default Login