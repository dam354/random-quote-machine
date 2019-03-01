import React from 'react';

const Button = ({buttonsDisplayName, clickHandler}) => {
  return ( 
    <button onClick={clickHandler}>{buttonsDisplayName}</button>
   );
}
 
export default Button;