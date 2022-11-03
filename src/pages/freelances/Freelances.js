import React from "react";
// import DefaultPicture from "../../../public/avatar.jpg";
import Card from "../../components/card/Card";

const Freelances = () => {
   const freelanceProfiles = [
      {
         name: "Jane Doe",
         jobTitle: "Devops",
         picture: "./avatar.jpg",
      },
      {
         name: "John Doe",
         jobTitle: "Developpeur frontend",
         picture: "./avatar.jpg",
      },
      {
         name: "Jeanne Biche",
         jobTitle: "Développeuse Fullstack",
         picture: "./avatar.jpg",
      },
   ];
   return (
      <div>
         <h1>Freelances</h1>
         {freelanceProfiles.map((profile, index) => (
            <Card
               key={index}
               label={profile.jobTitle}
               picture={profile.picture}
               title={profile.name}
            />
         ))}
      </div>
   );
};

export default Freelances;
