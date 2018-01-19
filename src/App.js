import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Header, Button } from './Components/Common';
import { WorkoutSelect } from './Components/WorkoutSelect';
import { WorkoutPage } from './Components/WorkoutPage';
import { Home } from './Components/Home';




class App extends Component {


  render() {
    return (
      <NativeRouter>
        <View>
          <Header headerText="Fit App" />
            <View style={styles.viewStyle}>

            <Link style={styles.buttonStyle} to='/'>
              <Text style={styles.textStyle}>
                Home
              </Text>
            </Link>

          </View>
          <Route exact path='/' component={Home} />
          <Route path='/WorkoutPage' component={WorkoutPage} />
          <Route path='/WorkoutSelect' component={WorkoutSelect} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = {
  viewStyle: {
    display: 'flex',
    flexDirection: 'row'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  }
}

export default App;
