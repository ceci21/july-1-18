import React from 'react';

const DisplayWindow = (props) => {
  let fruit = 'nothing';
  if (props.fruit) {
    fruit = props.fruit;
  }

  return (
    <div className="display-window">
      The pantry has { fruit }.
    </div>
  );
}

export default DisplayWindow;