import React, {useEffect, useState} from 'react';
import PrimeNum from "./PrimeNum";
import {Button} from "react-bootstrap";
import "../styles/style.css"

const Counter = () => {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number+1);
    }

    const onDecrease = () =>{
        setNumber(number-1);
    }

    useEffect(() => {
        document.title = `number 값이 ${number}로 변화함`;
    }, [number]);

    return (
        <div className="container">
            <h2>Counter 예제</h2>
            <h3 className="number">{number}</h3>
            <Button onClick={onIncrease} variant="outline-danger" className="counterBtn"> + </Button>
            <Button onClick={onDecrease} variant="outline-primary" className="counterBtn"> - </Button>
            <PrimeNum number={number}/>
        </div>
    );
};

export default Counter;
