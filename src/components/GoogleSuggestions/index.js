// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  render() {
    return (
      <div className="app-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="googleName"
        />
        <div className="searchInput-container">
          <div>
            <input className type="search" />
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
