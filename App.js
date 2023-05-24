import './App.css';
import React from 'react'
import NavBars from './Components/NavBars';
import Newss from './Components/Newss';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  
  
    return (
      // <BrowserRouter>
      <div>
        <NavBars/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={10}
        
      />
        <Newss pageSize={5} country="in" category="science"/>
        {/* <Switch>
          <Route exact path='/' element= {<Newss key="general" pageSize={5} country="in" category="general"/>}/>
<Route exact path='/entertainment' element= { <Newss key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
<Route exact path='/business' element= { <Newss key="business" pageSize={5} country="in" category="business"/>}/>
<Route exact path='/health' element= {<Newss key="health" pageSize={5} country="in" category="health"/> }/>
<Route exact path='/science' element= { <Newss key="science" pageSize={5} country="in" category="science"/>}/>
<Route exact path='/sports' element= {<Newss key="sports" pageSize={5} country="in" category="sports"/> }/>
<Route exact path='/technology' element= { <Newss key="technology" pageSize={5} country="in" category="technology"/>}/>
        </Switch>
          */}
         
      </div>
  
    )
  
}
export default App