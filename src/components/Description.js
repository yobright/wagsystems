import Card from "./Card";

function Description () {
    return (
        <div className="description">
            <div className="wrapper">
                <h1>Une proposition de valeur unique</h1>
                <p>WAGSystems développe et édite ses propres logiciels afin d'assurer la maintenance et la mise à jour constante de leurs composants. <br /> Notre catalogue constitue un important écosystème applicatif et une importante logistique informatique <br />pour la majorité des entreorises en quêtes de logiciels homogènes et interopérables adaptés à leurs activités.</p>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
        </div>
    )
} 

export default Description 