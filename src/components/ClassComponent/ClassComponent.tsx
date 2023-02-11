import React from 'react';
import '../styles/StylesClickers.css'

interface IState {
    count: number
}


class ClassCounter extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className={'class_clicker'}>
                <div className="class_clicker_state">
                    <h2>Class.Component</h2>
                    <h2>{this.state.count}</h2>
                </div>

                <div className="button_clickers">
                    <button className={'class_clicker_setState'} onClick={this.increment}>+1</button>
                    <button className={'class_clicker_setState'} onClick={this.decrement}>-1</button>
                </div>
            </div>
        )
    }
}

export default ClassCounter;