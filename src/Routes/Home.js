
import Navbar from "../components/Navbar";
import Cards from "./Card/Cards";
import "./Home.css";

function Home() {
  return (
       <div className="App">
        <div className="Glass">
         <Navbar />  
         <Cards/>              
      </div>
     </div>
  );
}
export default Home;
