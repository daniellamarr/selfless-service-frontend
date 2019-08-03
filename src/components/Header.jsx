import React, { Component } from 'react'
import Logo from './Logo';
import Button from './Button';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo type="text" />
        <nav>
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>
                <Button size="small" rounded>
                  Volunteer
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
