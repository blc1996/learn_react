import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDIsplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: ""};

//componentDidNount: a place to do some initialization, don't do it in constructor
    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //anytime we call set state, it cause rerender
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({ errorMessage: err.message});
            }
        );
    }
//componentDidUpdate: update some data (called when states change)
//componentWillUnmount: do clean up stuff

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }

        if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDisplay lat={this.state.lat} />
            );
        }

        return (
            <Spinner message="Please accept location request!"/>
        );
    }

    render() {
        return (
            <div className="border">
                {this.renderContent()}
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('#root'))
