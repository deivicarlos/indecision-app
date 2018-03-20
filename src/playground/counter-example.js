
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        }
        catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('App'));

/* let counter = 0;

const addOne = () => {
    counter++;
    renderCounterApp();
};

const minusOne = () => {
    counter--;
    renderCounterApp();
};

const reset = () => {
    counter = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('App');

const renderCounterApp = () => {

    const templateThree = (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    
    );
    
    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp(); */