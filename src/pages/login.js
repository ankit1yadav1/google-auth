import React from "react";
import {Helmet} from "react-helmet";
import Login from '../components/Login';
 
export default class LoginPage extends React.Component {

  componentDidMount(){
     document.querySelector('body').classList = "loginpg bg poppins"
  }

  render () {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="stylesheet" href="/bundle/css/styles.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600;700;800&family=Comfortaa:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet" />
            </Helmet>
            <main>
              <Login />
            </main>
        </>
    );
  }
};