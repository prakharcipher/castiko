import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <a
            href="/api/logout"
            style={{
              display: 'block',
              width: '115px',
              height: '25px',
              background: '#c5ccd3',
              padding: '10px',
              textAlign: 'center',
              borderRadius: '5px',
              color: 'black',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Logout
          </a>
        );
    }
  }

  render() {
    return <AppBar title="Card-Game" iconElementRight={this.renderContent()} />;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
