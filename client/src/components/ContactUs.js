import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as React from 'react';
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [message, setMessage] = useState('');
  const [messageAndDate, setMessageAndDate] = useState('');

  const handleTextareaChange = (e) => {
    if (state) {
      const startDate = state[0].startDate.toDateString();
      const formatedStartDate = new Date(startDate).toLocaleDateString(
        'en-gb',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
      );
      setStartDay(formatedStartDate);
      const endDate = state[0].endDate.toDateString();
      const formatedEndDate = new Date(endDate).toLocaleDateString('en-gb', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setEndDay(formatedEndDate);
      setMessage(
        `I would like to make reservation from ${startDay} to ${endDay}`
      );
    }
    setMessageAndDate(e.target.value);
  };

  return (
    <div className='contact-us-box'>
      <h1>Hi there! Contact Us</h1>
      <div className='date-and-contact-box'>
        <div className='date-range-picker'>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => {
              setState([item.selection]);
            }}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={1}
            direction='horizontal'
          />
        </div>
        <div className='contact-form'>
          <form>
            <ul>
              <li className=''>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className=''>
                <input type='email' name='email' placeholder='Email' required />
              </li>

              <li>
                <label picked-date={message}>
                  <textarea
                    placeholder='Message'
                    name='message'
                    required
                    onChange={handleTextareaChange}
                    value={messageAndDate}
                  ></textarea>
                </label>
              </li>
              <li>
                <input
                  type='submit'
                  className='send-button'
                  value='SEND'
                  autoComplete='off'
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
