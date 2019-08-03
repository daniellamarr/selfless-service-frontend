import React, { Component } from 'react';
import BackgroundVideoPlayer from 'react-background-video-player';

export default class BackgroundPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
      windowWidth: window.innerWidth,
      windowHeight: '200px',
    }
  }
  componentDidMount() {
    this.setState({
      isPlaying: !this.player.isPaused,
      isMuted: this.player.isMuted,
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  };

  handleOnPlay() {
    this.setState({isPlaying: true});
  };

  handleOnPause() {
    this.setState({isPlaying: false});
  };

  handleTimeUpdate(currentTime, progress, duration) {
    this.setState({
      progress,
      currentTime,
      duration,
    });
  };

  handleOnMute() {
    this.setState({isMuted: true});
  };

  handleOnUnmute() {
    this.setState({isMuted: false});
  };

  togglePlay() {
    this.player.togglePlay();
  };

  toggleMute() {
    this.player.toggleMute();
  };
  render() {
    return (
      <BackgroundVideoPlayer
        ref={p => this.player = p}
        containerWidth={500}
        containerHeight={400}
        src={'/assets/videos/intro.mp4'}
        poster={'/assets/images/videoposter.jpg'}
        onPlay={this.handleOnPlay}
        onPause={this.handleOnPause}
        onMute={this.handleOnMute}
        onUnmute={this.handleOnUnmute}
        onTimeUpdate={this.handleTimeUpdate}
        startTime={10}
        autoPlay={true}
        volume={0.9}
        style={{
          position: 'relative'
        }}
      />
    )
  }
}
