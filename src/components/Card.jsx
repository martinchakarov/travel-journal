export default function Card(props) {
    return (
        <div className="card">
            <div className="img-wrapper">
                <img className="photo" src={ require(`../img/${props.imageFilename}`)} alt={props.title} />
            </div>
            <div className="about">
                <div className="country">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="location">{props.title}</h2>
                <h5 className="period">{props.startDate} - {props.endDate}</h5>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}