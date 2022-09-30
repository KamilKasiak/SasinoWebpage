import './Reservation.scss';

const Reservation = () => {
  return (
    <div className='container reservation'>
      <h2>Let your mind breathe!</h2>
      <h3>You will rest with us.</h3>
      <div class='call-to-action'>
        <button class='cta-sec'>Check availability</button>
        <button class='cta-main'>Sign up today</button>
      </div>
    </div>
  );
};

export default Reservation;
