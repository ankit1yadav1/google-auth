import React from "react";
import { Helmet } from "react-helmet";
import UserList from "../components/UserList";

export default class List extends React.Component {
  componentDidMount() {
    document.querySelector("body").classList = "listpg poppins";
  }
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="stylesheet" href="/bundle/css/styles.min.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600;700;800&family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <UserList />
      </>
    );
  }
}
