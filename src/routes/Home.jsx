import React, { Component } from 'react';
import Text from '../components/Text';
import Header from '../components/Header';
import { colors } from '../utils/theme';
import BackgroundPlayer from '../components/BackgroundPlayer';
import Button from '../components/Button';

export default class Home extends Component {
  render() {
    return (
      <section id="container">
        <Header />
        <main>
          <div className="mainTitle">
            <Text size="50px">
              We change lives one smile at a time
            </Text>
            <div className="mainSubtitle">
              <Text color={colors.grayAA} fontFamily="secondary">
                Our prime purpose in this life is to help others.
                And if you can't help them, at least don't hurt them
                <br/>
                - Dalai Lama
              </Text>
            </div>
          </div>
          <div className="mainImage"></div>
        </main>
        <section id="about">
          <BackgroundPlayer />
          <div className="aboutDetails">
            <Text fontFamily="secondary" color={colors.black} bold>
              Selfless Service is a group of youths who are trying to
              make a difference in their society by going from one
              community to another feeding, clothing and helping the needy.
              We also conduct community services like cleaning the drainages,
              sweeping the environments, free-will donations of books to schools and many more. 
            </Text>
            <Button size="small" rounded bgColor={colors.white} color={colors.primary}>
              Watch Video
            </Button>
          </div>
        </section>
        <section id="events">
          <div className="row">
            <div className="column"></div>
          </div>
        </section>
      </section>
    )
  }
}
