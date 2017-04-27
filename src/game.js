import React from 'react';

export default class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    board
                </div>
                <div className="game-info">
                    <div>{'status'}</div>
                    <ul>{/*history*/}</ul>
                </div>
            </div>
        );
    }
}