import { useState } from "react";
import"./Age.css";
import { useUsers } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Age : React.FC=()=>{ 
    const navigate = useNavigate();
    const { updateUser } = useUsers();
    const handleSelectedImage=(age:number)=>{ 
        updateUser({ age });
        console.log("selected image value:"+age);
        navigate('/bodyType');
    }
  
return (
    <div className="age-infos-container">
    <div className="body-type-infos" onClick={()=>handleSelectedImage(20)}>
       Age : 18-29
       <img src="18.PNG" alt="20 body type"></img> 
    </div>
    <div className="body-type-infos" onClick={()=>handleSelectedImage(30)}>
      Age : 30-39
        <img src="30.PNG" alt="30 body type"></img>
    </div>
    <div className="body-type-infos" onClick={()=>handleSelectedImage(40)}>
    Age : 40-49
        <img src="40.PNG" alt="40 body type"></img>
    </div>
    <div className="body-type-infos" onClick={()=>handleSelectedImage(50)}>
      Age : 50+
        <img src="50+.PNG" alt="50+ body type"></img>
    </div>
</div>);
}
export default Age ; 