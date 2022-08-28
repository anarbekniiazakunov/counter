import React from 'react';
class Counter extends React.Component {
    constructor(){
        super()
        this.state = {counter:0}
    }


handlerClickerUp = () => {
    this.setState({counter:this.state.counter +1})
};
handlerClickerDown = () => {
    this.setState({counter:this.state.counter -1})
};
resetClickBtn = () => {{this.setState({counter:0})}}

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handlerClickerUp}>Add one</button>
                <button onClick={this.handlerClickerDown}>Remove one</button>
                <button onClick={this.resetClickBtn}>Reset</button>
            </div>
        )
    }
}
export default Counter;