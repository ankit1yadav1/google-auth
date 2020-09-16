import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

function Login(){
  const [ userInfo, setUserInfo ] = useState(false)
  const [ failedUserInfo, setfailedUserInfo ] = useState(false)

  const responseGoogleSuccess = (response) =>{
    let user = {
      name : response.profileObj.name,
      email : response.profileObj.email,
      imageUrl : response.profileObj.imageUrl,
      _id: response.profileObj.googleId,
    }
    sessionStorage.setItem("gId", response.profileObj.googleId)
    axios.post('https://google-users-auth-api.herokuapp.com/auth/users', user)
    .then((response)=>{
      localStorage.setItem("user",JSON.stringify(response))
      setUserInfo(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const responseGooglefailed = () => {
    setfailedUserInfo(true)
  }

  const showFailBox = () => {
    alert("Google Authentication Failed! Please try again")
  }

  return(
    <>
      {userInfo && <Redirect to='/users' /> }
      {failedUserInfo && showFailBox() }
      <div className="lg">
        <div className="cw flex justifycenter aligncenter hscreen">
            <div className="wpr text-center wfull boxshadow">
              <div className="logo">
                <img src="../img/image 12.png" alt="brandlogo" className="mauto" />
                <h1 className="text-bold">Sign in with Google</h1>
              </div>
              <div className="lgnfrm flex colwrap">
                <GoogleLogin
                  clientId="682740235501-va7f09rkt99fvu12invmf6snifagrpab.apps.googleusercontent.com"
                  render={renderProps => (
                    <button className="btn text-bold wfull poppins" id="LoginButton" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In</button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogleSuccess}
                  onFailure={responseGooglefailed} />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login






















// import React from 'react'
// import { Link } from 'react-router-dom'
// import GoogleLogin from 'react-google-login'

// import styles from './'

// function Login(){
//   function responseGoogle(response){
//     console.log("Hello",response)
//   }
//   return(
//     <>
//       <div className="App">
//         <div className="row">
//         <div className="col-sm-12 btn btn-info">Login With Google Using ReactJS</div>
//           <div className="row">
//           <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
//             <div className="col-sm-4"></div>
//             <div className="col-sm-4">
//               <GoogleLogin
//                 clientId="682740235501-va7f09rkt99fvu12invmf6snifagrpab.apps.googleusercontent.com"
//                 buttonText="Login with Google"
//                 onSuccess={responseGoogle}
//                 onFailure={responseGoogle}
//                 isSignedIn={true} />
//             </div>
//             <div className="col-sm-4"></div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }

//export default Login