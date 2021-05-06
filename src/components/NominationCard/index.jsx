// functional component
import React from 'react';
import Button from '../Button';

function NominationCard(props) {
    return(
        <div id={props.imbdID}>
            <img src={props.poster} alt={props.title + ' poster'}></img>
            <div>{props.Title}</div>
            <div>{props.year}</div>
            <Button btn='remove'/>
        </div>
    )
}

export default NominationCard;