import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardLabel = styled.span`
   color: #5843e4;
   font-size: 22px;
   font-weight: bold;
`; // on crée une balise CardLabel de type span avec les css inclut dans le cote
const CardImage = styled.img`
   height: 80px;
   width: 80px;
   border-radius: 50%;
`;
const Card = ({ label, title, picture }) => {
   return (
      <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
         <CardLabel>{label}</CardLabel>
         <CardImage src={picture} alt="freelance" height={80} width={80} />
         <span>{title}</span>
      </div>
   );
};

Card.propTypes = {
   label: PropTypes.string,
   title: PropTypes.string,
   picture: PropTypes.string,
}; /** component.propTypes permet de typer les props */
Card.defaultProps = {
   title: "Mon titre par défaut",
   label: "my default Job",
   picture: "./avatar.jpg",
};
export default Card;
