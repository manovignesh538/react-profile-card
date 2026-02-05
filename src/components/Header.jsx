import StatusBadge from "./StatusBadge";

function Header() {
  return (
    <div className="header">
      <img
        className="profile-img"
        src="https://i.pravatar.cc/150"
        alt="profile"
      />

      <h2>Sarah Johnson</h2>
      <p className="role">UI Developer</p>

      <StatusBadge status="Online" />
    </div>
  );
}

export default Header;
