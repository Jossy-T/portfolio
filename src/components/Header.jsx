import {Link} from "react-router-dom"
function Header(){

    return <>
    <div className="header">
        <Link to="/">Home</Link>
        <Link to="/aboutme">About</Link>
        
    </div>

    </>
}
export default Header