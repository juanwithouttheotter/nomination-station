// functional component
import React from 'react';
import Button from '../Button';

function MovieCard(props){
    return (
        <div id={props.imbdID}>
            <img src={props.poster} alt={props.title + ' poster'}></img>
            <div>{props.Title}</div>
            <div>{props.year}</div>
            <Button btn='add' />
        </div>
    )
}

export default MovieCard;