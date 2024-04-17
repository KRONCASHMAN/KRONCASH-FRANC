import React, { useRef, useEffect } from "react";

const createParticle = (x, y) => {
  return {
    x: x,
    y: y,
    radius: Math.random() * 3 + 1,
    opacity: 0,
    velocity: {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    },

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fill();
      ctx.closePath();
    },

    update(ctx, canvasWidth, canvasHeight) {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x > canvasWidth || this.x < 0) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.y > canvasHeight || this.y < 0) {
        this.velocity.y = -this.velocity.y;
      }

      this.opacity += (1 - this.opacity) * 0.05;
      this.draw(ctx);
    },
  };
};

const MagnicficCanvas = () => {
  const canvasRef = useRef(null);

  // Utility function to get distance between two points
  const getDistance = (x1, y1, x2, y2) => {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  };

  useEffect(() => {
    let particles = [];
    let animationFrameId;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to connect particles
    const connectParticles = (particles, ctx) => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = getDistance(
            particles[a].x,
            particles[a].y,
            particles[b].x,
            particles[b].y
          );

          if (distance < 120) {
            opacityValue = 1 - distance / 120;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(createParticle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(ctx, canvas.width, canvas.height);
      });

      connectParticles(particles, ctx);

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MagnicficCanvas;
