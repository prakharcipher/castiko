import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <a
        href="/api/restart"
        style={{
          display: 'block',
          width: '90px',
          height: '20px',
          padding: '7px',
          textAlign: 'center',
          borderRadius: '5px',
          color: 'black'
        }}
      >
        Restart
      </a>
    ];

    return (
      <div>
        <Dialog
          title="Congratulation!"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={{ textAlign: 'center' }}
          titleStyle={{ textAlign: 'center' }}
        >
          Game Completed.
        </Dialog>
      </div>
    );
  }
}

export default Modal;
