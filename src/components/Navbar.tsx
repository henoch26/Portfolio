import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center  md:justify-between pa-4">
        <a href="" className="flex items-center text-xl font-bold mt-4 mr-4 md:mr-8">
            <Container />
            HEN<span className="text-cyan-400">DEV</span>
        </a>
        <ul className="menu menu-horizontal hidden sm:flex  px-1 gap-1 md:gap-2 lg:gap-4 mt-1">
            <li>
                <a href="#" className="btn bg-transparent text-dark ">Accueil</a>
            </li>
            <li>
                <a href="#" className="btn bg-transparent text-dark ">A propos</a>
            </li>
            <li>
                <a href="#" className="btn bg-transparent text-dark">Mes experiences</a>
            </li>
            <li>
                <a href="#" className="btn bg-transparent text-dark">Mes projets</a>
            </li>
        </ul>
      
        
    </div>
  );
}

export default Navbar;