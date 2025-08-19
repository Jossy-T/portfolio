
import logo from "../images/photo_2024-06-13_23-23-07.jpg"
import {motion} from "framer-motion"
export default function Home(){
    
return<div>

           <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}   // animates only the first time
     >
    <div className="home">


        <div className="home-image">
            <img src={logo} alt="me"/>
        </div>

        <div className="home-text">
            <h5 style={{margin:"-10px",color:"#333333ff"}}>Hi I'm </h5>
            <h1 style={{fontSize:"35px"}}>Yosef Tanu </h1>
            <h1 className="frontend" style={{borderRadius:"10px",padding:"3px 10px",}}>Front-End website Developer</h1>
            
            <a style={{textDecoration:"none", backgroundColor:"#030836ff",color:"white",padding:"10px",borderRadius:"10px"}} href="Aboutme">About me</a>

            
        </div>
     
        
    </div>
     </motion.div>


</div>
}
