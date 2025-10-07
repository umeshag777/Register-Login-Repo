import '../styles/Home.scss';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  const theme = "Lets Discuss new theme here";
  console.log(theme);

  return (
    <div className='container'>
      <div className="list-of-menus">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="button-container">
        <button type='submit' onClick={() =>  navigate('/signin')}>SignIn</button>
        <button type='submit' onClick={() => navigate('/signup')}>SignUp</button>
      </div>
    </div>
  )
}
