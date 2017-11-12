import gql from 'graphql-tag';

const TWEETS_QUERY = gql`
  query {
    getTweets {
      text
      _id
      createdAt
      favoriteCount
      user {
        username
        avatar
        firstName
        lastName
      }
    }
  }
`;

export default TWEETS_QUERY;