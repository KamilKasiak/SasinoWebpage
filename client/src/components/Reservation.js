import './Reservation.scss';
import Photos from './Photos';

const Reservation = () => {
  return (
    <div className='container reservation'>
      <h2>Let your mind breathe!</h2>
      <h3>You will rest with us.</h3>
      <div className='call-to-action'>
        <button className='cta-main'>Check availability</button>
        <button className='cta-sec'>Watch photos</button>
      </div>
      <div id='photos'>
        <Photos />
      </div>
    </div>
  );
};

export default Reservation;
