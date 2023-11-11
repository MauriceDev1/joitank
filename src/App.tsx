import { Route, Routes } from "@solidjs/router"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Contact from "./pages/Contact"


function App() {

  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  )
}

export default App
