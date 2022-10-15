import React from "react";
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main" className="bg-white">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout