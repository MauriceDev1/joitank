import { Route, Routes } from "@solidjs/router"
import Home from "./pages/Home"


function App() {

  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  )
}

export default App
