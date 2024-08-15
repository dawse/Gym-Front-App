import { useNavigate } from 'react-router-dom';
import"./UserInfos.css";
const UserInfos : React.FC=()=>{ 
  const navigate = useNavigate();
 const  handleJoinClick=()=>{ 
  navigate('/age');
  };
return (<div>
    <img src="gymBackround.PNG" alt ="Backround" className="image-backround"></img>
    <div className="bg-text">
  <h3 className="title-user-info">Stronger Every Day – Join Now and Discover Your Potential!</h3>
  <button className="button-user-info" onClick={handleJoinClick}>Join the Movement</button>
</div>
</div>
);
};
export default UserInfos ; 