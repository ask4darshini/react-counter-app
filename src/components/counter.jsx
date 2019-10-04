import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontsize: 10,
    fontweight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags !!!!!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //  handleIncrementClick = product => {
  handleIncrementClick = () => {
    //console.log("product id", product);
    this.setState({ count: this.state.count + 1 });
    console.log("Increment button clicked", this);
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt=""></img>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrementClick()}
          style={{ fontsize: 50 }}
          className={this.getBadgeClasses()}
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
