"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const W = 500;
const H = 500;
const CX = 250;
const CY = 250;

interface OrbNode {
    label: string;
    orbitR: number;
    angle: number;
    speed: number;
    color: string;
}

const P = Math.PI;
const NODE_DEFS: OrbNode[] = [
    // Inner ring — 3 nodes
    { label: "React JS",    orbitR: 85,  angle: 0,                   speed: 0.014, color: "#61DAFB" },
    { label: "Node JS",     orbitR: 85,  angle: (P * 2) / 3,         speed: 0.014, color: "#68A063" },
    { label: "Next JS",     orbitR: 85,  angle: (P * 4) / 3,         speed: 0.014, color: "#E2E8F0" },
    // Middle ring — 6 nodes
    { label: "TypeScript",  orbitR: 150, angle: P / 12,              speed: 0.009, color: "#3178C6" },
    { label: "C#",          orbitR: 150, angle: P / 12 + P / 3,      speed: 0.009, color: "#9B59D0" },
    { label: ".NET Core",   orbitR: 150, angle: P / 12 + (P * 2)/3,  speed: 0.009, color: "#7C3AED" },
    { label: ".NET MVC",    orbitR: 150, angle: P / 12 + P,           speed: 0.009, color: "#A855F7" },
    { label: ".NET APIs",   orbitR: 150, angle: P / 12 + (P * 4)/3,  speed: 0.009, color: "#8B5CF6" },
    { label: "MongoDB",     orbitR: 150, angle: P / 12 + (P * 5)/3,  speed: 0.009, color: "#00ED64" },
    // Outer ring — 7 nodes
    { label: "JavaScript",  orbitR: 212, angle: 0,                   speed: 0.005, color: "#F7DF1E" },
    { label: "Python",      orbitR: 212, angle: (P * 2) / 7,         speed: 0.005, color: "#FFD43B" },
    { label: "SQL Server",  orbitR: 212, angle: (P * 4) / 7,         speed: 0.005, color: "#CC2927" },
    { label: "Express JS",  orbitR: 212, angle: (P * 6) / 7,         speed: 0.005, color: "#94A3B8" },
    { label: "Sanity",      orbitR: 212, angle: (P * 8) / 7,         speed: 0.005, color: "#F03E2F" },
    { label: "PostgreSQL",  orbitR: 212, angle: (P * 10) / 7,        speed: 0.005, color: "#336791" },
    { label: "Clerk",       orbitR: 212, angle: (P * 12) / 7,        speed: 0.005, color: "#6C47FF" },
];

interface Particle {
    x: number; y: number; vx: number; vy: number;
    alpha: number; r: number; color: string;
}

function drawPill(
    ctx: CanvasRenderingContext2D,
    cx: number, cy: number,
    label: string,
    color: string
) {
    const padH = 8;
    const padV = 6;
    const dotR = 3;
    const gap = 5;
    ctx.font = "bold 10px Inter, system-ui, sans-serif";
    const tw = ctx.measureText(label).width;
    const pillW = padH + dotR * 2 + gap + tw + padH;
    const pillH = dotR * 2 + padV * 2;
    const px = cx - pillW / 2;
    const py = cy - pillH / 2;
    const radius = pillH / 2;

    // Pill background
    ctx.beginPath();
    ctx.moveTo(px + radius, py);
    ctx.lineTo(px + pillW - radius, py);
    ctx.quadraticCurveTo(px + pillW, py, px + pillW, py + radius);
    ctx.lineTo(px + pillW, py + pillH - radius);
    ctx.quadraticCurveTo(px + pillW, py + pillH, px + pillW - radius, py + pillH);
    ctx.lineTo(px + radius, py + pillH);
    ctx.quadraticCurveTo(px, py + pillH, px, py + pillH - radius);
    ctx.lineTo(px, py + radius);
    ctx.quadraticCurveTo(px, py, px + radius, py);
    ctx.closePath();

    ctx.fillStyle = "rgba(11,17,32,0.85)";
    ctx.fill();
    ctx.strokeStyle = color + "99";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Color dot
    const dotX = px + padH + dotR;
    ctx.beginPath();
    ctx.arc(dotX, cy, dotR, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Label
    ctx.fillStyle = "#e2e8f0";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(label, dotX + dotR + gap, cy);
}

export default function HeroOrbit() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const anglesRef = useRef<number[]>(NODE_DEFS.map(n => n.angle));
    const particlesRef = useRef<Particle[]>([]);
    const stateRef = useRef({ speedMult: 1, pulseT: 0 });

    const render = useCallback((ctx: CanvasRenderingContext2D) => {
        const s = stateRef.current;
        ctx.clearRect(0, 0, W, H);



        // Central core
        const pulse = Math.sin(s.pulseT) * 0.5 + 0.5;
        const glowR = 36 + pulse * 18;
        const grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, glowR);
        grad.addColorStop(0, "rgba(96,165,250,0.95)");
        grad.addColorStop(0.5, "rgba(59,130,246,0.30)");
        grad.addColorStop(1, "rgba(59,130,246,0)");
        ctx.beginPath();
        ctx.arc(CX, CY, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(CX, CY, 15, 0, Math.PI * 2);
        ctx.fillStyle = "#3b82f6";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(CX, CY, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#bfdbfe";
        ctx.fill();

        ctx.font = "bold 11px monospace";
        ctx.fillStyle = "rgba(191,219,254,0.75)";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText("</>", CX, CY + 22);

        // Nodes
        NODE_DEFS.forEach((n, i) => {
            const angle = anglesRef.current[i];
            const nx = CX + n.orbitR * Math.cos(angle);
            const ny = CY + n.orbitR * Math.sin(angle);

            // Spoke line
            ctx.beginPath();
            ctx.moveTo(CX, CY);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = "rgba(59,130,246,0.09)";
            ctx.lineWidth = 0.8;
            ctx.setLineDash([]);
            ctx.stroke();

            // Glow behind pill
            const gGrad = ctx.createRadialGradient(nx, ny, 0, nx, ny, 20);
            gGrad.addColorStop(0, n.color + "44");
            gGrad.addColorStop(1, n.color + "00");
            ctx.beginPath();
            ctx.arc(nx, ny, 20, 0, Math.PI * 2);
            ctx.fillStyle = gGrad;
            ctx.fill();

            drawPill(ctx, nx, ny, n.label, n.color);
        });

        // Particles
        particlesRef.current = particlesRef.current.filter(p => p.alpha > 0.01);
        particlesRef.current.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.06;
            p.vx *= 0.97;
            p.alpha -= 0.022;
            const hex = Math.round(p.alpha * 255).toString(16).padStart(2, "0");
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${hex}`;
            ctx.fill();
        });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const tick = () => {
            const s = stateRef.current;
            NODE_DEFS.forEach((n, i) => {
                anglesRef.current[i] += n.speed * s.speedMult;
            });
            s.pulseT += 0.022;
            render(ctx);
        };

        gsap.ticker.add(tick);
        return () => gsap.ticker.remove(tick);
    }, [render]);

    const handleEnter = useCallback(() => {
        gsap.to(stateRef.current, { speedMult: 2.8, duration: 0.6, ease: "power2.out" });
    }, []);

    const handleLeave = useCallback(() => {
        gsap.to(stateRef.current, { speedMult: 1, duration: 1.2, ease: "power2.out" });
    }, []);

    const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left) * (W / rect.width);
        const my = (e.clientY - rect.top) * (H / rect.height);
        const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#7dd3fc", "#ffffff"];
        for (let i = 0; i < 28; i++) {
            const a = Math.random() * Math.PI * 2;
            const sp = 1.5 + Math.random() * 5;
            particlesRef.current.push({
                x: mx, y: my,
                vx: Math.cos(a) * sp,
                vy: Math.sin(a) * sp - 1.5,
                alpha: 1,
                r: 2 + Math.random() * 3,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }
        gsap.to(stateRef.current, {
            speedMult: 5,
            duration: 0.2,
            ease: "power3.out",
            onComplete: () => {
                gsap.to(stateRef.current, { speedMult: 1, duration: 1.5, ease: "power2.out" });
            },
        });
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="w-full h-full"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick}
        />
    );
}
