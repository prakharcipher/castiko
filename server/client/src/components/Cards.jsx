import React, { Component } from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
import { Hand } from 'react-deck-o-cards';

class Cards extends Component {
  render() {
    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        returnToBase={true}
        customDragElement={this.props.customDragElement}
        onDragStart={() => console.log('start')}
        onDrag={() => console.log('dragging')}
        onDragEnd={() => console.log('end')}
        onDrop={e => console.log(e)}
      >
        <Hand
          cards={[{ rank: this.props.rank, suit: this.props.suit }]}
          hidden={false}
          style={{ width: '120px', height: '100px' }}
        />
      </DragDropContainer>
    );
  }
}

export default Cards;
