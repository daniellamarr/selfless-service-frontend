import React, { Component } from 'react';
import Text from './Text';

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        {this.props.type === 'text'
          ? <Text size="25px">Selfless Service</Text>
          : <img />
        }
      </div>
    )
  }
}
