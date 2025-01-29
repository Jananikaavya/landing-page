import React,{useState,useRef}from 'react'
import './Testimonials.css'
import next_icon from'./next-icon.png'
import back_icon from'./back-icon.png'
import user_1 from'./user-1.png'
import user_2 from'./user-2.png'
import user_3 from'./user-3.png'
import user_4 from'./user-4.png'
const Testimonials = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);  

    const slideForward = () => {
        if (tx > -50) {
            setTx(prevTx => {
                const newTx = prevTx - 25;
                slider.current.style.transform = `translateX(${newTx}%)`;
                return newTx;
            } );
        }
    };

    const slideBackward = () => {
        if (tx < 0) {
            setTx(prevTx => {
                const newTx = prevTx + 25;
                slider.current.style.transform = `translateX(${newTx}%)`;
                return newTx;
            });
        }
    };

   return (
    <div className='testimonials'>
    <img src={next_icon} alt="" className='next-btn 'onClick={slideForward} />
    <img src={back_icon} alt="" className='back-btn ' onClick={slideBackward}/>
    <div className="slider">
      <ul ref={slider} style={{ transition: 'transform 0.5s ease-in-out' }}>
        <li> 
            <div className="slide">
                <div className="user-info">
                    <img src={user_1}alt=""/>
                <div>
                    <h3>William Jackson1</h3>
                    <span>Edusity , USA</span>
                    </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment 
                     to academic excellence have truly exceeded my 
                     expectations.</p>
            </div>
        </li>
        <li> 
            <div className="slide">
                <div className="user-info">
                    <img src={user_2}alt=""/>
                <div>
                    <h3>Emily Williams2</h3>
                    <span>Edusity,USA</span>
                    </div>
                    </div>
                    <p>Choosing to pursue my degree at edusity was one of
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment 
                     to academic excellence have truly exceeded my 
                     expectations.</p>
            </div>
        </li>
        <li> 
            <div className="slide">
                <div className="user-info">
                    <img src={user_3}alt=""/>
                <div>
                    <h3>William Jackson3</h3>
                    <span>Edusity,USA</span>
                    </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment 
                     to academic excellence have truly exceeded my 
                     expectations.</p>
            </div>
        </li>
        <li> 
            <div className="slide">
                <div className="user-info">
                    <img src={user_4}alt=""/>
                <div>
                    <h3>Emily Williams4</h3>
                    <span>Edusity,USA</span>
                    </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment 
                     to academic excellence have truly exceeded my 
                     expectations.</p>
            </div>
        </li>
        </ul>  
    </div>
     </div>
  )
}
export default Testimonials