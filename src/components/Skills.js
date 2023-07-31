import '../styles/Skills.css'
import CV from '../assets/CV_ElliotGuiberteau.jpg'
import PDF from '../assets/CV_ElliotGuiberteau_.pdf'
import HTML from '../assets/html.png'
import CSS from '../assets/CSS.png'
import JS from '../assets/JS.png'
import REACT from '../assets/react.png'

function Skills() {
    return (

    <div id="skills">
        <h1>Mes compétences</h1>
        <div id="contenair-skills">
            <div id="description">
                <img src={CV} />
                <div>
                    <a href={PDF} download="CV_Elliot_GUIBERTEAU.pdf">Télécharger mon CV</a>
                </div>

            </div>
            <div id="img-skills">
                <img src={HTML} />
                <img src={CSS} />
                <img src={JS} />
                <img src={REACT} />
                <br></br>
                <img src={CSS} />
                <img src={JS} />
                <br></br>
                <img src={JS} />
                <br></br>
                <img src={JS} />
            </div>
        </div>
    </div>

    )
}   

export default Skills