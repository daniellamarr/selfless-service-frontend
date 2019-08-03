import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { colors } from '../utils/theme';

export default class Header extends Component {
  render() {
    const links = ['About Us', 'Blog', 'Events'];
    const linkStyle = {
      color: this.props.linkColor || colors.black
    };
    return (
      <header>
        <Logo logoColor={this.props.linkColor} type="text" />
        <nav>
          <ul>
            {links.map(link => {
              return (
                <li>
                  <a style={linkStyle}>{link}</a>
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
