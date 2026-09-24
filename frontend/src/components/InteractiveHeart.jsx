import React, { useRef, useEffect, useState } from 'react'
import Canvas from "./Canvas"

export default function InteractiveHeart({ role }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([])
    const lastMoveRef = useRef(Date.now())

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        lastMoveRef.current = Date.now()
        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        })

        setTrail((prevTrail) => {
            const maxHeart = 25
            const newTrail= [
                ...prevTrail,
                {x: event.clientX - rect.left, y: event.clientY - rect.top, bornAt: Date.now()}
            ]

            if (newTrail.length > maxHeart) {
                newTrail.shift() // removes first elemnt of array
            }
            return newTrail;
        })

    }

    const drawHeart = (ctx, x, y, size, color) => {

        ctx.save(); // save the frame in time
        ctx.translate(x,y) 
        ctx.fillStyle = color;

        ctx.beginPath()
        ctx.moveTo(0, size * 0.3)

        // right lobe from bottom
        ctx.bezierCurveTo(
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
        ctx.restore();
    }
    const draw = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        

        const DURATION = 300;
        trail.forEach((point) => {
            const age = Date.now() - point.bornAt;
            if (age < DURATION) {
                ctx.save();
                drawHeart(ctx, point.x, point.y, 20, 'pink');
                ctx.restore();
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
