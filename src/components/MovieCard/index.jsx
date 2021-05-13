// functional component
import React from 'react';
import Button from '../Button';
import ContainerItem from '../ContainerItem';
import './MovieCard.css';

function MovieCard(props){
    return (
        <ContainerItem id={props.id + "-Card"} flex={'default'}>
            <img src={props.poster} alt={props.title + ' poster'}></img>
            <div>{props.title}</div>
            <div>{props.year}</div>
            <Button id={props.id}btn={props.btnType} name={props.btnName} btnAction={props.btnAction} dataObj={props.dataObj}/>
        </ContainerItem>
    ) 
}

export default MovieCard;