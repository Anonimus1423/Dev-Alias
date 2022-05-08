import React from 'react';
import PropTypes from 'prop-types';

export const TextDrop = ({string, delay, startDelay, start}) => 
{
  return (
    <>
      {
        string.split('')
          .map((char, index) => {
            return <span className={start ? 'start' : ''} key={index} style={{ animationDelay: (delay * index) + startDelay + 's', margin: '0' + ((char === ' ' ? 5 : 0) + 'px') }}>{char}</span>;
          })
      }
    </>
  );
};

TextDrop.propTypes = {
  string: PropTypes.string,
  delay: PropTypes.number,
  startDelay: PropTypes.number,
  start:PropTypes.bool
};