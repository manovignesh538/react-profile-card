import Header from "./Header";
import Info from "./Info";
import Skills from "./Skills";
import Stats from "./Stats";
import Footer from "./Footer";

function TeamCard() {
  return (
    <div className="card">
      <Header />
      <Info />
      <Skills />
      <Stats />
      <Footer />
    </div>
  );
}

export default TeamCard;
