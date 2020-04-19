import React, { Component } from 'react';
import Text from './Text';
import { colors } from '../utils/theme';

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        {this.props.type === 'text'
          ? <Text color={this.props.logoColor || colors.black} size="25px">
            Selfless Service
          </Text>
          : <img src={require('../assets/images/logo/logo-ld.png')} width="120px" />
        }
      </div>
    )
  }
}
