import React from "react";
import menu from './assets/menu.jpeg';
import specials from './assets/specials.jpeg';
import contact from './assets/Contact.png';

export function Menu() {

return (
<>
<img src = {menu} className = "menucard" />
<div className = "menucontents">
<h1 className = "menuhead"> Menu </h1>

<h2 className = "menusubl"> Starters </h2>
<ul>
<li> Peri peri French fries, ₹100 </li>
<li> Honey Chilli Potato, ₹120 </li>
</ul>
<h2 className = "menusubl"> Beverages </h2>
<ul>
<li> Hot chocolate, ₹150 </li>
</ul>
</div>
</>

);

}


export function Specials() {

return (
<>
<img src = {specials} className = "specialsimg" />
<div className = "splcontents">
<h1 className = "splhead"> Specials </h1>
<ul>
<li className = "splitems"> Korean BBQ Chicken, ₹200 </li>
</ul>
</div>
</>

);

}

export function About() {

return (

<>
<h1 style = {{position:"relative", top: "10%"}}> About us! </h1>

<h2> Our vision... </h2>

<h2> Our creator... </h2>

<h2> Our other ventures... </h2>

</>)

}


export function Contact() {
return (
<>
<img src = { contact } className = "contactcard" />
<div className = "contactcontents">
<h2 className = "contacthead"> Contact Us </h2>

<h2 className = "contactwhatsapp"> +91- </h2>

<h2 className = "contactinsta"> @biz.name </h2>

<h2 className = "contactcall"> +91- </h2>

</div>
</>

);

}


export function Back() {
<button>Back to restaurant</button>

}


export function BackHome() {



}
