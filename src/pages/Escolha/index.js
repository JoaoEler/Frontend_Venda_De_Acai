import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Content, Text, Title, ButtonContainer, TitleBox, Selection, ButtonNext } from './styles';

import Button from '../../components/Button';

const Escolha = () => {
  const [sabor, setSabor] = useState('');
  const [tamanho, setTamanho] = useState('');

  const history = useHistory();

  const handleSabor = useCallback((sabor) => {
    setSabor(sabor);
  }, []);

  const handleTamanho = useCallback((tamanho) => {
    setTamanho(tamanho);
  }, []);

  return(
    <>
      <Container>
        <Content>
          <TitleBox>
            <Title>Escolha seu açaí</Title>
          </TitleBox>

          <Selection>
            <Text>SABOR:</Text>
              <ButtonContainer>
                <Button type='button' onClick={() => handleSabor('Morango')} >Morango</Button>
                <Button type='button' onClick={() => handleSabor('Banana')}>Banana</Button>
                <Button type='button' onClick={() => handleSabor('Kiwi')}>Kiwi</Button>
              </ButtonContainer>
          </Selection>

          <Selection>
            <Text>TAMANHO:</Text>
            <ButtonContainer>
              <Button type='button' onClick={() => handleTamanho('Pequeno')}>Pequeno (300ml)</Button>
              <Button type='button' onClick={() => handleSabor('Medio')}>Médio (500ml)</Button>
              <Button type='button' onClick={() => handleSabor('Grande')}>Grande (700ml)</Button>
            </ButtonContainer>
          </Selection>

          <ButtonNext type='button' onClick={() => handleSabor('Grande')}>Avançar</ButtonNext>
        </Content>
      </Container>
    </>
  );
};

export default Escolha;
