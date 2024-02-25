import React, { useState, useEffect } from 'react';
import Block from './screen/Block';
import './styles.css';

const Screen = props => {
    const { screen, score } = props;
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused) {
                setTime(prevTime => prevTime + 1);
            }
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonte o el tiempo cambie
        return () => clearInterval(timer);
    }, [isPaused]); // Ahora se ejecuta cuando isPaused cambia

    // Función para pausar o reanudar el juego
    const togglePause = () => {
        setIsPaused(prevPaused => !prevPaused);
    };

    // Formatear el tiempo en formato de minutos y segundos
    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <table>
            <thead>
                <tr >
                    <td colSpan={screen[0].length}>{'Score: ' + score}</td>
                    <td colSpan={screen[0].length}>{'Time: ' + formatTime()}</td>
                    <td colSpan={screen[0].length}>
                        <button onClick={togglePause}>{isPaused ? 'Resume' : 'Pause'}</button>
                    </td>
                </tr>
            </thead>
            <tbody>
                {screen.map((row, index) => {
                    
                    if (index > 3) {
                        return (
                            <tr key={index} className='pablo'>
                                {row.map((val, index) => {
                                    return <Block color={val} key={index} />;

                                })}
                            </tr>
                        );
                    }
                })}
            </tbody>
        </table>
    );
};

export default Screen;
