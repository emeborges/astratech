import { ToastContainer } from 'react-toastify';
import './App.css'
import { UserView } from './components/UsersView'
import { UserProvider } from './context/UsersContext'
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <UserProvider>
      <div className="container">
        <UserView />
      </div>
      <ToastContainer />
    </UserProvider>
  );
}

export default App
