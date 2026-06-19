import { React, useState }  from "react";
import { Menu, Specials, About, Contact, Back, BackHome } from './restaurant.jsx';
import restaurant from './assets/Restaurant.png'


export function RestaurantScreen() {
const [section,setSection] = useState(null)

if (section === "menu") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<Menu />
</div>
);
}

if (section === "specials") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<Specials />
</div>
);
}

if (section === "contact") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<Contact />
</div>
);
}

if (section === "about") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<About />
</div>
);
}



return (
<>
<img src = {restaurant} className = "restfixes" />
<button className = "Menu" onClick={() => 
setSection("menu")}> Menu </button>

<h1 className = "bizname" style = {{left: "40%" }}> Your Business Name </h1>
<h4 className = "instructions" style = {{position:"absolute",top:"27%",left: "30%",transform:"rotate(-4deg)"}}> Click on the menu, the chalkboard, waitress or business name to get started </h4> 

<button className = "Specials" onClick={() => 
setSection("specials")}> Specials </button>

<button className = "About" onClick={() => 
setSection("about")}> About </button>

<button className = "Contact" onClick={() => 
setSection("contact")}> Contact </button>


{section == "menu" && <Menu />}
{section == "specials" && <Specials />}
{section == "about" && <About />}

</>

);

}
