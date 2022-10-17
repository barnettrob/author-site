import React from "react";
import Header from "./header";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main" className="bg-white content-wrapper">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout