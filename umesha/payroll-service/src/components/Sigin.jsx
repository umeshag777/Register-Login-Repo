import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/Signin.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Sigin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <div className="sigin">
      <div className="sigin-data">
        <form>
          <label>
            <input type="text" placeholder="Username" />
          </label>
          <label className='password-label'>
            <input type={passwordVisible ? 'text' : 'password'}  placeholder="Password" />
            <span className='eye-icon' onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye } />
            </span>
          </label>
          <button>Login</button>
          <div className="links-container">
            <a href="#" className="forgot-password">Forgot Password?</a>
            <a href="#" className="cancel" onClick={() => navigate('/')}>Cancel</a>
          </div>
        </form>
      </div>
        
    </div>
  )
}
