import React, { useEffect, useRef } from 'react';
import './Title.scss';
import canv from './canv';

const Title = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    canv();
  }, []);
  return (
    <div className='title'>
      <canvas ref={canvasRef} id='canv' width='32' height='32'></canvas>
      <div className='title-container'>
        {/* <div className='white-box'></div> */}
        <h1 className='title-h1'>
          Dom <br />
          Pod Dębami
        </h1>
        <h1 className='overlay' aria-hidden='true'>
          Dom <br />
          Pod Dębami
        </h1>
      </div>
    </div>
  );
};

export default Title;
