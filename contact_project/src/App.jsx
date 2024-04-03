
import Contact from "./components/Contact/Contact"
import Contact_form from "./components/Contact_form/Contact_form";
import Navbar from "./components/Navbar/Navbar"


function App() {
  

  return (
    <div>
      <Navbar />
      <div className="webpage_container">
        <Contact />
        <Contact_form />
        
      </div>
    </div>
  );
  
}

export default App
