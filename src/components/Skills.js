import '../styles/Skills.css'
import CV from '../assets/CV_ElliotGuiberteau.jpg'
import PDF from '../assets/CV_ElliotGuiberteau_.pdf'
import LINUX from '../assets/Linux.png'
import WIN from '../assets/Windows.png'
import VIRTUALBOX from '../assets/Virtualbox.png'
import VMWARE from '../assets/Vmware.png'
import PACKET_TRACER from '../assets/Packet_tracer.png'
import PHPSTORM from '../assets/Phpstorm.png'
import HTML from '../assets/html.png'
import CSS from '../assets/CSS.png'
import PHP from '../assets/php.png'
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
            <div id='OS' ><div >Systèmes d'exploitation utilisé</div>
                <img src={LINUX} />
                <img src={WIN} />
                </div>

                <div id='Outils'>
                <div> Outils/Logiciels utilisés </div>
                <img src={VIRTUALBOX}/>
                <img src={VMWARE}/>
                <img src={PACKET_TRACER}/>
                <img src={PHPSTORM}/>
               
            </div>

            <div id='Langages'>
                <div>Langages Pratiqués</div>
                <img src={HTML}/>
                <img src={CSS}/>
                <img src={PHP}/>
                <img src={JS}/>

            </div>


            </div>

            
        </div>
    </div>

    )
}   

export default Skills