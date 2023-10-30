import React, { useState } from "react";
import "./sidenavpart.css";

const Sidenavpart = () => {
  const [smallpost, setsmallpost] = useState([
    {
      username: "Thomas Edward",

      userimage: "",
      bacgroundimage: "",
    },
    {
      username: "Chris Doe",

      userimage: "",
      bacgroundimage: "",
    },
    {
      username: "",

      userimage: "",
      bacgroundimage: "",
    },
    {
      username: "",

      userimage: "",
      bacgroundimage: "",
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
       
     >
      
       <div className="cardimag">
         <div className="smallimg"></div>
         <div className="userdata">
           <span className="prname">{post.username}</span>
           <span>@thewildwithyou</span>
         </div>
       </div>
     </div>))
     }
     
    </div>
  );
};

export default Sidenavpart;

{/* <div className="pht-containers">
<div className="cardimag">
  <div className="smallimg"></div>
  <div className="userdata">
    <span className="prname"></span>
    <span>@thewildwithyou</span>
  </div>
</div>
</div> */}



{/* <div
className="pht-containers"

>

<div className="cardimag">
  <div className="smallimg"></div>
  <div className="userdata">
    <span className="prname">{post.username}</span>
    <span>@thewildwithyou</span>
  </div>
</div>
</div> */}
