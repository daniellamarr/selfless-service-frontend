import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { colors } from '../utils/theme';

export default class Header extends Component {
  render() {
    const links = [
      {
        title: 'About Us',
        url: 'about'
      },
      {
        title: 'Blog',
        url: 'blog'
      },
      {
        title: 'Events',
        url: 'events'
      }
    ];
    const linkStyle = {
      color: this.props.linkColor || colors.black
    };
    return (
      <header>
        <Logo logoColor={this.props.linkColor} type="image" />
        <nav>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.url} style={linkStyle}>{link.title}</Link>
                </li>
              )
            })}
            <li>
              <Link to="volunteer">
                <Button size="small" rounded>
                  Volunteer
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
