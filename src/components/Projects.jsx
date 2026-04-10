import React from "react";

function Projects() {
  return (
    <section id="projects" className="container mt-5">
      <h2>Projects</h2>

      <div className="row">
        <div className="col-md-4" data-aos="zoom-in">
          <div className="card shadow">
            <img src="/images/project1.jpg" className="card-img-top" alt="project"/>
            <div className="card-body">
              <h5>Portfolio Website</h5>
              <p>React portfolio project</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;