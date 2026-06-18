import React from "react";
import './App.css';
import home from './assets/Home.png'

export function HomeScreen({setView }) {
return (
<>
<img src = {home} className = "homescene"/>
<div style = {{display:"flex", flexDirection: "column", alignItems: "center"}}>
<h1 className = "bizname">Your Business Name </h1>
</div>

<button className= "homebutton" style = {{width:100}} onClick = {() => setView("restaurant")}
 >
Enter and experience our offerings! </button>


</>

);
}
