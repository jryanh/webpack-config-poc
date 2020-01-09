import React, { useState, useEffect } from 'react';

import './button.scss';

const Button = ({ data, children, onclick }) => {
  const [text, setText] = useState(children)

  useEffect(() => {
    if (data) {
      setText(data);
    }
  }, []);

  return <button onClick={onclick}>{text}</button>;
};

export default Button;
