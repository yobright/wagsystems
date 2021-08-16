import ButtonArrow from '../assets/button-arrow.svg'


function Hero () {
    return (
        <div className="hero">
            <div className="wrapper">
                <h1>WAGSYSTEMS</h1>
                <h2>Editeur et intégrateur <br /> de Progiciels de Gestion <br /> intégrés</h2>
                <p>WAGSystems est un éditeur de logiciels <br /> de gestion et un intégrateur de réseaux <br /> privés professionnels (Intranet+Extranet)</p>
                <button type="button">
                    Commander maintenant
                    <img src={ButtonArrow} alt="button-arrow" />
                </button>
            </div>
        </div>
    )
}

export default Hero