import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Context/Context";
import"./BodyType.css";

const BodyType:React.FC=()=>{ 
    const{updateUser}=useUsers(); 
    const navigate = useNavigate();
    const handleSelectedBodyType=(bodyType:string) =>{  
        updateUser({bodyType}); 
        console.log("selected body type : "+bodyType);
        navigate('/bodyGoal');
    }
return (<div className="body-type-container">
    <div className="body-type" onClick={()=>handleSelectedBodyType("slim")}>
        <img src="slim.PNG" alt="slim body"></img>
        <h3 className="body-type-label">Slim</h3>
    </div>
    <div className="body-type" onClick={()=>handleSelectedBodyType("Average")}>
        <img src="average.PNG" alt="average body"></img>
        <h3 className="body-type-label">Average</h3>
    </div>
    <div className="body-type" onClick={()=>handleSelectedBodyType("heavy body")}>
        <img src="heavy.PNG" alt="heavy body"></img>
        <h3 className="body-type-label">Heavy</h3>
    </div>
</div>);
}
export default BodyType ; 