// functional component
import React from 'react';
import Button from '../Button';
import ContainerItem from '../ContainerItem';
import './MovieCard.css';

function MovieCard({ id, btnName, poster, title, year, btnType, btnAction, dataObj }) {
        return (
                <ContainerItem id={`${id}-Card`} flex="default" cls={btnName} alignSelf="center">
                        <img src={poster} alt={`${title} poster`} />
                        <div>{title}</div>
                        <div>{year}</div>
                        <Button id={id} btn={btnType} name={btnName} btnAction={btnAction} dataObj={dataObj} />
                </ContainerItem>
        );
}

export default MovieCard;
