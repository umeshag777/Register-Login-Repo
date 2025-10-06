import { useState } from 'react';
import '../styles/Signup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div className="signup">
      <div className="signup-data">
        <form>
          <label>
            <input type="text" placeholder="Username" />
          </label>
          <label>
            <input type="email" placeholder="Email" />
          </label>
          <label>
            <input type="tel" placeholder="Phone" />
          </label>
          <label>
            <input type="text" placeholder="Address" />
          </label>
          <label className="password-label">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </label>
          <label className="terms-label">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsChange}
              required
            />
            <h6>
              I agree to the <a href="#">terms and conditions</a>
            </h6>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
