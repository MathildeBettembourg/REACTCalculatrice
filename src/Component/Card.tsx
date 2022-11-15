import React from "react";
import CardProps from "./Card.type";


const Card = ({ title, body, footer, buttonLabel, buttonAction }: CardProps) => {
    return (
        <>
            <div >
                <p>Card</p>
                <p className="card-title">{title}</p>
                <p className="card-body">{body}</p>
                {/* //le footer est optionnel... */}
                {/* si la premiere commande fonctionne on passe à la seconde qui est apres le && */}
                {footer &&
                <p className="card-footer">{footer}</p>}
                
                { buttonLabel &&
                <button onClick={buttonAction}>{buttonLabel}</button>}
            </div>
        </>
    )


}

export default Card;