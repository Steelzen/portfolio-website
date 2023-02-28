import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

class ProjectEdit extends React.Component {
  state = {
    datails: [],
    id: "",
    name: "",
    content: "",
    img_src: "",
    site_link: "",
    code_link: "",
  };

  componentDidMount() {
    let id = this.props.params.id;
    this.setState({
      id: id,
    });

    let data;

    axios
      .get("http://localhost:8000/mydata/project/list/" + id)
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
          name: data["name"],
          content: data["content"],
          img_src: data["img_src"],
          site_link: data["site_link"],
          code_link: data["code_link"],
        });
      })
      .catch((err) => {});
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.state.id;

    axios
      .put("http://localhost:8000/mydata/project/update/" + id, {
        name: this.state.name,
        content: this.state.content,
        img_src: this.state.img_src,
        site_link: this.state.site_link,
        code_link: this.state.code_link,
      })
      .then((res) => {
        this.setState({
          name: "",
          content: "",
          img_src: "",
          site_link: "",
          code_link: "",
        });
      })
      .catch((err) => {});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
        <label>
          img_src:
          <input
            type="url"
            name="img_src"
            value={this.state.img_src}
            onChange={this.handleChange}
          />
        </label>
        <label>
          site_link:
          <input
            type="url"
            name="site_link"
            value={this.state.site_link}
            onChange={this.handleChange}
          />
        </label>
        <label>
          code_link:
          <input
            type="url"
            name="code_link"
            value={this.state.code_link}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
    );
  }
}

const withRouter = (ProjectEdit) => (props) => {
  const params = useParams();

  return <ProjectEdit {...props} params={params} />;
};

export default withRouter(ProjectEdit);
