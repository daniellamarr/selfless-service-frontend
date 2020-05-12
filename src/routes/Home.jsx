import React, { Component } from 'react';
import Text from '../components/Text';
import Header from '../components/Header';
import { colors } from '../utils/theme';
import Button from '../components/Button';
import Event from '../components/Event';
import Footer from '../components/Footer';
import events from '../data/events';
import highlights from '../data/highlights';
import team from '../data/team';
import Modal from '../components/Modal';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      openHighlight: false,
      highlight: {}
    }

    this.openHighlightPreview = (highlight, index) => {
      highlight.id = index;
      this.setState({highlight, openHighlight: true});
    }
  }

  render() {
    return (
      <section id="container">
        <Header />
        <main>
          <div className="bubbles">
            <img src={require('../assets/images/bubbles.png')} alt=""/>
          </div>
          <div className="mainTitle">
            <Text size="50px">
              We change lives one smile at a time
            </Text>
            <div className="mainSubtitle">
              <Text color={colors.gray77} fontFamily="secondary">
                Our prime purpose in this life is to help others.
                And if you can't help them, at least don't hurt them
                <br/>
                - Dalai Lama
              </Text>
            </div>
          </div>
          <div className="mainImage" />
          <div className="right-big-circle">
          <img src={require('../assets/images/circle.png')} alt=""/>
          </div>
        </main>
        <section id="about">
          <div className="video"></div>
          <div className="about">
            <Text>
              The Selfless Service is a group of young individuals who are passionate about seeing a change in their society.
              The Selfless Service carries out selfless projects and programs focused on young people to influence,reach the needs and change the mindset of young people, so a new set of selfless leaders is formed because as we know, the future is in the hands of the young.
            </Text>
          </div>
        </section>
        <section id="events">
          <div className="title">
            <Text size="20px" fontFamily="secondary" color={colors.primary}>EVENTS</Text>
            <Text size="15px" fontFamily="secondary" color={colors.primary}>SHOW ALL</Text>
            <div className="clear"></div>
          </div>
          <div className="row">
            {events.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </div>
        </section>
        <section id="highlights">
          <div className="title">
            <Text size="20px" fontFamily="secondary">HIGHLIGHTS</Text>
          </div>
          <div className="all-highlights">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="highlights"
                style={{backgroundImage: `url(${highlight.image})`}}
                onClick={() => this.openHighlightPreview(highlight, index)} />
            ))}
          </div>
        </section>
        <section id="donate">
          <div className="donateInner">
            <Text fontFamily="secondary3" color={colors.primary} size={70}>Help us help others</Text>
            <Text color={colors.white} fontFamily="secondary">
              We put smiles on the faces of kids and the helpless people around the world.<br />Support our cause.
            </Text>
            <Button rounded size="small">
              Donate
            </Button>
          </div>
        </section>
        <section id="team">
          <div className="title">
            <Text size="20px" fontFamily="secondary">TEAM</Text>
          </div>
          <div className="team">
            {team.map((person, index) => (
              <div className="team-details" key={index}>
                <div className="image" style={{backgroundImage: person.image ? `url(${person.image})` : `url(${require(`../assets/images/logo/logo-dark.png`)})`}}></div>
                <div className="details">
                  <Text color={colors.white}>{person.name}</Text>
                  <Text size="12px">{person.role}</Text>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="blog"></section>
        <Footer />
        {this.state.openHighlight && (
          <Modal id="highlights-modal" closemodal={() => this.setState({openHighlight: false})}>
            <div className="highlights-preview" style={{backgroundImage: `url(${this.state.highlight.image})`}}>
              {highlights[0].image !== this.state.highlight.image && (
                <div
                  className="prev"
                  onClick={() => this.openHighlightPreview(highlights[this.state.highlight.id - 1], this.state.highlight.id - 1)}>
                  <span className="fa fa-chevron-left" />
                </div>
              )}
              {highlights[highlights.length - 1].image !== this.state.highlight.image && (
                <div
                  className="next"
                  onClick={() => this.openHighlightPreview(highlights[this.state.highlight.id + 1], this.state.highlight.id + 1)}>
                  <span className="fa fa-chevron-right" />
                </div>
              )}
            </div>
          </Modal>
        )}
      </section>
    )
  }
}
