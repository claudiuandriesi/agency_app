import './Card.scss';

function Card({icon, title, description, onClick}) {

    return (
        <div className="card-container no-select" onClick={onClick}>
            <div className="card">
                {icon ? <div className="icon">{icon}</div> : <div/>}
                <p className="title">{title}</p>
                <p className="text">{description}</p>
            </div>
        </div>
    );
}


export default Card;
