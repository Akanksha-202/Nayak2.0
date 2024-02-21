import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top on button click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    return (
        <div className="fixed bottom-4 right-4 z-10">
            {isVisible && (
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
