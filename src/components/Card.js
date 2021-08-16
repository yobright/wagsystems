import CardPic from '../assets/card-pic.svg' 

function Card () {
    return (
        <div className="card">
            <div className="container">
                <img src={CardPic} alt="card-pic" />
                <h2>LOREM IPSUM</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>  
    )
}

export default Card 