import { useEffect } from 'react';

// open all external links in another tab
export default function CustomScroll() {
  useEffect(() => {
    // Defining a function to handle click events on the navigation menu links
    const handleLinkClick = (event : any) => {
      event.preventDefault();
      const target = event.target.getAttribute('data-href'); // Get the custom attribute
      const element = document.querySelector(target);
      if (element) {
        const topOffset = element.offsetTop;
        window.scrollTo({
          top: topOffset - 200,
          behavior: 'smooth',
        });
      }
    };

    // Select buttons with the custom attribute
    const links = document.querySelectorAll('[data-href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);
}
