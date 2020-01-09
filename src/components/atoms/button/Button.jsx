import React, { useState, useEffect } from 'react';

import './button.scss';

const Button = ({ data, children, onClick }) => {
  const [text, setText] = useState(children)

  useEffect(() => {
    if (data) {
      setText(data);
    }
  }, []);

  return <button onClick={onClick}>{text}</button>;
};

export default Button;
