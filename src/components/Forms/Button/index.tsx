import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacity{
  title: string;
  onPress: () => void;
}

export function Button({
  title,
  onPress,
  ...rest
}: Props){
  return (
    <Container onPress={onPress} {...rest}>
      <Title>
        { title }
      </Title>
    </Container>
  );
}