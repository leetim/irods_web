import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cur_dir: props.cur_dir,
      dirs: ["/"],
      loopActive: false,
      shuffleActive: false,
    }
    this.update_state = this.update_state.bind(this)
  }

  update_state(el){
    var Self = this
    axios.post('http://example.ru/', {"dir": el.target.attributes["tag"].value}).then(
      res => {
        Self.setState({dirs: res.data.dirs, cur_dir: res.data.cur_dir})
      }
    )
  }

  render(){
    console.log("in_render")
    const Self = this
    return (
      <div className="container">
        <h1>start</h1>
        <div className="row">
          <div className="bs-docs-sidebar col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul className="nav nav-stacked bs-docs-sidenav affix-top">
              {this.state.dirs.map(post =>
                <li key={post}><a onClick={Self.update_state} tag={Self.state.cur_dir + "/" + post}>{post}</a></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App cur_dir="/" />,
  document.getElementById('root')
);
