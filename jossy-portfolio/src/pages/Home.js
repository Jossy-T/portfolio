
import logo from "../images/photo_2024-06-13_23-23-07.jpg"

export default function Home(){
    
return<div>

    <div className="home">

        <div className="home-image">
            <img src={logo} alt="me"/>
        </div>

        <div className="home-text">
            <h5 style={{margin:"-10px",color:"#333333ff"}}>Hi I'm </h5>
            <h1 style={{fontSize:"35px"}}>Yosef Tanu<br/>  </h1>
            <h1 style={{borderRadius:"25px",padding:"3px 10px",boxShadow:"1px 2px",}}>Front-End website Developer</h1>
            
            <a style={{textDecoration:"none", backgroundColor:"#030836ff",color:"white",padding:"10px",borderRadius:"10px"}} href="Aboutme">About me</a>

            
        </div>
     
        
    </div>


</div>
}
