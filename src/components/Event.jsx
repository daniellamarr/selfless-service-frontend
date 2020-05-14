import React, { Component } from 'react';
import Text from './Text';
import { colors } from '../utils/theme';
import truncate from '../utils/truncate';
import Button from './Button';
import { Link } from 'react-router-dom';

export default class Event extends Component {
  render() {
    const {event} = this.props;
    return (
      <div className="column" style={{backgroundImage: `url(${event.image})`}}>
        <div className="column-details">
          <div className="column-details-inner">
            <Text color={colors.primary} fontFamily="secondary2" size="18px">{event.title}</Text>
            <Text color={colors.white} fontFamily="primary" size="10px">
              {truncate('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.')}
            </Text>
            <Text color={colors.white} fontFamily="secondary" size="8px">{event.date}</Text>
            <Link to={`/events/${event.id}`}>
              <Button rounded size="small">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
