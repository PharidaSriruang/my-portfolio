import '../assets/styles/Main.scss';
import profileImg from '../assets/images/profile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" />
        </div>
        <div className="content">

          <h1>Hi I'm Pharida</h1>
          <p>Software Developer</p>

          
        </div>
      </div>
    </div>
  );
}

export default Main;