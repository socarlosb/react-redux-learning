Tutorial review: [Complete React Tutorial (& Redux)](https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1)

[Author's code](https://github.com/iamshaunjp/react-redux-complete-playlist/)

Last modification: `2018/08/23`

## Notes

[React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for Chrome show states and props of a react component.

### Standard React structure

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
  getState = e => {
    console.log(this.state);
  };
  // use setState to update your content state
  getOlder = e => {
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

### Forms

We should use `<form onSubmit={this.handleSubmit}>` to handle the submit click and enter key, instead of the 'onClick' method in the submit button.

also don't forget to prevent the default browser 'refresh' page after submitting:

```js
handleSubmit = e => {
  // prevent the page refresh after user uses enter or click
  e.preventDefault();
  console.log(`form submited by ${this.state.name}`);
};
```

### Container vs UI Components

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

### Conditions

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
addDigital = digital => {
  digital.id = Math.random();
  // create a copy of the present state, plus add the new 'digital' object
  let newDigitals = [...this.state.digitals, digital];
  this.setState({
    digitals: newDigitals
  });
};
```

### css

seams to act on all the page!?

[learn more](https://blog.pusher.com/css-modules-react/)

## react lifecycle

[check this link](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) for react inner methods.
