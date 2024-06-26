import React, { useRef } from 'react'

const MobileKeyboardTrigger = () => {
    const hiddenInputRef = useRef(null);
  
    const handleTriggerClick = () => {
     
      if (hiddenInputRef.current) {
        hiddenInputRef.current.focus();
      }
    };
  
    return (
      <div className='sm:hidden visible '>
        <button onClick={handleTriggerClick}>Click to Type</button>
        <input
          ref={hiddenInputRef}
          type="text"
          style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
        />
      </div>
    );
  };
  
  export default MobileKeyboardTrigger;