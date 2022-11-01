import img from "../img/cologne-cathedral.jpg";

export default function Card() {
    return (
        <div className="card">
            <div className="img-wrapper">
                <img className="photo" src={img} alt="Cologne Cathedral" />
            </div>
        </div>
    )
}