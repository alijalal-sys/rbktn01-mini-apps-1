class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [
        <Form1 />,
        <Form2 />,
        <Form3 />
      ],
      idx: 0
    }
  };

  handleClick = () => {
    this.setState({
      idx: this.state.idx + 1
    });
  };

  render() {
    return (
      <div>
        {this.state.forms[this.state.idx]}
        <input onClick={this.handleClick} type='submit' name='next'/>
      </div>
    )
  }
}

var Form1 = () => (
  <div>
    <form id='formElem' action="/" method="post">
      Name: <input type="text" /> <br/>
      E-mail: <input type="email" name="email" id="email"/> <br/>
      Password: <input type="password" name="password" id="password"/> <br/>
      <input type="submit" value="send"/>
    </form>
  </div>
)

var Form2 = () => (
  <div>
    <form action="/" method="post">
      Address: <input type="text" name="address" /> <br/>
      Address2: <input type="text" name="address2" /> <br/>
      City: <input type="text" name="city" /> <br/>
      State: <input type="text" name='state'/> <br/>
      Zip-Code: <input type="number" name="zipCode"/> <br/>
      <input type="submit" value="send"/>
    </form>
  </div>
)

var Form3 = () => (
  <div>
    <form action="/" method="post">
      Credit Card: <input type="text" name="creditCard"/> <br/>
      Exp-Date: <input type="date" name="expired" /> <br/>
      CCV: <input type="number" name="ccv" /> <br/>
      Zip-Code: <input type="number" name="zipCode" /> <br/>
      <input type="submit" value="send"/>
    </form>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
