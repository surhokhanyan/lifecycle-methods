import React from "react";

class App extends React.Component{
    state = {
        count: 0,
        text: ""
    }
    constructor() {
        super();
        console.log("Constructor")
    }

    componentDidMount() {
        this.setState({
            text: "So let's start !!!"
        })
        console.log("Component did mount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update")
        if (nextState.count > 5)
            return false
        return true
    }

    componentDidUpdate() {
        let d = new Date();
        let text = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        console.log("updating...", text)
    }

    increment() {
        this.setState(curr => {
            curr.count ++
            return curr
        })
    }

    render() {
        const {count, text} = this.state;

        console.log("render")

        return(
            <div>
                <h1>Let's count!</h1>
                <p>{text}</p>
                <h4>You've clicked {count} times</h4>
                <button onClick={() => this.increment()}>Up</button>
            </div>
        )
    }
}

export default App