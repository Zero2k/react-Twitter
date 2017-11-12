import React, { Component } from 'react';
import styled from 'styled-components/native';

import FeedCardHeadeTest from './FeedCardHeaderTest';
import FeedCardFooterTest from './FeedCardFooterTest';

const Root = styled.View`
  minHeight: 180;
  backgroundColor: ${props => props.theme.WHITE};
  width: 100%;
  padding: 7px;
  shadowColor: ${props => props.theme.SECONDARY};
  shadowOffset: 0px 2px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
  marginVertical: 5;
`;

const CardContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 0px;
`;

const CardContentText = styled.Text`
  fontSize: 14;
  textAlign: left;
  fontWeight: 500;
  color: ${props => props.theme.SECONDARY};
`;

const text = 'This is my first tweet. Hello World!';

const FeedCardTest = () => (
  <Root>
    <FeedCardHeadeTest />
    <CardContentContainer>
      <CardContentText>{text}</CardContentText>
    </CardContentContainer>
    <FeedCardFooterTest />
  </Root>
);

export default FeedCardTest;