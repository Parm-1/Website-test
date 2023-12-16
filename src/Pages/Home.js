import NavBar from "../Components/NavBar";
import heroImage from "../images/homepage3.jpg"; // Replace with the path to your actual logo image

function Home() {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${heroImage})` }}>
      <NavBar />
      <header className="hero-section">
        <h1>Welcome to the Local Enviromental Research Repository</h1>
      </header>

      {/* Additional sections go here */}
    </div>
  );
}

export default Home;
