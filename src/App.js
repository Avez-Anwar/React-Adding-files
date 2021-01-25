import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.text.length === 0) {
      return;
    }
    const newItems = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((state) => ({
      items: state.items.concat(newItems),
      text: ""
    }));
  }
  render() {
    return (
      <div>
        <Todo items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.text}
          />
          <button>#Add</button>
        </form>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <ol>
        {this.props.items.map(function (item) {
          return <li>{item.text}</li>;
        })}
      </ol>
    );
  }
}

export default App;
