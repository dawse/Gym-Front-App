import { useState } from "react";
import"./Age.css";
import { useUsers } from "../../Context/Context";
interface AgeCategoryProps {
    youngAdult:string;
    earlyMidlife:string ; 
    midLife:string ; 
    goldenYears:string ;   
}

const Age : React.FC<AgeCategoryProps>=({youngAdult,earlyMidlife,midLife,goldenYears})=>{ 
    const { updateUser } = useUsers();
    const handleSelectedImage=(age:number)=>{ 
        updateUser({ age });
        console.log("selected image value:"+age);
    }
  
return (
    <div className="age-infos-container">
    <div className="body-type-infos" onClick={()=>handleSelectedImage(20)}>
       {youngAdult}
       <img src="18.PNG" alt="20 body type"></img> 
    </div>
    <div className="body-type-infos" onClick={()=>handleSelectedImage(30)}>
        {earlyMidlife} 
        <img src="30.PNG" alt="30 body type"></img>
    </div>
    <div className="body-type-infos" onClick={()=>handleSelectedImage(40)}>
        {midLife}
        <img src="40.PNG" alt="40 body type"></img>
    </div>
    <div className="body-type-infos" onClick={()=>handleSelectedImage(50)}>
        {goldenYears}
        <img src="50+.PNG" alt="50+ body type"></img>
    </div>
</div>);
}
export default Age ; 