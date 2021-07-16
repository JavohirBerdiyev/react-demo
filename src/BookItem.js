import React, { Component } from 'react';
import Button from './Button';

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      view: 0,
      buttonTitle: false,
      total: 0,
    };
  }

  inctrmentVeiw=() => {
    // this.setState({view: this.state.view + 1});
    this.setState((oldState, nextState) => {
      return {
        view: oldState.view + 1
      }
    });
    this.calculateTotal();
    // this.state.view =  this.state.view + 1;
  }

  handleButtonStatus = () => {
    // this.setState({buttonTitle: !this.state.buttonTitle});
    this.setState(prevState => ({
      buttonTitle: !prevState.buttonTitle
    }))
  }

  calculateTotal = () => {
    console.log(this.state);
    this.setState(prevState => ({total: prevState.total + prevState.view}))
  }

  render() {

    // console.log(this.props);
    const { view, buttonTitle } = this.state;
    const {title, author, headleClick} = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <div onClick={this.inctrmentVeiw}>View: <b>{view}</b></div>
        <button onClick={this.handleButtonStatus}>{buttonTitle ? 'Active' : 'Inactive'}</button>
        <Button
          onClick={() => headleClick(author)}
          id='book1'
          disabled={false}
          >Author details</Button>
        {/* <button onClick={() => headleClick(author)}>Author details</button> */}
      </div>
    )
  }
}

export default BookItem;