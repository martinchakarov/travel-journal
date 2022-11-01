import img from "../img/cologne-cathedral.jpg";

export default function Card() {
    return (
        <div className="card">
            <div className="img-wrapper">
                <img className="photo" src={img} alt="Cologne Cathedral" />
            </div>
            <div className="about">
                <div className="country">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p>GERMANY</p>
                    <a href="http://google.com/maps">View on Google Maps</a>
                </div>
                <h2 className="location">Cologne Cathedral</h2>
                <h5 className="period">12 Jan, 2021 - 24 Jan, 2021</h5>
                <p className="description">Cologne Cathedral is a Catholic cathedral in Cologne, North Rhine-Westphalia. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne.</p>
            </div>
        </div>
    )
}