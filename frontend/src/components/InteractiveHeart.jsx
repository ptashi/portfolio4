import React, { useRef, useEffect, useState } from 'react'
import Canvas from "./Canvas"

export default function InteractiveHeart({ role }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([])
    const lastMoveRef = useRef(Date.now())

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        lastMoveRef.current = Date.now() // last moust movement timestamp, re-renders when it changes

        // converts window coordss to elemtn coords by subtracting elements top-left corner ??
        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        })

        // adding new point to trail
        setTrail((prevTrail) => {
            const maxHeart = 25
            const newTrail= [
                ...prevTrail,
                {x: event.clientX - rect.left, y: event.clientY - rect.top, bornAt: Date.now()}
            ]

            if (newTrail.length > maxHeart) {
                newTrail.shift() // removes first element of array so the array doesn't grow endlessly
            }
            return newTrail;
        })

    }

    const drawHeart = (ctx, x, y, size, color) => {

        ctx.save(); // save current canvas settings (color, position, etc.)
        ctx.translate(x,y) // move the canvas origin to (x, y)
        ctx.fillStyle = color;

        ctx.beginPath()
        ctx.moveTo(0, size * 0.3)

        // right lobe from bottom
        ctx.bezierCurveTo( // cp1x, cp1y, cp2x, cp2y, endX, endY
            0,
            0,
            size,
            -size,
            0,
            -size * .5
        )
        // from left lobe from top
        ctx.bezierCurveTo(
            -size,
            -size,
            0,
            0,
            0,
            size * 0.3
        )

        ctx.closePath()
        ctx.fill()
        ctx.restore(); // restore settings save at top, which undoes the translate/fillstyle to start fresh
    }
    const draw = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // wipe the canvas so old hearts dont stay on
        

        const DURATION = 300;
        // drawing a new one after DURATION amount of time
        trail.forEach((point) => {
            const age = Date.now() - point.bornAt;
            if (age < DURATION) {
                drawHeart(ctx, point.x, point.y, 20, 'pink');
            }
        })

    }   

    return (
        <div className="relative min-h-screen min-w-screen bg-black">
            <Canvas
                draw={draw}
                onMouseMove={handleMouseMove}
                width={window.innerWidth}
                height={window.innerHeight}
                className="absolute inset-0 block"
            />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
                <div className="font-montserrat font-light text-white text-3xl">
                    Pema Tashi
                </div>
                <div className="font-montserrat text-md text-white/60 mt-1">
                    {role}
                </div>
            </div>
        </div>
    );
}
