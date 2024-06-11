import '../styles/Footer.css'



function Footer() {
    return (
     <footer>
         <div class="footer-container">
            <div class="footer-section">
                <p>Contactez-moi :</p>
                <p>Email : elliot.guiberteau@gmail.com</p>
                <p>Téléphone : +33 7 68 31 59 33</p>
                <p>Adresse : 67000 Strasbourg, France</p>
            </div>
            <div class="footer-section">
                <p>Suivez-moi :</p>
                <ul>
                    <li><a href="https://linkedin.com/in/elliot-guiberteau-a016b820b">LinkedIn</a></li>
                    <li><a href="https://github.com/Elliot067">GitHub</a></li>

                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 GUIBERTEAU Elliot. Tous droits réservés.</p>
        </div>
     </footer>
    )
}

export default Footer