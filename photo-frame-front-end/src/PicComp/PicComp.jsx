import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './PicComp.styles';
// import img1 from '../pics/1.jpg';
// import img2 from '../pics/2.jpg';
// import img3 from '../pics/3.jpg';
// import img4 from '../pics/4.jpeg';
// import img5 from '../pics/5.jpg';

import "./PicComp.css"

function importAll(r) {
  return r.keys().map(r);
}

var images = importAll(require.context('../pics/', false, /\.(png|jpe?g|svg)$/));


class PicComp extends PureComponent { 
  constructor(props) {
    super(props);
    var listImg=images.map((x)=>{return x})
    
    this.state = {
      hasError: false,
      listOfImages:listImg.length,
      currentImgNumber:0
    };
  }

  componentWillMount = () => {
    console.log('PicComp will mount');
  }

  // nextImage(){
  //   var x=Math.floor(Math.random() * 5) + 1 ;
  //   var imageSource=require(`../pics/${x}.jpg`);
  //   return imageSource;
  // }

  getNextImageNum(){
    return ((this.state.currentImgNumber+1)<images.length?(this.state.currentImgNumber+1):0)
  }
  componentDidMount = () => {
    console.log('PicComp mounted');
    this.interval = setInterval(() => this.setState({ currentImgNumber:this.getNextImageNum(), }), 1000);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('PicComp will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('PicComp will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('PicComp did update');
    console.log("*******************************************************")
    console.log("Getting File COntent,pic.txt")
    var x=fetch("http://127.0.0.1:8000/pic_list.txt").then(response=>response.text())
    //x=fetch("http://0.0.0.0:8000/pic_list.txt").then(response=>response.text()).then(data=> console.log(data))

    console.log("-------------------------------------------------------")


  }

  getNextImage()
  {
    var imageSource=images[this.state.currentImgNumber]
    //return <img className="imgSty" src={imageSource} alt="Image" />
    //return <img className="imgSty" src='https://img1.looper.com/img/gallery/what-the-cast-of-zoolander-looks-like-today/intro-1530138734.jpg' alt="Image" />
    return <img className="imgSty" src='http://0.0.0.0:8000/pics/1.jpg' alt="Image" />
  }
  componentWillUnmount = () => {
    console.log('PicComp will unmount');
    clearInterval(this.interval);
  }

  render () {
    //var x=Math.floor(Math.random() * 5) + 1 ;
    //var imageSource=require(`../pics/${x}.jpg`);
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="imgSty">
        {this.getNextImage()}
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
