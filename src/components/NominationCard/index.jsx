// functional component
import React from 'react';
import Button from '../Button';

function NominationCard(props) {
    return(
        <div id={props.id}>
            <img src={props.poster} alt={props.title + ' poster'}></img>
            <div>{props.title}</div>
            <div>{props.year}</div>
            <Button btn='remove'/>
        </div>
    )
}

export default NominationCard;