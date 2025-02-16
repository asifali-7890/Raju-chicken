import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;