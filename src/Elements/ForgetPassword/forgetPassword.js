import React from 'react';


class ForgetPassword extends React.Component {
  render() { 
    return (
      <div className={this.props.buttonClass} onClick={this.props.onClick}>
        {this.props.buttonText}
      </div>
    );
  }
}
export default ForgetPassword;