import React              from 'react'
import ReactDOM           from 'react-dom'
// import Header             from './Header.jsx'
// import Footer             from './Footer.jsx'
// import SearchContainer    from './SearchContainer.jsx'

export default class App extends React.Component{


    render(){
        return(
          <container>
              <div>
                <h1>Scripty</h1>
              </div>
          </container>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#container'))
