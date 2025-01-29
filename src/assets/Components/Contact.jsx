import React from 'react';
import './Contact.css';
import msg_icon from './msg-icon.png';
import mail_icon from './mail-icon.png';
import phone_icon from './phone-icon.png';
import location_icon from './location-icon.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    
    alert('Form submitted successfully!');

    
    setResult('Form submitted successfully!');
    event.target.reset();
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="Message icon" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information
          below. Your feedback, questions, and suggestions are important to us as we
          strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Email icon" />contact@landing.page</li>
          <li><img src={phone_icon} alt="Phone icon" />123-456-7890</li>
          <li><img src={location_icon} alt="Location icon" />7 Massachusetts Ave, Cambridge<br />
            MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <div>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" name='phone' placeholder='Enter your mobile number' required />
          </div>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='white btn'>Submit now</button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
