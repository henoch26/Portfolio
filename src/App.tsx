import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experiences from "./components/Experiences"
function App() {
  return (
    <div>
      <div className="px-2 md:px-8 lg:px-16">
      <Navbar />
      <Home />
    </div>
    <div>
      <About />
    </div>
    <div className="bg-gray-200 p-4">
      <Experiences/>
    </div>
    
    </div>
    
  )
}

export default App
