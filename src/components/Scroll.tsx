// src/components/Scroll.js

import React from 'react';

const Scroll = (props: {children: React.Component}) => {
  return( 
    <div style={{overflowY: 'scroll', height:'70vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;