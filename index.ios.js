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
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
];

var MOCKED_ITEMS_DATA = [
  {title: 'Palmaz Vineyards', saves: '233', thought: 'Advanced Tech, Good tour, really good wine', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class AwesomeProject extends Component {
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

  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }

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
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    // return (
    //   <ListView
    //     dataSource={this.state.dataSource}
    //     renderRow={this.renderMovie}
    //     style={styles.listView}
    //   />
    // );
    return (
      <TabBarIOS>
        <TabBarIOS.Item 
        systemIcon="history"
        selected={this.state.selectedTab === 'tabOne'}
        onPress={() => this.setTab('tabOne')}>
          <View style={styles.container}>
            <Text style={styles.tabText}>Tab One</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon="favorites"
        selected={this.state.selectedTab === 'tabTwo'}
        onPress={() => this.setTab('tabTwo')}>
          <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderMovie}
              style={styles.listView}
            />
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon="more"
        selected={this.state.selectedTab === 'tabThree'}
        onPress={() => this.setTab('tabThree')}>
          <View style={styles.container}>
            <Text style={styles.tabText}>Tab Three</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }


  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
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
    );
  }
}

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
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
