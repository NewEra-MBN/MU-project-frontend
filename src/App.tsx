import type {JSX} from 'react'
import { Routes, Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import AuthModal from './Authencation/AuthModal'
export default function App():JSX.Element{
  return(
    <Routes>
        <Route path='/' element={<HomePage/>}>
            <Route path="login" element={<AuthModal mode ="login"/>}/>
            <Route path="signup" element={<AuthModal mode="signup"/>}/>
        </Route>
    </Routes>
  )
}