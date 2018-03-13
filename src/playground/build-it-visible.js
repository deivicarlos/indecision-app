
const appRoot = document.getElementById('App');
let flag = true;


const onShowDetails = () => {
    
    flag = !flag;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{ flag  ? 'Show details' : 'Hide details'}</button>
            {!flag ? <p>Here are some details</p> : ''}
        </div>
    );

    ReactDOM.render(template, appRoot);
};



render();
