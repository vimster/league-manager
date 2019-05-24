import React from 'react';
import ReactDOM from 'react-dom';
import withLayout from './withLayout';
import ResultTable from '../components/table';


class TablePage extends React.Component {
  render() {
    return (
      <ResultTable />
    );
  }
}

let Page = withLayout(TablePage);
ReactDOM.render(<Page />, document.querySelector('#table'));
