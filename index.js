class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleReduce = this.handleReduce.bind(this)
  }

  handleAdd () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleReduce () {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render () {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleReduce}>Reduce</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numOfCounter: 1
    }
    this.handleAddCounter = this.handleAddCounter.bind(this)
  }

  handleAddCounter () {
    this.setState({
      numOfCounter: this.state.numOfCounter + 1
    })
    console.log(this.state)
  }

  render () {
    return (
      <div>
        {Array(this.state.numOfCounter)
          .fill()
          .map((_, index) => {
            return <Counter key={index} />
          })}
        <button onClick={this.handleAddCounter}>Add Counter</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
