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
  Dimensions,
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
  {title: 'Napa Valley Wineries', followers: '2.5M', posters: {thumbnail: "https://res.cloudinary.com/daehjdxjm/image/upload/w_325,c_scale/v1491791222/jitu51xqwz6tqw4tf0hb.jpg"}},
  {title: 'Best Ski Places', followers: '45k', posters: {thumbnail: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/16998250_10211407391916003_4995942992871195066_n.jpg?oh=3e076e55d2bc83fccc9520df73980017&oe=59A7F47F'}},
  {title: 'SF Restaurants', followers: '3k', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
];

var MOCKED_ITEM_DETAILS = [
  {name: 'Long Island Ice Tea', collection: 'Alcohol', saved: '999', store: 'B Line by A Train', thought: 'Best drink place ever!', picture: 'https://res.cloudinary.com/daehjdxjm/image/upload/v1491012912/tppmnkxdpvldvux8tcpa.jpg'}
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'tedtien',
      collections: 3,
      items: 99,
    };
  }

  render() {
    return (
      <View style={styles.profileHeader} >
        <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between', alignItems: 'flex-end'}} >
          <View style={styles.profileHeaderComponent}>
            <View style={styles.profilePicture}></View>
            <Text style={{fontWeight: 'bold',fontSize: 14, color: 'black',marginTop: 10}}>{this.state.username}</Text>  
          </View>
          <View style={styles.profileHeaderComponent}>
            <Text style={{fontWeight: 'bold',fontSize: 20, color: 'black'}}>{this.state.collections}</Text>
            <Text style={{color: 'black',marginTop: 5}}>Collections</Text>
          </View>
          <View style={styles.profileHeaderComponent}>
            <Text style={{fontWeight: 'bold',fontSize: 20, color: 'black'}}>{this.state.items}</Text>
            <Text style={{color: 'black',marginTop: 5}}>Saved Items</Text>
          </View>
        </View> 
      </View>
    );
  }
}


class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne',
      dataSource: {name: 'Long Island Ice Tea', collection: 'Alcohol', saved: '999', store: 'B Line by A Train', thought: 'Best drink place ever!', picture: 'https://res.cloudinary.com/daehjdxjm/image/upload/v1491012912/tppmnkxdpvldvux8tcpa.jpg'},
      // items: null,
      loaded: true,
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "tedtien's Item",
  });


  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.itemDetail}>
        <Text>📔 {this.state.dataSource.collection}</Text>
        <Image
          source={{uri: this.state.dataSource.picture}}
          style={styles.itemPicture}
        />
        <Text>{this.state.dataSource.name}</Text>
        <Text>{this.state.dataSource.saved} others Saved</Text>
        <Text>{this.state.dataSource.thought}</Text>
        <Text>{this.state.dataSource.store}</Text>
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
    title: 'My Collections',
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
      <View style={styles.body}>
        <ProfileHeader/>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderList.bind(this)}
            style={styles.listView}
          />
        </View>
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
            <View style={styles.imageShadow}></View>
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

const { width, height } = Dimensions.get('window');
const gutter = 15;

class CollectionItemsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne',
      displayStyle: 'list',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      // items: null,
      loaded: false,
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.movie.title,
    headerRight: <Button title= {(navigation.state.params.style == 'list') ? 'List' : 'Grid'} onPress={() => {navigation.state.params.handleSave()}} />
  });


  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.changeView.bind(this) });
  }


  changeView() {
    
    // alert('ChangeView');
    this.setState({
      displayStyle: this.state.displayStyle == 'list' ? 'grid' : 'list',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    })
    this.props.navigation.setParams({ style: this.state.displayStyle });

  }


  componentWillMount() {
    // this.fetchData();
    this.setState({
      // items: MOCKED_ITEMS_DATA
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_ITEMS_DATA),
      loaded: true,
      displayStyle: 'list',
    });
    // this.props.navigation.setParams({ handleView: this.changeView });
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

    if(this.state.displayStyle == 'list') {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(MOCKED_ITEMS_DATA)}
            renderRow={this.renderList.bind(this)}
            style={styles.listView}
          />
        </View>
      );
      
    } 
    else {
      return (
        <View>
          <ListView contentContainerStyle={styles.gridRow}
            dataSource={this.state.dataSource.cloneWithRows(MOCKED_ITEMS_DATA)}
            renderRow={this.renderGrid.bind(this)}
            style={styles.listView}
          />
        </View>
        
      );  
    }
    
  }

  renderGrid(movie) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight 
        onPress={() => navigate('Chat',{movie})}>
        <View style={styles.gridItem}>
            <Image
              source={{uri: movie.posters.thumbnail}}
              style={styles.gridThumbnail}
            />
            <Text style={styles.gridTitle}>{movie.title}</Text>
        </View>
      </TouchableHighlight>
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
            style={styles.listThumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.listTitle}>{movie.title}</Text>
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
  baseText: {
    fontFamily: 'Helvetica'
  },
  body: {
    height: height,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  rightContainer: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 5
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: gutter,
  },
  gridItem: {
    width: (width - gutter * 3)/3,
    marginBottom: gutter,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  gridTitle: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  gridThumbnail: {
    width: 102,
    height: 102,
    borderRadius: 5,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  listThumbnail: {
    width: 52,
    height: 52,
    marginRight: 12,
    marginLeft: 20,
    borderRadius: 5,
  },
  listTitle: {
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
    borderRadius: 5,
  },
  imageShadow: {
    backgroundColor: 'rgba(74,74,74,0.2)',
    width: 325,
    height: 94,
    marginTop: -94,
    marginRight: 25,
    marginLeft: 25,
    borderRadius: 5
  },
  collectionText: {
    width: 325,
    height: 94,
    backgroundColor: 'transparent',
    marginTop: -94,
    marginLeft: 40,
    paddingTop: 40,

  },
  collectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    textAlign: 'left',
  },
  collectionSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
  },
  profileHeader: {
    height: 180,
    backgroundColor: '#FFF',
    borderBottomColor: '#7A47C2',
    borderBottomWidth: 2,
    paddingRight: 25,
    paddingLeft: 25
  },
  profileHeaderComponent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileHeaderText: {
    color: 'black',
  },
  profilePicture: {
    backgroundColor: 'rgba(74,74,74,0.5)',
    height: 80,
    width: 80,
    borderColor: '#7A47C2',
    borderRadius: 150,
    borderStyle: 'solid',
    borderWidth: 2
  },
  itemDetail: {
    height: height,
    backgroundColor: '#FFF',
    alignItems: 'center',

  },
  itemPicture: {
    width: 275,
    height: 275,
    // marginRight: 25,
    // marginLeft: 25,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => MainScreenNavigator);



