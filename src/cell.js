import React from 'react';

export default function Cell(props) {
    return(
        <buttom className="square" onClick={() => props.onClick()}>{props.value}</buttom>
    );
};