import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './TimeComp.styles';
import "./TimeComp.css"

class TimeComp extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('TimeComp will mount');
  }

  componentDidMount = () => {
    console.log('TimeComp mounted');
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TimeComp will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TimeComp will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('TimeComp did update');
  }

  componentWillUnmount = () => {
    console.log('TimeComp will unmount');
    clearInterval(this.interval);
  }

  pad2dig(x){
    var retVal=x<10?("0"+x):x;
    return retVal
  }


  render () {

  var today = new Date();
  var hrs= (today.getHours()>12?today.getHours()-12:today.getHours());
  var mns= today.getMinutes() ;
  var secs= today.getSeconds();
  var am_pm= (today.getHours()>12?'PM':'AM');
  var timeNow = this.pad2dig(hrs) + ':' + this.pad2dig(mns)+':' + this.pad2dig(secs) + '  '+ am_pm;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="glow">
          {timeNow}
      </div>
    );
  }
}

TimeComp.propTypes = {
  // bla: PropTypes.string,
};

TimeComp.defaultProps = {
  // bla: 'test',
};

export default TimeComp;
