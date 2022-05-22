import './App.css';
import React , {useState} from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App(){
    
  const [progress , setProgress] = useState(40)
  
  return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Navbar />
        
      
        <Routes>
          <Route path="/" element={<Newscomponent setProgress = {setProgress} key="general" pageSize = {15} country='in' category="general" />} />
          <Route path="/home" element={<Newscomponent setProgress = {setProgress} key="general" pageSize = {15} country='in' category="general" />} />

          <Route exact path="/business" element={<Newscomponent setProgress = {setProgress} key="business" pageSize = {15} country='in' category="business" />} />
          <Route exact path="/entertainment" element={<Newscomponent setProgress = {setProgress} key="entertainment"  pageSize = {15} country='in' category="entertainment" />} />
          <Route exact path="/general" element={<Newscomponent setProgress = {setProgress} key="general" pageSize = {15} country='in' category="general" />} />
          <Route exact path="/health" element={<Newscomponent setProgress = {setProgress} key="health" pageSize = {15} country='in' category="health" />} />
          <Route exact path="/science" element={<Newscomponent setProgress = {setProgress} key="science" pageSize = {15} country='in' category="science" />} />
          <Route exact path="/sports" element={<Newscomponent setProgress = {setProgress} key="sports" pageSize = {15} country='in' category="sports" />} />
          <Route exact path="/technology" element={<Newscomponent setProgress = {setProgress} key="technology" pageSize = {15} country='in' category="technology" />} />
          
          
        </Routes>

         </Router>
      </div>
    )
  }

