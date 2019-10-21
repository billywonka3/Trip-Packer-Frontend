import React from 'react';

const imgUrls = [
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/kc3zjmfy68rgac0ws6yu.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/p0hxuhjxkyjso7kb8ney.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/jaomz7ltstk6pppzgykq.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571456231/trip-packing%20hacks/yzgjr4ojxkvidvmmuu7m.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571456231/trip-packing%20hacks/f2hftfdiiwmsugixpjbu.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571456237/trip-packing%20hacks/ukzbcyu6ldbixvucbuqf.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/ivof0trwjdwummlchbgc.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/i5hvkd7bng5prmwzdn5c.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/nc766ondnswb06dspdkx.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/zqcquyje78kvkwx8uvwa.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/en4und9tljzg9awepkui.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571456410/trip-packing%20hacks/diwm5whzduqdjfdirqby.jpg",
  "https://res.cloudinary.com/nimbuscloud/image/upload/v1571457818/trip-packing%20hacks/wgbpkfyaq6xuhxwc4qio.jpg"
];

class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }


  render () {    
    const ImageSlide = ({ url }) => {
      const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
      };
    
      return (
        <div className="image-slide" style={styles}></div>
      );
    }
    
    const Arrow = ({ direction, clickFunction, glyph }) => (
      <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
      </div>
    );


    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        <ImageSlide url={ imgUrls [this.state.currentImageIndex] } />

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;