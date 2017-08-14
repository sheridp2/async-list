import React from 'react';
import ListForm from '../list-form';
import { connect } from 'react-redux';
import * as util from '../../lib/util.js';
import * as listActions from '../../action/list-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.listFetch();
  }

  render() {
    return (
      <div className="dashboard">
        <h2> dashboard </h2>
        <ListForm buttonText="create list" onComplete={this.props.listCreate} />

        {this.props.lists.map(list =>
          <div key={list._id}>
            {list.title}
            <button onClick={() => this.props.listDelete(list)}>delete</button>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({ lists: state.lists });
let mapDispatchToProps = dispatch => ({
  listCreate: list => dispatch(listActions.listCreateRequest(list)),
  listDelete: list => dispatch(listActions.listsDeleteRequest(list)),
  listFetch: list => dispatch(listActions.listsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
