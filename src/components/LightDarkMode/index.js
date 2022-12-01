// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLight: true,
  }

  onLightMode = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state
    const textMode = isLight ? 'Light Mode' : 'Dark Mode'
    const colorChange = isLight ? 'dark-mode' : 'light-mode'
    const textChange = isLight ? 'white' : 'black'

    return (
      <div className="container">
        <div className={colorChange}>
          <h1 className={textChange}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onLightMode}>
            {textMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
