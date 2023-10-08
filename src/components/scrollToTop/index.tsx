import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [isVisible, setisVisible] = useState(false);

    const scrollToTop = () => window.scroll({
        top: 0, left: 0, behavior: 'smooth'
    })

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300)
                setisVisible(true)
            else
                setisVisible(false)
        };   
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);
    
    return (
        <button onClick={scrollToTop} className={"fixed cursor-pointer p-3 mb-4 mr-4 bg-orange-500 rounded-md z-30 bottom-0 right-0 " + (isVisible ? 'opacity-100' : 'opacity-0')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
            </svg>
        </button>

    )
}

export default ScrollToTop