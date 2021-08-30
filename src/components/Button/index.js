import React, { useState, useCallback, useEffect } from 'react';

import { Container } from './styles';

const Button = ({ children, onClick, ...rest }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if(isSelected){
      setToggle(false);
    } else{
      setToggle(true);
    }
  }, [isSelected]);

  const handleIsSelected = useCallback((state) => {
    setIsSelected(state);
  }, []);

  return(
    <Container type="button" onClick={() => handleIsSelected(toggle)} isSelected={isSelected} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
