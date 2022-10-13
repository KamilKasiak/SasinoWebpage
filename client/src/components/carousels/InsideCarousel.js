import salon from '../../assets/inside/salon.jpg';
import bedroom1 from '../../assets/inside/bedroom.jpg';
import bedroom2 from '../../assets/inside/bedroom2.jpg';
import bedroom3 from '../../assets/inside/bedroom3.jpg';
import bedroom4 from '../../assets/inside/bedroom4.jpg';
import attic from '../../assets/inside/attic.jpg';

const InsideCarousel = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-bs-ride='true'
    >
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='3'
          aria-label='Slide 4'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='4'
          aria-label='Slide 5'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='5'
          aria-label='Slide 6'
        ></button>
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={salon} className='d-block w-100' alt='salon' />
        </div>
        <div className='carousel-item'>
          <img src={bedroom1} className='d-block w-100' alt='bedroom 1' />
        </div>
        <div className='carousel-item'>
          <img src={bedroom2} className='d-block w-100' alt='bedroom 2' />
        </div>
        <div className='carousel-item'>
          <img src={bedroom3} className='d-block w-100' alt='bedroom 3' />
        </div>
        <div className='carousel-item'>
          <img src={bedroom4} className='d-block w-100' alt='bedroom 4' />
        </div>
        <div className='carousel-item'>
          <img src={attic} className='d-block w-100' alt='attic' />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default InsideCarousel;
