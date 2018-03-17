import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import Cards from './Cards';
import Buckets from './Buckets';

const target = {
  '0': 'CLUBS',
  '1': 'DIAMONDS',
  '2': 'HEARTS',
  '3': 'SPADES'
};

class Deck extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    const cds = this.shuffle(this.props.cards);
    return (
      <div
        style={{
          height: '720px',
          marginTop: '5px',
          backgroundColor: '#696969'
        }}
      >
        <div style={{ marginLeft: '3%' }}>
          {cds.map((val, index) => {
            return (
              <div key={index} style={{ display: 'inline-block' }}>
                <Cards
                  targetKey={target[val.suit]}
                  rank={val.rank}
                  suit={val.suit}
                />
              </div>
            );
          })}
        </div>
        {cds !== undefined && cds.length > 0 ? <Buckets /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cards: state.cards };
}

export default connect(mapStateToProps, { fetchCards })(Deck);
