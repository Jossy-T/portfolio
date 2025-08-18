
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Aboutme from './pages/Aboutme';
import Footer from './components/Footer';


function App() {
  return (
      <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="Aboutme" element={<Aboutme/>}/>
              <Route path="Footer" element={<Footer/>}/>
               
  {/*//           <Route path=":id" element={<UsersPro/>}/>
  //           <Route path="Cata" >
  //             <Route index element={<Cata/>}/>
  //             <Route path="Electronics" element={<Electronics/>}/>
  //           </Route>
  //           <Route path="*" element={<NotFound/>}/> */}
          
            </Route>
          </Routes>
        </BrowserRouter>
      
      </div>
    
  );
}

export default App;


