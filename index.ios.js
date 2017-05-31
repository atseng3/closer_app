/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';


import { StackNavigator,TabNavigator } from 'react-navigation';


var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
];

var MOCKED_ITEMS_DATA = [
  {title: 'xxxxx', saves: '233', thought: 'Advanced Tech, Good tour, really good wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Hendry Vineyard and Winery', saves: '233', thought: 'if you want to know more about wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Frogs Leap', saves: '233', thought: 'Drink easily at a pretty garden', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Palmaz Vineyards', saves: '233', thought: 'Advanced Tech, Good tour, really good wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Hendry Vineyard and Winery', saves: '233', thought: 'if you want to know more about wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Frogs Leap', saves: '233', thought: 'Drink easily at a pretty garden', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Palmaz Vineyards', saves: '233', thought: 'Advanced Tech, Good tour, really good wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Hendry Vineyard and Winery', saves: '233', thought: 'if you want to know more about wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Frogs Leap', saves: '233', thought: 'Drink easily at a pretty garden', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Palmaz Vineyards', saves: '233', thought: 'Advanced Tech, Good tour, really good wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Hendry Vineyard and Winery', saves: '233', thought: 'if you want to know more about wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Frogs Leap', saves: '233', thought: 'Drink easily at a pretty garden', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
];

var MOCKED_COLLECTIONS_DATA = [
  {title: 'Napa Valley Wineries', followers: '2.5M', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'Horror Movies', followers: '45k', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
  {title: 'SF Restaurants', followers: '3k', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.movie.title}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.movie.title}</Text>
      </View>
    );
  }
}

class ExploreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tabText}>Explore!</Text>
      </View>
    );
  }
}

class ListHomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      // items: null,
      loaded: false,
    };
  }

  static navigationOptions = {
    title: 'atseng3',
  };

  componentDidMount() {
    // this.fetchData();
    this.setState({
      // items: MOCKED_ITEMS_DATA
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_COLLECTIONS_DATA),
      loaded: true,
    });
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderList.bind(this)}
          style={styles.listView}
        />
      </View>
    );
  }

  renderList(movie) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight 
        onPress={() => navigate('CollectionItems',{movie})}>
        <View style={styles.container}>
          <View style={styles.rightContainer}>
            <Image
              source={{uri: movie.posters.thumbnail}}
              style={styles.collectionBG}
            />
            <View style={styles.collectionText}>
              <Text style={styles.collectionTitle}>{movie.title}</Text>
              <Text style={styles.collectionSubtitle}>{movie.followers} followers</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

class CollectionItemsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      // items: null,
      loaded: false,
    };
  }

  static navigationOptions = {
    title: 'Napa Valley Wineries',
    headerRight: <View><Text>Grid</Text></View>,
  };

  componentDidMount() {
    // this.fetchData();
    this.setState({
      // items: MOCKED_ITEMS_DATA
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_ITEMS_DATA),
      loaded: true,
    });
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderList.bind(this)}
          style={styles.listView}
        />
      </View>
    );
  }

  renderList(movie) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight 
        onPress={() => navigate('Chat',{movie})}>
        <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>💬 {movie.thought}</Text>
            <Text style={styles.year}>{movie.saves} Saves</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}



const ListNav = StackNavigator({
  Home: { screen: ListHomeScreen },
  CollectionItems: { screen: CollectionItemsScreen },
  Chat: { screen: ChatScreen },
});

const MainScreenNavigator = TabNavigator({
  Recent: { screen: ListNav },
  All: { screen: ExploreScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    // fontFamily: 'PingFang TC'
  },
  rightContainer: {
    flex: 1,
    marginBottom: 10,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 52,
    height: 52,
    marginRight: 12,
    marginLeft: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
  },
  year: {
    fontSize: 12,
    textAlign: 'left',
  },
  tabText: {
    margin: 50,
    fontSize: 45
  },
  collectionBG: {
    width: 325,
    height: 94,
    marginRight: 25,
    marginLeft: 25,

  },
  collectionText: {
    width: 325,
    height: 94,
    backgroundColor: 'transparent',
    marginTop: -94,
    marginLeft: 30,
    paddingTop: 40,

  },
  collectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    textAlign: 'left',
  },
  collectionSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => MainScreenNavigator);



