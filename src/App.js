// Reference used https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs
// https://www.pluralsight.com/guides/extracting-input-from-a-form-with-reactjs
// https://www.pluralsight.com/guides/how-to-pass-data-between-react-components
import React from 'react';
import reactDom from 'react-dom';
import UpdateRows from './components/UpdateRows';
import "./App.css";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {
                date: props.date,
                name: props.name,
                time: props.time
            }
        }
    }

    handleDateChanged(event) {
        var customer = this.state.customer;
        customer.date = event.target.value;
        this.setState({ customer: customer });
    }

    handleNameChanged(event) {
        var customer = this.state.customer;
        customer.name = event.target.value;
        this.setState({ customer: customer });
    }

    handleTimeChanged(event) {
        var customer = this.state.customer;
        customer.time = event.target.value;
        this.setState({ customer: customer });
    }

    handleButtonClicked() {
        console.log(this.state.customer);
        reactDom.render(<UpdateRows dataFromApp={this.state.customer} />, document.getElementById('table'));
    }

    render() {
        return (
            <div>
                <label>
                    Date:
                <input type="date" id="input" value={this.state.customer.date} onChange={this.handleDateChanged.bind(this)} />
                </label>
                <label>
                    Name:
                <input type="text" id="input" value={this.state.customer.name} onChange={this.handleNameChanged.bind(this)} />
                </label>
                <label>
                    Time:
                    <input type="number" id="input" value={this.state.customer.time} onChange={this.handleTimeChanged.bind(this)} />
                </label>
                <button onClick={this.handleButtonClicked.bind(this)}>
                    Add Entry
                </button>
                <hr />
            </div>
        );
    }
}