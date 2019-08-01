import React, { Component } from 'react';
import colors from '../utils/colors';

export default class Text extends Component {
  render() {
    const fontSize = this.props.size || '16px';
    const color = this.props.color || colors.black;
    const fontWeight = this.props.bold ? 'bold' : 'normal';
    return (
      <p style={{ fontSize, color, fontWeight }}>
        {this.props.children}
      </p>
    )
  }
}
