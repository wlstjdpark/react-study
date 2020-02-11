import React, { useState } from 'react';

class EventPractice extends React.Component {
  input = React.createRef();
  handleFocus = e => {
    this.input.current.focus();
  };
  state = {
    username: '',
    message: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    alert(this.state.username + ' ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          text="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          text="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
        <input ref={this.input}></input>
      </div>
    );
  }
}

export default EventPractice;
