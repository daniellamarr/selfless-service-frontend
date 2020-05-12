import React, { Component } from 'react';
import Text from './Text';
import { colors } from '../utils/theme';

export default class Modal extends Component {
  render() {
    return (
      <div {...this.props} className="modal">
        <div className="close" onClick={this.props.closemodal}>
          <Text color={colors.white} fontFamily="secondary">x</Text>
          <Text color={colors.white} fontFamily="secondary">close</Text>
        </div>
        {this.props.children}
      </div>
    )
  }
}
