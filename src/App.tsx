import { Route, Routes } from "@solidjs/router"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Contact from "./pages/Contact"


function App() {

  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} /> 
    </Routes>
  )
}

export default App
