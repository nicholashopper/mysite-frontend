import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />        
		<Route path='/contact' component={Contact} />
        <Route path='/blog' component={Blog} /> 
		<Route path='/about' component={About} /> 
		<Route path='/hire' component={Hire} />
		<Route path='*' component={NotFound} /> 
	  	</Route>
	  </Router>
    )
  }
}
const Home = () => <h1>NICHOLAS.WORKS</h1>
const Contact = () => <h1>Contact</h1>
const Blog = () => <h1>Blog</h1>
const About = () => <h1>About</h1>
const Hire = () => <h1>Hire</h1>
const NotFound = () => <h1>404 :)</h1>

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/contact'>Contact</Link>&nbsp;
	<Link to='/blog'>Blog</Link>&nbsp;
	<Link to='/about'>About</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

export default App
