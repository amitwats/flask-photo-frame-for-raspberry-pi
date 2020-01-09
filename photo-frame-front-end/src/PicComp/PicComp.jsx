import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './PicComp.styles';
// import img1 from '../pics/1.jpg';
// import img2 from '../pics/2.jpg';
// import img3 from '../pics/3.jpg';
// import img4 from '../pics/4.jpeg';
// import img5 from '../pics/5.jpg';

import "./PicComp.css"


class PicComp extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('PicComp will mount');
  }

  componentDidMount = () => {
    console.log('PicComp mounted');
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('PicComp will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('PicComp will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('PicComp did update');
  }

  componentWillUnmount = () => {
    console.log('PicComp will unmount');
    clearInterval(this.interval);
  }

  render () {
    var x=Math.floor(Math.random() * 5) + 1 ;
    var imageSource=require(`../pics/${x}.jpg`);
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="imgSty">
        Test content
        <img className="imgSty" src={imageSource} alt="Image" />
      </div>
    );
  }
}

PicComp.propTypes = {
  // bla: PropTypes.string,
};

PicComp.defaultProps = {
  // bla: 'test',
};

export default PicComp;
