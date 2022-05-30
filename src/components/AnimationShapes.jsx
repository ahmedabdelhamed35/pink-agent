import React from 'react';
import styled from 'styled-components';


const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #4e6bff;
    opacity: 0.7;
    position: absolute;
    top: -60;
    left: -60;
    z-index: -1;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to{
            transform: translate(80vw, 80vh);
        }
    }
`;


const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ff97af;
    position: absolute;
    top: 200;
    left: -100;
    z-index: -1;
    animation: circle 25s linear alternate infinite;

    @keyframes circle {
        to{
            transform: translate(60vw, 70vh);
        }
    }
`;


const Rect = styled.div`
    width: 50px;
    height: 100px;
    background-color: #669966;
    opacity: 0.5;
    position: absolute;
    top: 400;
    left: -50;
    z-index: -1;
    animation: rect 25s linear alternate infinite;

    @keyframes rect {
        to{
            transform: translate(80vw, -40vh);
        }
    }
`;

const AnimationShapes = () => {
    return (
        <>
         <Square />   
         <Circle />
         <Rect />
        </>
    )
}

export default AnimationShapes
