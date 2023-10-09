import React from 'react';

const PrimeNum = (number) => {

    const isPrime = (number) => {
        for(let i = 2; i < number; i++){
            if(number % i === 0) return false;
        }
        return true;
    }

    return (
        <div>
            {isPrime(number.number) ? <h3>소수입니다.</h3> : <h3>소수가 아닙니다.</h3>}
        </div>
    );
};

export default PrimeNum;
