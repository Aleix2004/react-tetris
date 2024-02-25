import React, { useRef, useEffect } from 'react';

const GameOver = props => {
    const buttonRef = useRef(null);

    useEffect(() => {
        // Establecer el foco en el botón al montar el componente
        buttonRef.current.focus();
    }, []);

    return (
        <div>
            <h1>Game Over!</h1>
            <h3>{'Highest score: ' + props.hiScore}</h3>
            <h3>{'Your score: ' + props.score}</h3>
            <button
                ref={buttonRef}
                onKeyDown={(e) => {
                    if (e.key === 'r') {
                        props.refreshGame(); // Llamar a la función refreshGame cuando se presiona r
                    }
                }}
                onClick={props.refreshGame}
            >
                Reset Game
            </button>
        </div>
    );
}

export default GameOver;

