import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';

import FeedCard from '../components/FeedCard/FeedCard';
import FeedCardTest from '../components/FeedCard/FeedCardTest';

import TWEETS_QUERY from '../graphql/queries/getTweets';

const Root = styled.View`
  flex: 1;
  paddingTop: 5;
`;

const List = styled.ScrollView``;

class HomeScreen extends Component {
  _renderItem = ({ item }) => <FeedCard {...item} />

  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      )
    }
    return (
      <Root>
        {/* <List>
          <FeedCardTest />
          <FeedCardTest />
          <FeedCardTest />
          <FeedCardTest />
          <FeedCardTest />
        </List> */}
        <FlatList
          contentContainerStyle={{ alignSelf: 'stretch' }}
          data={data.getTweets}
          keyExtractor={item => item._id}
          renderItem={this._renderItem}
        />
      </Root>
    );
  }
}

export default graphql(TWEETS_QUERY)(HomeScreen);
