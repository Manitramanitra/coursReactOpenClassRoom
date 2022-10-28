import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <nav>
         <Link to="/">Accueil</Link>
         <span> </span>
         <Link to="/survey/42">Questionnaire</Link>
      </nav>
   );
};

export default Header;