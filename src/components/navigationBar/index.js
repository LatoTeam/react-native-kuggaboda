import React, { Component } from 'react';

import { Container, Header, Title, Button, Icon } from 'native-base';
import theme from '../../template/baseTheme';
import styles from './styles';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header style={styles.navigationBar}>
        <Title style={styles.title}>Header</Title>
      </Header>
    );
  }

}

export default NavigationBar;
