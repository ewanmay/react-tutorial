import * as React from 'react';

interface FormInputProps {
  postTweet: (message: string) => void
}

interface FormInputState {
  newTweet: string;
}


class FormInput extends React.Component<FormInputProps, FormInputState> {
  constructor() {
    super()
    this.state = {
      newTweet: ''
    }
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    this.props.postTweet(this.state.newTweet);
    this.setState({newTweet: ''});
    event.preventDefault();
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({newTweet: event.target.value});
  }

  render() {
    return (
      <div className="form-input">
        <form onSubmit={event => this.handleSubmit(event)} >
          <input type="text" className="form-control" value={this.state.newTweet} onChange={event => this.handleChange(event)} />
          <button className="btn btn-default" type="submit" value="Submit">
            Post
          </button>
        </form>
      </div>
    )
  }
}

export default FormInput 