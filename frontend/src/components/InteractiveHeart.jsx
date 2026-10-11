import { useRef, useState } from 'react'
import Canvas from "./Canvas"
import heart from "/assets/images/neonbubbleheart.png"


const heartImg = new Image();
heartImg.src = heart;

export default function InteractiveHeart({ role }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([])
    const lastMoveRef = useRef(Date.now())

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        lastMoveRef.current = Date.now()

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setMousePosition({ x, y })

        setTrail((prevTrail) => {
            const maxHeart = 25
            const newTrail = [
                ...prevTrail,
                { x, y, bornAt: Date.now() }
            ]

            if (newTrail.length > maxHeart) {
                newTrail.shift() 
            }
            return newTrail;
        })
    }

    const drawHeartImage = (ctx, x, y, size) => {
        if (!heartImg.complete) return; // Don't draw if image hasn't loaded yet

        ctx.save(); 
        ctx.translate(x, y) 

        // Draw the JPEG centered on the cursor position
        ctx.drawImage(
            heartImg, 
            -size / 2, // Centering offset X
            -size / 2, // Centering offset Y
            size,      // Width
            size       // Height
        );

        ctx.restore(); 
    }

    const draw = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        
        const DURATION = 300;
        
        trail.forEach((point) => {
            const age = Date.now() - point.bornAt;
            if (age < DURATION) {
                drawHeartImage(ctx, point.x, point.y, 40); 
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
