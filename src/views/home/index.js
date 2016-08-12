import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from '../../actions/testActions';

import { Container, Content, Text } from 'native-base';
import theme from '../../template/baseTheme';
import styles from './styles';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.setTitle('Hello World');
  }

  render() {
    console.log(this.props)

    return (
      <Container>
          <Content>
            <Text style={styles.content}>{this.props.title}</Text>
          </Content>
      </Container>
    );
  }

}

Home.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.testReducer.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(testActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
