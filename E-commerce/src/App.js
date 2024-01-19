
import './App.css';
import Navber from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';

const client=new QueryClient()

function App() {
  return (
    <div className="App ">
      <QueryClientProvider client={client}>
        <AuthContextProvider>
             <Navber/>
             
             <Outlet/> 
        </AuthContextProvider>
    
      </QueryClientProvider>
    </div>
  );
}

export default App;
