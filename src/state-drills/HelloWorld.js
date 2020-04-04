import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world!'
    }

    handleButton = (e) => {
        this.setState({
            who:e.target.name
        })
    }

    render() {
        return (
            <div>
                <p>
                    Hello, {this.state.who}
                </p>
                <button name='world!' onClick={this.handleButton}>
                    World
                </button>
                <button name='friend!' onClick={this.handleButton}>
                    Friend
                </button>
                <button name='React!' onClick={this.handleButton}>
                    React
                </button>
            </div>
        );
    }
}

export default HelloWorld