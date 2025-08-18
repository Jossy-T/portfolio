import Card from "../components/Card";
import Footer from "../components/Footer";


export default function Aboutme(){
    return<div className="about">

        <div className="aboutparagraph">
            <p style={{textAlign:"center", lineHeight:"30px",fontFamily:"revert",fontSize:"18px",fontWeight:"400"}}>
                Hi, <span style={{fontSize:"20",fontWeight:"550"}}>I'm Yosef Tanu</span>, a passionate <span style={{fontSize:"20",fontWeight:"550"}}>front-end developer</span> who loves turning ideas into
               beautiful, responsive, and user-friendly websites.  {/*I specialize in HTML,CSS,JAVASCRIPT(Js) 
                and REACT.*/} I enjoy crafting clean, efficient code and bringing designes to life to life with  
                interactive features that enhance the user experience
            </p>
        </div>

        <div className="card">


            <div className="aboutcard">
            
                <h3>profession</h3>
                <div className="about-proffesion">

                <Card name={ 
                <div className="pros">

                    <div className="htmlcss">
                        <span className="pro1">HTML</span>
                        <span className="pro2">CSS</span>
                    </div>

                    <div className="javareact">
                        <span className="pro">JAVASCRIPT(js)</span> 
                        <span className="pro">REACT</span>
                    </div>
                </div> 
                }/>
                </div>
                    
            </div >

                    
            <div className="aboutcard2">
            
                <h3>Bio</h3>
                <div className="about-proffesion">

                <Card name={ 
                <div className="pros">

                    <div className="htmlcss">
                        <h4>How did I got into coding/design?</h4>
                        <span className="pro3">
                            I started coding with a passion for problem solving
                            now I focus on creating user-friendly React apps.
                        </span>

                        <h4>simple Projects Highlight</h4>
                        <span className="pro4">
                            Portfolio Website: built with React & Bootstrap
                            Calculator App: using Redux
                        </span>
                    </div>

                    {/* <div className="javareact">
                        <span className="pro">JAVASCRIPT(js)</span> 
                        <span className="pro">REACT</span>
                    </div> */}
                </div> 
                }/>
                </div>
            </div>

        </div>


        <a className="aboutbutton"  href="Footer">Let's Work Together</a>

        <Footer/>        

    </div>
}



                

                



            
        