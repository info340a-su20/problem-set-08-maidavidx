import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators} />
      </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    let headerNames = ['Name', 'State', 'Phone', 'Twitter'];
    let senatorRows = this.props.senators.map((senator) => 
      <SenatorRow key={senator.id} senator={senator}/>
    );
    return (
      <table className="table table-bordered">
        <TableHeader cols={headerNames}/>
        <tbody>{senatorRows}</tbody>
      </table>
    );
  }
}

export class TableHeader extends Component {
  render () {
    let columnNames = this.props.cols.map((columnName) => 
    <th key={columnName}>{columnName}</th>
    );
    return (
      <thead>
        <tr>{columnNames}</tr>
      </thead>
    );
  }
}

export class SenatorRow extends Component {
  render() {
    let senatorInfo = this.props.senator;
    return (
      <tr>
        <td key={senatorInfo.name}>{senatorInfo.name}</td>
        <td key={senatorInfo.party.substring(0,1) + " - " + senatorInfo.state}>{senatorInfo.party.substring(0,1)+" - "+senatorInfo.state}</td>
        <td key={senatorInfo.phone}><a href={"tel:" + senatorInfo.phone}>{senatorInfo.phone}</a></td>
        <td key={senatorInfo.twitter}><a href={"https://twitter.com/" + senatorInfo.twitter}>{"@" + senatorInfo.twitter}</a></td>
      </tr>
    );
  }
}