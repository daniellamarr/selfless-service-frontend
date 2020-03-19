import React, { Component } from 'react';
import Text from '../components/Text';
import Header from '../components/Header';
import { colors } from '../utils/theme';
import BackgroundPlayer from '../components/BackgroundPlayer';
import Button from '../components/Button';
import Event from '../components/Event';
import Footer from '../components/Footer';

const events = [
  {
    title: 'Book Drive',
    image: 'https://images.pexels.com/photos/3484683/pexels-photo-3484683.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    date: '29th August 2019'
  },
  {
    title: 'Think Big',
    image: 'https://images.pexels.com/photos/3534924/pexels-photo-3534924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'My Voice',
    image: 'https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'Book Drive',
    image: 'https://images.pexels.com/photos/3496542/pexels-photo-3496542.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'Think Big',
    image: 'https://images.pexels.com/photos/3521891/pexels-photo-3521891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    title: 'My Voice',
    image: 'https://images.pexels.com/photos/3487217/pexels-photo-3487217.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
];

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
          <div className="video"></div>
          <div className="about">
            <Text>
              The Selfless Service is a group of young individuals who are passionate about seeing a change in their society.
              The Selfless Service carries out selfless projects and programs focused on young people to influence,reach the needs and change the mindset of young people, so a new set of selfless leaders is formed because as we know, the future is in the hands of the young.
            </Text>
          </div>
          {/* <BackgroundPlayer />
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
          </div> */}
        </section>
        <section id="events">
          <div className="title">
            <Text size="20px" fontFamily="secondary">EVENTS</Text>
          </div>
          <div id="masonry-with-columns" className="row">
            {events.map(event => (
              <Event event={event} />
            ))}
          </div>
        </section>
        <section id="highlights">
          <div className="title">
            <Text size="20px" fontFamily="secondary">HIGHLIGHTS</Text>
          </div>
          <div className="all-highlights">
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3491940/pexels-photo-3491940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3484702/pexels-photo-3484702.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3479057/pexels-photo-3479057.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3154302/pexels-photo-3154302.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3363341/pexels-photo-3363341.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3400738/pexels-photo-3400738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3395235/pexels-photo-3395235.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
            <div className="highlights" style={{backgroundImage: `url(https://images.pexels.com/photos/3257375/pexels-photo-3257375.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)`}}></div>
          </div>
        </section>
        <section id="donate">
          <div className="donateInner"></div>
        </section>
        <section id="team">
          <div className="title">
            <Text size="20px" fontFamily="secondary">TEAM</Text>
          </div>
          <div className="team">
            <div className="team-details">
              <div className="image" style={{backgroundImage: `url(${require('../assets/images/chelsea.jpg')})`}}></div>
              <div className="details">
                <Text color={colors.white}>Chelsea Jegede</Text>
                <Text size="12px">Founder/CEO</Text>
              </div>
            </div>
            <div className="team-details">
              <div className="image" style={{backgroundImage: `url(${require('../assets/images/anjola_oladimeji.jpeg')})`}}></div>
              <div className="details">
                <Text color={colors.white}>Anjola Oladimeji</Text>
                <Text size="12px">Member</Text>
              </div>
            </div>
            <div className="team-details">
              <div className="image" style={{backgroundImage: `url(${require('../assets/images/kosorochukwu_ofoegbu.jpeg')})`}}></div>
              <div className="details">
                <Text color={colors.white}>Kosorochukwu Ofoegbu</Text>
                <Text size="12px">Member</Text>
              </div>
            </div>
            <div className="team-details">
              <div className="image" style={{backgroundImage: `url(${require('../assets/images/nwanguma_peace.jpeg')})`}}></div>
              <div className="details">
                <Text color={colors.white}>Nwanguma Peace</Text>
                <Text size="12px">Member</Text>
              </div>
            </div>
            <div className="team-details">
              <div className="image" style={{backgroundImage: `url(${require('../assets/images/bolu_aghobor.jpeg')})`}}></div>
              <div className="details">
                <Text color={colors.white}>Bolu Aghobor</Text>
                <Text size="12px">Member</Text>
              </div>
            </div>
          </div>
        </section>
        <section id="blog"></section>
        <Footer />
      </section>
    )
  }
}
