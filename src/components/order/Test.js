import React from "react";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(
      (prevState) => ({ selected: !prevState.selected }),
      () => this.props.onOptionChange(this.props.option, this.state.selected)
    );
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.option}>{this.props.option}</label>
        <input
          type="checkbox"
          id={this.props.option}
          name="option name"
          value={this.props.option}
          onChange={this.handleChange}
          checked={this.state.selected}
        />
      </div>
    );
  }
}

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOptions: [] };
    this.onOptionsChange = this.onOptionsChange.bind(this);
  }

  onOptionsChange(option, selected) {
    if (selected) {
      this.setState(
        (prevState) => {
          prevState.selectedOptions.push(option);
          return {
            selectedOptions: prevState.selectedOptions,
          };
        },
        () => this.props.onOptionsChange(this.state.selectedOptions)
      );
    } else {
      this.setState(
        (prevState) => {
          const index = prevState.selectedOptions.indexOf(option);
          if (index > -1) {
            prevState.selectedOptions.splice(index, 1);
          }
          return {
            selectedOptions: prevState.selectedOptions,
          };
        },
        () => this.props.onOptionsChange(this.state.selectedOptions)
      );
    }
  }

  render() {
    return (
      <fieldset>
        <legend>Choose your Option</legend>
        {this.props.options.map((option, index) => (
          <Option option={option} onOptionChange={this.onOptionsChange} />
        ))}
      </fieldset>
    );
  }
}

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOptions: [] };
    this.onOptionsChange = this.onOptionsChange.bind(this);
  }

  onOptionsChange(selectedOptions) {
    this.setState({ selectedOptions: selectedOptions });
  }

  render() {
    return (
      <>
        <MultiSelect
          options={["A", "B", "C", "D"]}
          onOptionsChange={this.onOptionsChange}
        />
        <p>Selected Options: {this.state.selectedOptions + ""}</p>
      </>
    );
  }
}

function Test() {
  return (
    <div>
      <MultipleSelect />
    </div>
  );
}

export default Test;
