import React, { useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import './styles.css'
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='hidden sm:block scrollButton'>
      <button>
        <MdKeyboardDoubleArrowUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
      </button>
    </div>
    
  );
}
  
export default ScrollButton;