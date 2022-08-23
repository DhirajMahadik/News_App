
import NavBar from './components/NavBar'
import News from './components/News';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App =()=> {
  let pageNo = 9;
 
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route exact path ="/" element={<News key='general' pageSize={pageNo}  category={'general'} country={'us'}/>}/>
          <Route exact path ="/entertainment" element={<News key='entertainment' pageSize={pageNo}  category={'entertainment'} country={'us'}/>}/>
          <Route exact path ="/business" element={<News key='business' pageSize={pageNo}  category={'business'} country={'us'}/>}/>
          <Route exact path ="/health" element={<News key='health' pageSize={pageNo}  category={'health'} country={'us'}/>}/>
          <Route exact path ="/science" element={<News key='science' pageSize={pageNo}  category={'science'} country={'us'}/>}/>
          <Route exact path ="/sport" element={<News key='sport' pageSize={pageNo}  category={'sport'} country={'us'}/>}/>
          <Route exact path ="/technology" element={<News key='technology' pageSize={pageNo}  category={'technology'} country={'us'}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    ) 
}

export default App
