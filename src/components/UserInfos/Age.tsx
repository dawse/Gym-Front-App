import { useState } from "react";
import"./Age.css";
interface AgeCategoryProps {
    youngAdult:string;
    earlyMidlife:string ; 
    midLife:string ; 
    goldenYears:string ;   
}

const Age : React.FC<AgeCategoryProps>=({youngAdult,earlyMidlife,midLife,goldenYears})=>{ 
return (<div className="age-infos-container">
    <div className="body-type-infos">
       {youngAdult}
       <img src="18.PNG" alt="20 body type"></img> 
    </div>
    <div className="body-type-infos">
        {earlyMidlife} 
        <img src="30.PNG" alt="30 body type"></img>
    </div>
    <div className="body-type-infos">
        {midLife}
        <img src="40.PNG" alt="40 body type"></img>
    </div>
    <div className="body-type-infos">
        {goldenYears}
        <img src="50+.PNG" alt="50+ body type"></img>
    </div>
</div>);
}
export default Age ; 