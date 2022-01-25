import React from 'react';

export default class UpdateRows extends React.Component {
    renderRows() {

    }

    render() {
        return (
            <tr>
                <th>{this.props.dataFromApp.date}</th>
                <th>{this.props.dataFromApp.name}</th>
                <th>{this.props.dataFromApp.time}</th>
            </tr>
        );
    }
}