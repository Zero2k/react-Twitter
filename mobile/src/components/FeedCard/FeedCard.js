import React, { Component } from 'react';
import styled from 'styled-components/native';

import FeedCardHeader from './FeedCardHeader';
import FeedCardFooter from './FeedCardFooter';

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

function FeedCard({ text, user, createdAt, favoriteCount }) {
  <Root>
    <FeedCardHeader {...user} createdAt={createdAt} />
    <CardContentContainer>
      <CardContentText>{text}</CardContentText>
    </CardContentContainer>
    <FeedCardFooter favoriteCount={favoriteCount} />
  </Root>
};

export default FeedCard;
