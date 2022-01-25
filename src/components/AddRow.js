// //Reference used https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs
// import React from 'react';

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: "",
//             name: "",
//             items: []
//         }
//     }

//     updateDate(event) {
//         this.setState({
//             date: event.target.value,
//         });
//     }

//     updateName(event) {
//         this.setState({
//             name: event.target.value,
//         });
//     }

//     handleClick() {
//         var items = this.state.items;
//         items.push(this.state.date);
//         items.push(this.state.name);
//         this.setState({
//             items: items,
//             date: "",
//             name: ""
//         });

//     }

//     handleItemChanged(i, event) {
//         var items = this.state.items;
//         items[i] = event.target.value;
//         this.setState({
//             items: items
//         });

//     }

//     handleItemDeleted(i) {
//         var items = this.state.items;
//         items.splice(i, 2);
//         this.setState({
//             items: items
//         });

//     }

//     renderRows() {
//         var context = this;
//         return this.state.items.map(function (o, i) {
//             return (
//                 <tr key={"item-" + i}>
//                     <td>
//                         <input type="date" value={o} onChange={context.handleItemChanged.bind(context, i)} />
//                     </td>
//                     <td>
//                         <input type="text" value={o} onChange={context.handleItemChanged.bind(context, i)} />
//                     </td>
//                     <td>
//                         <button onClick={context.handleItemDeleted.bind(context, i)}>Remove</button>
//                     </td>
//                 </tr>
//             );
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>NCSA Lab Hours</h1>
//                 <table className="">
//                     <thead>
//                         <tr>
//                             <th>Date</th>
//                             <th>Name</th>
//                             <th>Add/Remove Item</th>
//                         </tr>
//                     </thead>
//                     <tbody>{this.renderRows()}</tbody>
//                 </table>
//                 <hr />
//                 <input type="date" value={this.state.date} onChange={this.updateDate.bind(this)} />
//                 <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
//                 <button onClick={this.handleClick.bind(this)}> Add Item </button>
//             </div>
//         );
//     }
// }