import React from 'react';
import { ListView } from 'react-native';
import SGListView from 'react-native-sglistview';
import Card from './Card';
import PropTypes from 'prop-types';
const LIST_VIEW = 'listview';

export default class CardListView extends React.Component {
  renderRow(rowData, sectionID, rowID) {
    return (
      <Card deal={rowData} />
    );
  }

  render() {
    return (
      <SGListView
        ref={LIST_VIEW}
        dataSource={this.getDataSource()}
        renderRow={this.renderRow}
        onEndReached={this.props.onEndReached}
      />
    );
  }

  getDataSource() {
    const dataSource = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid });

    const deals = this.props.deals.length > 0;
    return deals ? dataSource.cloneWithRows(this.props.deals) : dataSource;
  }
}

CardListView.propTypes = {
  deals: PropTypes.object.isRequired,
  onEndReached: PropTypes.func.isRequired,
};

