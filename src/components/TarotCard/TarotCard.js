
import React from "react";
import "./TarotCard.css";

const TarotCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCard(props.name)} 
                className={props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
);

export default TarotCard;