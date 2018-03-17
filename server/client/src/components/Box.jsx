import React, { Component } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleDrop = e => {
    e.sourceElem.style.visibility = 'hidden';
    const num = this.state.count + 1;
    this.setState({ count: num });
    this.props.onBoxHit(this.state.count);
  };

  render() {
    return (
      <DragDropContainer dragHandleClassName="grab_me">
        <DropTarget
          onHit={this.handleDrop}
          targetKey={this.props.targetKey}
          dropData={{ rank: this.props.rank }}
        >
          <div
            style={{
              width: '90px',
              height: '50px',
              backgroundColor: '#374049',
              marginLeft: '80px',
              textAlign: 'center',
              marginTop: '3px'
            }}
          >
            <span style={{ display: 'block' }}>{this.props.symbol}</span>
            {this.props.targetKey}
          </div>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

export default Box;
