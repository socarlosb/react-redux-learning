Tutorial review: [Complete React Tutorial (& Redux)](https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1)

[Author's code](https://github.com/iamshaunjp/react-redux-complete-playlist/)

Last modification: `2018/08/23`

## Notes

[React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for Chrome show states and props of a react component.

## Standard React structure

```js
class App extends React.Component {
	// data
	state = {
		name: 'Carlos',
		age: 36
	};
	// functions/methods
	handleClick(e) {
		console.log(e.target);
	}
	// change the method to an arrow function to access the component this.state
	getState = (e) => {
		console.log(this.state);
	};
	// use setState to update your content state
	getOlder = (e) => {
		const newDate = this.state.age + 1;
		this.setState({
			age: newDate
		});
	};
	// template/DOM structure
	render() {
		// this is not html, so we can't use 'class', use 'className'
		return (
			<div className="app-content">
				<p>My name is {this.state.name}</p>
				<button onClick={this.handleClick}>Click me</button>
				<button onClick={this.getState}>Get State</button>
				<button onClick={this.getOlder}>Age me</button>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('#app'));
```

## Forms

We should use `<form onSubmit={this.handleSubmit}>` to handle the submit click and enter key, instead of the 'onClick' method in the submit button.

also don't forget to prevent the default browser 'refresh' page after submitting:

```js
handleSubmit = (e) => {
	// prevent the page refresh after user uses enter or click
	e.preventDefault();
	console.log(`form submited by ${this.state.name}`);
};
```

## Container vs UI Components

Container Components (aka class based)

- contain state
- contain lifecycle hooks
- not concerned with ui
- use classes to create

UI Components (aka stateless)

- Don't contain state
- Receive data from props
- only concerned with UI
- use function to create

So... you can create UI components that use Container components to get data!
_So this is like a website at a macro view, you have the 'server component' and the 'client component'... fun idea!_

## Conditions

standard:

```js
if (age < 20) {
	return <div>{age}</div>;
} else {
	return null;
}
```

itinerary operator:

`condition ? (if true) : (if false)`

```js
age < 20 ? <div>{age}</div> : null;
```

---

spread operator (let's you create a copy of an array, helps to update a state)

```js
addDigital = (digital) => {
	digital.id = Math.random();
	// create a copy of the present state, plus add the new 'digital' object
	let newDigitals = [...this.state.digitals, digital];
	this.setState({
		digitals: newDigitals
	});
};
```

## css

seams to act on all the page!?

[learn more](https://blog.pusher.com/css-modules-react/)

## react lifecycle

[check this link](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) for react inner methods.

## app example

Check folder `/do-me`!

---

## React Router

Basically it's a middle man between the client and the server, it intercept the requests to the server and update the components lists and states accordantly.

App example folder `/poketimes`

Just need to import `BrowserRouter` from the `react-router-dom` module and put all your stuff in there!
Use `Route` to create a link to a specific component, very _ExpressJS_ look alike!

```js
<BrowserRouter>
	<div className="App">
		<Navbar />
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
	</div>
</BrowserRouter>
```

> Link vs NavLink

Use `Link` instead of `<a>` to call components without refreshing the page!
`NavLink` does the same that `Link` does and adds an **active** class to the selected link

**Note: You will still see `<a>` in the DOM!**

## HOC (Higher order component)

It's like component inception! [Review](https://www.youtube.com/watch?v=hKvV0euP3mY&index=28&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG) or search for more!

## Higher Order Component

Import your HOC component and encapsulate the new component, treat the HOC like a function, passing a component as an argument.

```js
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
	console.log(props); // we can access this now with 'withRouter'
	return (
		<nav className="nav-wrapper red darken-3">
			<NavLink to="/about">About</NavLink>
		</nav>
	);
};

export default withRouter(Navbar);
```

Also check `hoc/Rainbow.js` that is being used in the `/About` component, giving it "super powers"!

## Adding remote data

Example with _Axios_:

1. install the lib with `npm install x`
2. to use a lib the component must be a class based component

> _Reminder: class component syntax_

```js
import React, { Component } from 'react';

class Home extends Component {
	render() {
		// your component
	}
}

export default Home;
```

3.

```js
import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	componentDidMount() {
		axios.get('url').then((res) => {
			console.log(res);
		});
	}
	render() {
		// your component
	}
}

export default Home;
```

## Route Parameters

To grab the href params use:

```js
// http://mysite/321
componentDidMount() {
  let id = this.props.match.params.post_id;
  this.setState({
      id
    });
}
// returns: 321
```

## Switch

For a better matching control of our url link we encapsulate our `<Links>` into a `Switch`, get ut by `import { Switch } from 'react-router-dom';`

## Images

Just import them as normal js modules `import Sample from '../sample.png';`

## Redux 👀

It's a global state(aka Central State) in a js object!

> Workflow

Component -> Action of change (optional: payload) -> Reducer (it updates the Central State)

![redux diagram, by TheNetNinja](./redux_diagram.png)
_Image credits by [The Net Ninja](https://www.youtube.com/thenetninja)_

> Examples in [codepen](https://codepen.io/socarlosb/pen/rZmzOE?editors=0011)

_Codepen redux code in [codepen_redux_code.js](./codepen_redux_code.js)_

To better organize our dispatch actions you should separate your actions (check `./src/actions/postActions.js`).

---

Next a React, Redux & Firebase [App](https://www.youtube.com/watch?v=Oi4v5uxTY5o)
