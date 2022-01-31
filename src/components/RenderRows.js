import React from 'react';
export default class RenderRows extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.customer.date}</td>
                <td>{this.props.dataFromApp.name}</td>
                <td>{this.props.dataFromApp.time}</td>
            </tr>
        );
    }
}