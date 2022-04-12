import React from 'react';
import evolux from '../../icons/evolux.png';
import style from './Loading.module.scss';

function Loading() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center loading'>
      <svg
        style={{
          margin: 'auto',
          display: 'block',
          shapeRendering: 'auto',
          justifyContent: 'center',
        }}
        width='100px'
        height='100px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
        role='progressbar'
      >
        <circle
          cx='50'
          cy='50'
          r='32'
          strokeWidth='8'
          stroke='#ffbf2c'
          strokeDasharray='50.26548245743669 50.26548245743669'
          fill='none'
          strokeLinecap='round'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='1s'
            keyTimes='0;1'
            values='0 50 50;360 50 50'
          ></animateTransform>
        </circle>
      </svg>
      <img src={evolux} alt='evolux logo' className={style.evolux} />
    </div>
  );
}

export default Loading;
