import React from "react";
import "./style.css";
import {FaHome} from '@react-icons/all-files/fa/FaHome'
import {BsFillDropletFill} from '@react-icons/all-files/bs/BsFillDropletFill'

export default function App() {
  return (
    <div class="container">
      <h1 className="chico">Hel-oTImE</h1>
      
      <audio style={{backgroundColor:"blueviolet", borderRadius:"15%"}} className="chic" controls>
        <source src="" type="audio/mpeg" />
        </audio>
        
        <div className="chic"><div  className="Pmack">
     <div style={{color: "red"}}><BsFillDropletFill /></div>
    <div className="Pmack"><span className="bibop" style={{color: "red"}}><BsFillDropletFill /></span></div>
    </div>
  
          </div>
      <div>
        <canvas className="casva">
        </canvas>
      </div>
      <p className="chico"><span style={{fontWeight: 'bold'}}>{Date()}</span></p>

    <div className="face">
    <div className="first" style={{color: "red"}}>
    </div>
    </div>
  <footer className="foot" style={{color:"transparent"}}>
  </footer>
  </div>
  );
  }