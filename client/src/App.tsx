import './App.css'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import { DashBoard } from './pages/dashboard';
import { Auth } from './pages/auth';
import { SignedIn,  UserButton } from "@clerk/clerk-react";
import { FinancialRecordsProvider } from './context/financial-record-context';

function App() {


  return (

    <Router>
      <div className='app-container'>
        <div className='navbar'>
           <Link to="/" >Dashboard</Link>
           <SignedIn>
                <UserButton showName/>
            </SignedIn>
        </div>
        <Routes>
          <Route path='/' element={
            <FinancialRecordsProvider>
              <DashBoard/>
              </FinancialRecordsProvider>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
