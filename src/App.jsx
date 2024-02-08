import { BrowserRouter,Routes,Route } from "react-router-dom"
import Appcomponent from './Appcomponent'
import Pockemonid from "./components/react-router/Pockemonid"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Appcomponent/>}/>
              <Route path="/pockemon/:id" element={<Pockemonid/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App