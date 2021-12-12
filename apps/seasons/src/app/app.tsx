import { Error, Season, Spinner } from './components';

import React from 'react';

export interface AppState {
  lat: number | null;
  errorMessage: string;
}

class App extends React.Component<any, AppState> {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => this.setState({ lat: coords.latitude }),
      ({ message }) => this.setState({ errorMessage: message })
    );
  }

  render() {
    return (
      <main>
        {!this.state.lat && !this.state.errorMessage && (
          <Spinner message="Getting Location" />
        )}
        {this.state.lat && <Season lat={this.state.lat || 0} month={1} />}
        {this.state.errorMessage && <Error message={this.state.errorMessage} />}
      </main>
    );
  }
}

export default App;
