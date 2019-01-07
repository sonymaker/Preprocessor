import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

var heParent = document.getElementById('root')
heParent.style.width = heParent.style.height = "100%"

ReactDOM.render(
    < App id="preprocessor" />,
    heParent
)
