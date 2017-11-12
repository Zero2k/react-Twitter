import React from 'react';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo';
// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ThemeProvider } from 'styled-components';
import client from './src/client';
import { store } from './src/store';
import { colors } from './src/utils/constants';


// import HomeScreen from './src/screens/HomeScreen';
import AppNavigation from './src/navigations';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/* const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://146.185.149.19:3000/graphql' }),
  cache: new InMemoryCache()
}); */

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={colors}>
            <AppNavigation />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}
