
class Counter extends React.Component {
    constructor(props){
        super(props);

        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    
    handlePlusOne(){
        console.log('handlePlusOne');
    }
    
    handleMinusOne(){
        console.log('handleMinusOne');
    }

    handleReset(){
        console.log('handleReset');
    }

    render(){
        return(
            <div>
                <h1>Count: </h1>
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