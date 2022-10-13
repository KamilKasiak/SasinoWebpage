import bootstrap from 'bootstrap';
import saunaOutside from '../../assets/outside/saunaOutside.jpg';
import saunaInside from '../../assets/outside/saunaInside.jpg';
import monkeyGrove from '../../assets/outside/monkeyGrove.jpg';
import grill from '../../assets/outside/grill.jpg';
import pool from '../../assets/outside/pool.jpg';
import outsideLanding from '../../assets/outside/outsideLanding.png';

const OutsideCarousel = () => {
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
          <img src={saunaOutside} className='d-block w-100' alt='salon' />
        </div>
        <div className='carousel-item'>
          <img src={saunaInside} className='d-block w-100' alt='bedroom 1' />
        </div>
        <div className='carousel-item'>
          <img src={monkeyGrove} className='d-block w-100' alt='bedroom 2' />
        </div>
        <div className='carousel-item'>
          <img src={grill} className='d-block w-100' alt='bedroom 3' />
        </div>
        <div className='carousel-item'>
          <img src={pool} className='d-block w-100' alt='bedroom 4' />
        </div>
        <div className='carousel-item'>
          <img src={outsideLanding} className='d-block w-100' alt='attic' />
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

export default OutsideCarousel;
