import { useUsers } from "../../Context/Context";

const BodyGoal:React.FC=()=>{ 
    const{updateUser}=useUsers();
    const handleSelectedBodyGoal =(goal:string)=>{ 
        updateUser({goal});
        console.log("selected body goal:"+goal);
    } 
return(<div className="body-type-container">
    <div className="body-type" onClick={()=>handleSelectedBodyGoal("lose weight")}>
        <img src="loseWeight.PNG" alt="lose Weight"></img>
        <h3 className="body-type-label">Lose Weight</h3>
    </div>
    <div className="body-type" onClick={()=>handleSelectedBodyGoal("gain muscle")}>
        <img src="gainMuscle.PNG" alt="gain Muscle"></img>
        <h3 className="body-type-label">Gain Muscle</h3>
    </div>
    <div className="body-type" onClick={()=>handleSelectedBodyGoal("get shredded")}>
        <img src="getShredded.PNG" alt="get Shredded"></img>
        <h3 className="body-type-label">Get Shredded</h3>
    </div>
</div>
)
}
export default BodyGoal ; 