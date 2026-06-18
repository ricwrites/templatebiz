import { useState } from 'react'
import heroImg from './assets/logo.jpeg'
import './App.css'
import { HomeScreen } from './homescreen.jsx'
import { RestaurantScreen } from './restaurantscreen.jsx'


function App() {
  const [view, setView] = useState("home")

  return (
    <>
    {view == "home" && (
    <HomeScreen setView={setView} />
)}
    {view == "restaurant" && (
    <RestaurantScreen setView = {setView} />
)}

    </>
  );
}

export default App
