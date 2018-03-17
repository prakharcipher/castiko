import React, { Component } from 'react';
import Background from './wall.jpg';

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '720px'
        }}
      >
        <div>
          <a
            href="/auth/google"
            style={{
              display: 'block',
              width: '115px',
              height: '25px',
              background: '#c5ccd3',
              padding: '10px',
              textAlign: 'center',
              borderRadius: '5px',
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none',
              margin: 'auto'
            }}
          >
            Login To Play
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
