import './App.css';
import UserInfos from './components/UserInfos/UserInfos';
import { UserProvider } from './Context/Context';

function App() {
  return (
    <UserProvider>
    <UserInfos/>
    </UserProvider>
  );
}

export default App;
