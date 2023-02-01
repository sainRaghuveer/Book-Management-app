import React from 'react';
import {Link} from "react-router-dom";
import styles from "../Styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <Link to={"/"}><button style={{padding:"10px", backgroundColor:"blue", borderRadius:"10px", color:"white"}}>Home</button></Link>
        <h1>BOOK MANAGEMENT</h1>
        <Link to={"login"}><button style={{padding:"10px", backgroundColor:"blue", borderRadius:"10px", color:"white"}}>Login</button></Link>
    </div>
  )
}

export default Navbar