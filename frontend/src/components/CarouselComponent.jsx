import Carousel from 'react-bootstrap/Carousel';
import homeSlider01 from '../assets/images/carousel/homeSlider01.jpg';
import homeSlider02 from '../assets/images/carousel/IUBAT-VC.jpg';
function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={homeSlider01}
          alt="First slide"
        />
        <Carousel.Caption className='text-center text-white'>
          <h1>First slide label</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={homeSlider02 }
          alt="Second slide"
        />
        <Carousel.Caption className='text-center text-white'>
          <h1>First slide label</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={homeSlider01}
          alt="Third slide"
        />
        <Carousel.Caption className='text-center text-white'>
          <h1>First slide label</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;