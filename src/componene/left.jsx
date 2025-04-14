import "./moduledCss/left.css"
import profilepic from "../assets/profilepic.png"
function Left() {
    return (
        <div className="Profilepic">
            <img src={profilepic}  alt="Profile Picture" id="pic"/>
            <div> <b>Abhay Mishra</b>
            <p>Mob: 9140250942 | Email: mishraabhayab@gmail.com</p></div>
           
        </div>
    )
}

export default Left
