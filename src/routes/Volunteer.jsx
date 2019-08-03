import React, { Component } from 'react';
import Header from '../components/Header';
import { colors } from '../utils/theme';
import Text from '../components/Text';
import Button from '../components/Button';

export default class Volunteer extends Component {
  render() {
    return (
      <section
        id="container"
        style={{
          backgroundImage: 'url(assets/images/volunteer.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          height: '100vh',
          position: 'absolute',
          width: '100%'
        }}
      >
        <Header linkColor={colors.white} />
        <main>
          <div className="volunteer">
            <Text color={colors.primary} size="25px">Become a Volunteer</Text>
            <Text color={colors.white} size="12px">
              Join hundreds of youths making a difference all over the world
            </Text>
            <form>
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Surname" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="State or Province" />
              <input type="text" placeholder="Country" />
              <Button size="small" rounded>
                Proceed
              </Button>
            </form>
          </div>
        </main>
      </section>
    )
  }
}
