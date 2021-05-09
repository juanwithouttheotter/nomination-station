// functional component
import React from 'react';
import Button from '../Button';
import './MovieCard.css';

function MovieCard(props){
    return (
        <div id={props.imbdID}>
            <img src={props.poster} alt={props.title + ' poster'}></img>
            <div>{props.title}</div>
            <div>{props.year}</div>
            <Button btn='add' name="Nominate" btnAction={props.addNomie} dataObj={props.dataObj} />
        </div>
    ) 
}

export default MovieCard;