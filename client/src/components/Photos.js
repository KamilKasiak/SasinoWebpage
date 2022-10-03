import './Photos.scss';

const Photos = () => {
  return (
    <div className='photo-section'>
      <div className='photos-description'>
        <h2>House tailored for you</h2>
        <h3>It's is time to heal your mind and body</h3>
      </div>
      <div className='photos'>
        <div className='inside'>
          <h3>What is inside?</h3>
        </div>
        <div className='outside'>
          <h3>What is outside</h3>
        </div>
        <div className='nearby'>
          <h3>What is nearby</h3>
        </div>
      </div>
    </div>
  );
};

export default Photos;
