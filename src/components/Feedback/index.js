// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  onClickButton = () => {
    this.setState({isTrue: true})
  }

  selectFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-card">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickButton}
              >
                <img
                  src={each.imageUrl}
                  className="emoji-images"
                  alt={each.name}
                />
              </button>
              <br />
              <span className="para">{each.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedbackOpen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="result-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
        <h1 className="head">Thank You!</h1>
        <p className="result-para">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isTrue} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          {isTrue ? this.feedbackOpen() : this.selectFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
