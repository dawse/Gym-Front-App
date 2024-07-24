import Age from "./Age";
import BodyFat from "./BodyFat";
import BodyGoal from "./BodyGoal";
import BodyType from "./BodyType";
import"./UserInfos.css";
const UserInfos : React.FC=()=>{ 
return (<div>
    <img src="gymBackround.PNG" alt ="Backround" className="image-backround"></img>
    <div className="bg-text">
  <h3 className="title-user-info">Stronger Every Day – Join Now and Discover Your Potential!</h3>
  <button className="button-user-info">Join the Movement</button>
</div>
<Age youngAdult={"Age: 18-29"} earlyMidlife={"Age: 30-39"} midLife={"Age: 40-49"} goldenYears={"Age: 50+"}/>
<BodyType/>
<BodyGoal/>
<BodyFat/>
</div>

);
};
export default UserInfos ; 