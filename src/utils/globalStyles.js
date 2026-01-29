export const globalStyles = `
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* NEW: Slide in from left up corner (scroll down - even cards) */
  @keyframes slideInFromLeftUp {
    from {
      opacity: 0;
      transform: translate(-50px, -50px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  /* NEW: Slide in from left down corner (scroll up - even cards) */
  @keyframes slideInFromLeftDown {
    from {
      opacity: 0;
      transform: translate(-50px, 50px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  /* NEW: Slide in from right up corner (scroll down - odd cards) */
  @keyframes slideInFromRightUp {
    from {
      opacity: 0;
      transform: translate(50px, -50px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  /* NEW: Slide in from right down corner (scroll up - odd cards) */
  @keyframes slideInFromRightDown {
    from {
      opacity: 0;
      transform: translate(50px, 50px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes slideOutToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50px);
    }
  }

  @keyframes slideOutToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(50px);
    }
  }

  @keyframes scrollLeftToRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scrollRightToLeft {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Add smooth fade-in animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Add hover scale animation */
  @keyframes hoverScale {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .animate-slideIn {
    animation: slideIn 0.3s ease-out forwards;
  }

  .animate-slideOut {
    animation: slideOut 0.3s ease-in forwards;
  }

  .animate-slideInFromLeft {
    animation: slideInFromLeft 0.5s ease-out forwards;
  }

  .animate-slideInFromRight {
    animation: slideInFromRight 0.5s ease-out forwards;
  }

  /* NEW: Animation classes for corner entries */
  .animate-slideInFromLeftUp {
    animation: slideInFromLeftUp 0.5s ease-out forwards;
  }

  .animate-slideInFromLeftDown {
    animation: slideInFromLeftDown 0.5s ease-out forwards;
  }

  .animate-slideInFromRightUp {
    animation: slideInFromRightUp 0.5s ease-out forwards;
  }

  .animate-slideInFromRightDown {
    animation: slideInFromRightDown 0.5s ease-out forwards;
  }

  .animate-slideOutToLeft {
    animation: slideOutToLeft 0.3s ease-in forwards;
  }

  .animate-slideOutToRight {
    animation: slideOutToRight 0.3s ease-in forwards;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-hoverScale {
    animation: hoverScale 2s ease-in-out infinite;
  }

  .delay-300 {
    animation-delay: 300ms;
  }

  .delay-500 {
    animation-delay: 500ms;
  }

  .delay-700 {
    animation-delay: 700ms;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-none {
    -webkit-line-clamp: unset;
  }

  /* Add perspective for 3D effects */
  .perspective-1000 {
    perspective: 1000px;
  }

  /* Smooth transitions */
  .transition-all-500 {
    transition: all 0.5s ease;
  }

  .transition-transform-500 {
    transition: transform 0.5s ease;
  }

 /* Ensure canvas doesn't block mouse events */
canvas {
  pointer-events: none !important;
}

/* Ensure default cursor is always visible */
body, body * {
  cursor: auto !important;
}
`;