import React, { useRef, useEffect } from 'react'

export default function Canvas({ draw, ...rest }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current; // graps real canvas DOM node from ref
        const context = canvas.getContext('2d'); // this is what you call drawing methods on
        let animationFrameId; // stores id - need this to cancel aniamtion loop when component unmounts

        // this function calls draw (our prop) and injects it into component,
        // then schedules itself to run again on the next animation frame
        const render = () => {
            draw(context);
            animationFrameId = requestAnimationFrame(render);
        }; 
        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [draw]) // automatically calls this when component unmounts -> stops the animation loop

    return <canvas ref={canvasRef} {...rest} />; // render the actual <canvas> element
}
