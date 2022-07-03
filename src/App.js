import React from "react";
import "./style.css";
import {FaHome} from '@react-icons/all-files/fa/FaHome'
import {BsFillDropletFill} from '@react-icons/all-files/bs/BsFillDropletFill'

export default function App() {
  return (
    <div class="container">
      <h1 className="chico">Hel-oTImE</h1>
      
      <audio style={{backgroundColor:"blueviolet", borderRadius:"15%"}} className="chic" controls>
        <source src="./audio/juice" type="audio/mp3" />
        <source src="" type="audio/mpeg" />
        </audio>

        <div className="chic"><div  className="Pmack">
     <div style={{color: "red"}}><BsFillDropletFill /></div>
    <div className="Pmack"><span className="bibop" style={{color: "red"}}><BsFillDropletFill /></span></div>
    </div>
  
          </div>
     
      <p className="chico"><span style={{fontWeight: 'bold'}}>{Date()}</span></p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AcE7Yrj8Y8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="face">
    <div className="first" style={{color: "red"}}>
    </div>
    </div>
  <footer className="foot" style={{color:"black"}}>
  <button className="kl" type="button" style={{cursor:'pointer'}}><FaHome /><a className="kl" href="https://github.com/21stChrom/" alt="GitHub Home page"></a></button>
  <div className="space" style={{content:"''"}} />
      <button style={{cursor:'pointer'}}><div>+<BsFillDropletFill /></div></button>
 <div className="space" style={{content:"''"}} />
      <button style={{cursor:'pointer'}}><div>-<BsFillDropletFill /></div></button>
   
  </footer>
  </div>
  );
  }