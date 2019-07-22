import React from "react";
import axios from "axios";

class ProjectList extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9090/api/projects")
      .then(projects => {
        this.setState({
          projects: projects.data
        });
        console.log(this.state.projects);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.projects.map(project => (
            <li>{project.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
