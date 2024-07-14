import"./BodyType.css";

const BodyType:React.FC=()=>{ 
return (<div className="body-type-container">
    <div className="body-type">
        <img src="slim.PNG" alt="slim body"></img>
        <h3 className="body-type-label">Slim</h3>
    </div>
    <div className="body-type">
        <img src="average.PNG" alt="average body"></img>
        <h3 className="body-type-label">Average</h3>
    </div>
    <div className="body-type">
        <img src="heavy.PNG" alt="heavy body"></img>
        <h3 className="body-type-label">Heavy</h3>
    </div>
</div>);
}
export default BodyType ; 