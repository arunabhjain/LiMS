import "./stylesheets/AboutComponent.css";
function About() {
  return (
    <div className="about-main">
      <div className="about-background">
        <div className="about-content">
          <h1>Library Manangement System</h1>
          <p>
            It is software that is designed to manage all the functions of a
            library. It helps librarian to maintain the database of new books
            and the books that are borrowed by students along with their due
            dates. It also helps students in finding books and check status of
            issued books.
          </p>
        </div>

        <h2>Designed & Developed By: </h2>
        <div className="about-developed">
          <div className="developer-div">
            <img className="developer-logo" src="arunabh-dp.png" alt="" />
            <h3>Arunabh Jain</h3>
            <h4>19ESKCS046</h4>
          </div>
          <div className="developer-div">
            <img className="developer-logo" src="aryan-dp.png" alt="" />
            <h3>Aryan Sharma</h3>
            <h4>19ESKCS047</h4>
          </div>
          <div className="developer-div">
            <img className="developer-logo" src="anshika-dp.png" alt="" />
            <h3>Anshika Mittal</h3>
            <h4>19ESKCS038</h4>
          </div>
          <div className="developer-div">
            <img className="developer-logo" src="aman-dp.png" alt="" />
            <h3>Aman Jain</h3>
            <h4>19ESKCS032</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
