import Skills from "./Skills";
import Contact from "./Contact";

function ProfileCard() {
  return (
    <div className="card">

      <img
        className="profile-img"
        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250s?id=11"
        alt="profile"
      />

      <h2>Mano Vignesh</h2>
      <h4>Intern at Evernorth</h4>

      <p>
        Passionate about building clean UI and learning React.
      </p>

      <Skills />
      <Contact />

    </div>
  );
}

export default ProfileCard;
