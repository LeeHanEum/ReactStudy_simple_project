import React from 'react';
import {connect} from 'react-redux';
import {Button} from "react-bootstrap";
import "../../styles/style.css"
import {decrement, increment} from "./CounterActions";

const CounterContainer = ({count, increment, decrement }) => {
    return (
        <div className="container">
            <h2>Redux Counter 예제</h2>
            <h3 className="number">{count}</h3>
            <Button onClick={increment} variant="outline-danger" className="counterBtn"> + </Button>
            <Button onClick={decrement} variant="outline-primary" className="counterBtn"> - </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({ count: state.counter.count });
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
