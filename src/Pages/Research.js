import NavBar from "../Components/NavBar";
import heroImage from "../images/homepage3.jpg"; // Replace with the path to your actual logo image

function Research() {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${heroImage})` }}>
      <NavBar />
      <header className="hero-section">
        <h1>Explore the latest enviromental research</h1>
      </header>
      <div className="research-container">
        <section className="research-section">
          <h2>City/Climate Scale Modelling</h2>
          <p>
            Discretization of the atmosphere: Cells ~1 km in width, ~10-100 m
            thick Simulated: All meteorology, including exchanges of heat etc.
            between urban surfaces and the atmosphere Output: Resulting
            variation of neighbourhood climates across cities hourly-seasonally
          </p>
        </section>
        <section className="research-section">
          <h2>Neighbourhood Scale Modelling</h2>
          <p>
            Improved parameterization for building energy models External heat
            transfer coefficient Sol-Air temperature Influence of urban
            vegetation
          </p>
        </section>
        <section className="research-section">
          <h2>Building Scale Modelling</h2>
          <p>
            Urban micro-climate and multi-physics model at street scale Includes
            contributions of buildings, vegetation, water, and soil to mass and
            energy exchange Facilitates renewable energy deployment in a given
            building
          </p>
        </section>
      </div>
      {/* Additional sections go here */}
    </div>
  );
}

export default Research;
