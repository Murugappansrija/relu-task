import React, { useState } from "react";
import "./sidenavpart.css";
import backgrount1 from "./imegas/pexels-ekaterina-12203460.png";
import backgrount2 from "./imegas/pexels-genaro-servín-763210@2x.png";
import background3 from "./imegas/pexels-pixabay-164455.png";
import bacground4 from "./imegas/background4.png";
import pp1 from "./imegas/pexels-anastasia-shuraeva-4406721@2x.png";
import pp2 from "./imegas/pexels-andrea-piacquadio-3771118@2x.png";
import pp3 from "./imegas/pexels-antoni-shkraba-4442005@2x.png";
import pp4 from "./imegas/pexels-antoni-shkraba-4442102@2x.png";

const Sidenavpart = () => {
  const [smallpost, setsmallpost] = useState([
    {
      username: "Thomas Edward",

      userimage: pp1,
      bacgroundimage: backgrount1,
    },
    {
      username: "Chris Doe",

      userimage: pp2,
      bacgroundimage: backgrount2,
    },
    {
      username: "Emilie Jones",

      userimage: pp3,
      bacgroundimage: background3,
    },
    {
      username: "Jessica Williams",

      userimage: pp4,
      bacgroundimage: bacground4,
    },
  ]);
  return (
    <div className="seller-suggestion">
      <div className="margincontainer">
        <span className="seller">Become a Seller</span>
      </div>
      <div className="photographer">
        <span>Artists</span>
        <span>Photographers</span>
      </div>
      {smallpost.map((post) => (
        <div
          className="pht-containers"
          style={{ backgroundImage: `url(${post.bacgroundimage})` }}
        >
          <div className="cardimag">
            <div
              className="smallimg"
              style={{ backgroundImage: `url(${post.userimage})` }}
            >

            </div>
            <div className="userdata">
              <span className="prname">{post.username}</span>
              <span>@thewildwithyou</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidenavpart;

