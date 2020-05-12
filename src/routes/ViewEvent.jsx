import React, { Component } from 'react';
import Header from '../components/Header';
import { colors } from '../utils/theme';

export default class ViewEvent extends Component {
  render() {
    return (
      <section>
        <section id="eventBanner" style={{backgroundImage: `url(https://images.pexels.com/photos/3812041/pexels-photo-3812041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}>
          <Header linkColor={colors.white} />
        </section>
      </section>
    )
  }
}
