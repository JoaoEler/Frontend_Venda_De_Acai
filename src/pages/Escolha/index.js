import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container,
  Content,} from './styles';

const Escolha = () => {
  const [sabor, setSabor] = useState('');
  const [tamanho, setTamanho] = useState('');

  const handleSabor = useCallback((sabor) => {
    setSabor(sabor);
  });

  const handleTamanho = useCallback((tamanho) => {
    setTamanho(tamanho);
  });

  return(
    <>
      <Container>
        <Content></Content>
      </Container>
    </>
  );
};
