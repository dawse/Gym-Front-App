import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfos from './components/UserInfos/UserInfos';
import { UserProvider } from './Context/Context';
import Age from './components/UserInfos/Age';
import BodyType from './components/UserInfos/BodyType';
import BodyGoal from './components/UserInfos/BodyGoal';
import BodyFat from './components/UserInfos/BodyFat';
import HeightWeight from './components/UserInfos/HeightWeight';
import LevelOfFitness from './components/UserInfos/LevelOfFitness';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<UserInfos />} /> 
        <Route path="/age" element={<Age />} />
        <Route path="/bodytype" element={<BodyType/>} />
        <Route path="/bodyGoal" element={<BodyGoal/>} />
        <Route path="/bodyFat" element={<BodyFat/>} />
        <Route path="/height&weight" element={<HeightWeight/>} />
        <Route path="/levelOfFitness" element={<LevelOfFitness/>} />
      </Routes>
    </Router>
  </UserProvider>
  );
}

export default App;
