import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import video from './avocado.mp4';
import { isMobile } from '../../helpers';

class VideoBackground extends Component {

  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      paused: false,
    };

  }

  componentWillMount() {

  }

  componentDidMount() {
    if (isMobile()) {
      // alert('We need your input');
    }

    // console.log(this.video);
    // this.video.play();
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <video
        ref={ c => this.video = c }
        loop
        autoPlay
        muted
        width={ '100%' }
        height={ '100%' }
        className={ styles.video }
        playsInLine id="video"
        type='video/mp4'
      >
        <source src={ video } type="video/mp4" />
        <span>Your browser does not support the video tag.</span>
      </video>
    );
  }

}

export default VideoBackground;
