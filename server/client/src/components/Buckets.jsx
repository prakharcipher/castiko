import React, { Component } from 'react';
import { BottomNavigation } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Box from './Box';
import Modal from './Modal';

class Buckets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spades: 0,
      hearts: 0,
      clubs: 0,
      diamonds: 0,
      open: false
    };
  }

  handleSpades = spade => {
    this.setState({ spades: spade });
  };

  handleHearts = heart => {
    this.setState({ hearts: heart });
  };

  handleClubs = club => {
    this.setState({ clubs: club });
  };

  handleDiams = diam => {
    this.setState({ diamonds: diam });
  };

  handleComplete() {
    this.setState({ open: true });
  }

  renderModal() {
    if (
      this.state.spades === 13 &&
      this.state.hearts === 13 &&
      this.state.clubs === 13 &&
      this.state.diamonds === 13
    ) {
      return <Modal open={true} />;
    }
  }

  render() {
    return (
      <Paper zDepth={1} style={{ marginTop: '100px', color: 'white' }}>
        <BottomNavigation style={{ backgroundColor: 'powderblue' }}>
          <Box
            targetKey="SPADES"
            symbol="&spades;"
            onBoxHit={this.handleSpades}
          />
          <Box
            targetKey="HEARTS"
            symbol="&hearts;"
            onBoxHit={this.handleHearts}
          />
          <Box targetKey="CLUBS" symbol="&clubs;" onBoxHit={this.handleClubs} />
          <Box
            targetKey="DIAMONDS"
            symbol="&diams;"
            onBoxHit={this.handleDiams}
          />
        </BottomNavigation>
        {this.renderModal()}
      </Paper>
    );
  }
}

export default Buckets;
