import '../styles/Banner.css'


function Banner() {
    return (
        <div id='banner'>
            <div id='banner-title'>
          <h1>
                    Elliot GUIBERTEAU
                    </h1>
            </div>
            <div id='banner-menu'>
                <ul>
                    <li>
                        <a href="#welcome">
                    Acceuil
                    </a>
                    </li>
                <li>
                <a href="#profile">
                    A propos
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                    Mes réalisations
                    </a>
                </li>
                <li>
                    Contact
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner