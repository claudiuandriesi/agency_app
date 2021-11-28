import './InfoCard.scss';

function InfoCard({title, info, description, onClick}) {
    return (
        <div onClick={onClick} className="data-card no-select">
            <h3>{title}</h3>
            <h4>{info}</h4>
            <p>{description}</p>
        </div>
    )
}

export default InfoCard