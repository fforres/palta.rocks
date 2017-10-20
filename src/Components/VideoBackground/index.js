import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import video from './avocado.mp4';

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
      <video autoPlay muted loop className={ styles.video } id="video">
        <source src={ video } type="video/mp4" />
        <span>Your browser does not support the video tag.</span>
      </video>
    );
  }

}

export default VideoBackground;
