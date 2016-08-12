import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Navigator, View } from "react-native";
import { Container } from "native-base";

import NavigationBar from '../components/navigationBar'
import Home from "./home/index";

class Scene extends Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {

    const Component = route.component;

    return (
      <View>
        <NavigationBar />
        <Component
          navigator={navigator}
          route={route}
          {...route.passProps}
        />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: Home,
          title: "home"
        }}
      />
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
