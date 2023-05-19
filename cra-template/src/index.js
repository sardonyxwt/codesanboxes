import {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import Counter from 'codesandbox-ci-test'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  rootElement,
)
