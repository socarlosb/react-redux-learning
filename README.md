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
    name: 'Carlos'
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
    return (
      <div>
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

---
