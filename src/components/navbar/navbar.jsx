import { Link } from "react-router-dom";
import "/css/navbar.css";
let bars=document.querySelector(".fa-bars")
let active=document.querySelector(".active")

bars.onclick=()=>{
  active.classList.toggle("show")
}

const Navbar = () => {
 
  return (
    <div className="container">
     <Link to={"/"}>
     <img src="/images/navlogo.svg" alt="" /></Link> 
      
      <ul>
        <li>
       
          <Link to={"/Main2"} >About Us</Link>
        </li>
        <li>
       
          <Link to={"/Main5"} >Services</Link>

        </li>
        <li>
          
          <Link to={"/Main7"} >Work</Link>

        </li>
        <li>
          
          <Link to={"/Main3"} >News</Link>

        </li>
        <li>
          
          <Link to={"/Main4"} >Contacts</Link>

        </li>
      </ul>
      <div className="extras">
        <div className="box">
          <div className="logo">
            <img src="/images/navicon1.svg" alt="" />
          </div>
          <div className="text">
            <h3>Call us</h3>
            <h2>(405) 555-0128</h2>
          </div>
        </div>
        <div className="box">
          <div className="logo">
            <img src="/images/navicon2.svg" alt="" />
          </div>
          <div className="text">
            <h3>Talk to us</h3>
            <h2>hello@createx.com</h2>
          </div>
        </div>
      </div>
      <div className="bars">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="active">
      <ul>
        <li>
       
          <Link to={"/Main2"} >About Us</Link>
        </li>
        <li>
       
          <Link to={"/Main5"} >Services</Link>

        </li>
        <li>
          
          <Link to={"/Main7"} >Work</Link>

        </li>
        <li>
          
          <Link to={"/Main3"} >News</Link>

        </li>
        <li>
          
          <Link to={"/Main4"} >Contacts</Link>

        </li>
      </ul>
      
        <h2 className="exit">x</h2>
      
      </div>

    </div>
  );
};

export default Navbar;
