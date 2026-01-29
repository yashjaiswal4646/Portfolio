import { useEffect, useRef } from 'react';

const TrailCursor = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isRunningRef = useRef(true);
  
  // Configuration
  const config = {
    debug: false,
    friction: 0.5,
    trails: 6,  // Slightly fewer trails
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  // Utility classes
  class Oscillator {
    constructor(options = {}) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.001;
      this.amplitude = options.amplitude || 1;
      this.value = 0;
    }

    update() {
      this.phase += this.frequency;
      this.value = this.offset + Math.sin(this.phase) * this.amplitude;
      return this.value;
    }
  }

  class Node {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
    }
  }

  class Line {
    constructor(options = {}) {
      this.spring = options.spring || 0.4;
      this.friction = config.friction + (Math.random() * 0.01 - 0.002);
      this.nodes = [];
      
      for (let i = 0; i < config.size; i++) {
        const node = new Node();
        node.x = mousePos.current.x;
        node.y = mousePos.current.y;
        this.nodes.push(node);
      }
    }

    update() {
      let spring = this.spring;
      let node = this.nodes[0];
      
      // Update first node based on mouse position
      node.vx += (mousePos.current.x - node.x) * spring;
      node.vy += (mousePos.current.y - node.y) * spring;
      
      // Update all nodes
      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i];
        
        if (i > 0) {
          const prevNode = this.nodes[i - 1];
          node.vx += (prevNode.x - node.x) * spring;
          node.vy += (prevNode.y - node.y) * spring;
          node.vx += prevNode.vx * config.dampening;
          node.vy += prevNode.vy * config.dampening;
        }
        
        // Apply friction
        node.vx *= this.friction;
        node.vy *= this.friction;
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Reduce spring effect along the line
        spring *= config.tension;
      }
    }

    draw(ctx) {
      if (this.nodes.length < 2) return;
      
      const firstNode = this.nodes[0];
      let currentX = firstNode.x;
      let currentY = firstNode.y;
      
      ctx.beginPath();
      ctx.moveTo(currentX, currentY);
      
      // Draw quadratic curves through nodes
      for (let i = 1; i < this.nodes.length - 2; i++) {
        const node = this.nodes[i];
        const nextNode = this.nodes[i + 1];
        
        const midX = 0.5 * (node.x + nextNode.x);
        const midY = 0.5 * (node.y + nextNode.y);
        
        ctx.quadraticCurveTo(node.x, node.y, midX, midY);
        
        currentX = midX;
        currentY = midY;
      }
      
      // Draw last segment
      const secondLast = this.nodes[this.nodes.length - 2];
      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
      
      ctx.stroke();
    }
  }

  // State
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const linesRef = useRef([]);
  const oscillatorRef = useRef(null);
  const hueRef = useRef(0);

  // Initialize lines
  const initLines = () => {
    linesRef.current = [];
    for (let i = 0; i < config.trails; i++) {
      linesRef.current.push(new Line({ 
        spring: 0.4 + (i / config.trails) * 0.025 
      }));
    }
  };

  // Handle mouse/touch movement
  const handlePointerMove = (e) => {
    if (e.touches) {
      mousePos.current.x = e.touches[0].clientX;
      mousePos.current.y = e.touches[0].clientY;
    } else {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      mousePos.current.x = e.touches[0].clientX;
      mousePos.current.y = e.touches[0].clientY;
    }
  };

  // Animation render loop
  const render = () => {
    if (!isRunningRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas completely - NO fade effect
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update oscillator for color cycling
    hueRef.current = oscillatorRef.current?.update() || 0;
    
    // Set drawing style - trails should be subtle
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `hsla(${Math.round(hueRef.current)}, 70%, 60%, 0.25)`; // Low opacity
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Update and draw all lines
    linesRef.current.forEach(line => {
      line.update();
      line.draw(ctx);
    });
    
    // Continue animation
    animationRef.current = requestAnimationFrame(render);
  };

  // Resize handler
  const resizeCanvas = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Reinitialize lines after resize
    initLines();
  };

  useEffect(() => {
    // Initialize
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Setup canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize oscillator for color animation
    oscillatorRef.current = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    
    // Initialize lines
    initLines();
    
    // Set initial mouse position to center
    mousePos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    
    // Add event listeners
    const handleMove = (e) => handlePointerMove(e);
    const handleTouch = (e) => handleTouchStart(e);
    
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('resize', resizeCanvas);
    
    // IMPORTANT: DO NOT hide the default cursor
    // Keep this line commented out or removed
    // document.body.style.cursor = 'none';
    
    // Start animation
    isRunningRef.current = true;
    render();
    
    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunningRef.current = false;
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else {
        isRunningRef.current = true;
        render();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Cleanup
    return () => {
      isRunningRef.current = false;
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // IMPORTANT: DO NOT restore cursor (it was never changed)
      // Keep this line commented out or removed
      // document.body.style.cursor = 'auto';
      
      // Clear the canvas one last time
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[50] pointer-events-none" // Lower z-index
      style={{
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default TrailCursor;