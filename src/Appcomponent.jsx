import Pockemonlist from "./components/Pockemonlist"
import Pockedex from "./components/Pockedex"
import Search from "./components/Search"
import { useEffect, useState } from "react"
import Pockemonid from "./components/react-router/Pockemonid"
function App() {
  const [searchelement,setsearchelement]=useState('')
  return (
    <>
        <Pockedex/>
        <Search updatepockemon={setsearchelement}/>
        {(!searchelement)?<Pockemonlist/>:<Pockemonid key={searchelement} Searchid={searchelement}/>}
    </>
  )
}

export default App