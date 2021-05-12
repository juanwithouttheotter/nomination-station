// functional component
import React from 'react';
import Button from '../Button';
import './MovieCard.css';

function MovieCard(props){
    return (
        <div id={props.id + "-Card"}>
            <img src={props.poster} alt={props.title + ' poster'}></img>
            <div>{props.title}</div>
            <div>{props.year}</div>
            <Button id={props.id}btn={props.btnType} name={props.btnName} btnAction={props.btnAction} dataObj={props.dataObj}/>
        </div>
    ) 
}

export default MovieCard;