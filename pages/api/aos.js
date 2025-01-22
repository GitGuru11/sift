// aos.js
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS

export const initAOS = () => {
  AOS.init({
    offset: 100, // Adjust the offset as needed
    duration: 300, // Animation duration in milliseconds
    once: true, // Whether to trigger the animation only once
  });
};
