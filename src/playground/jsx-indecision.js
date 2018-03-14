
// JSX - JavaScript XML

const appRoot = document.getElementById('App');
let flag = 0;

const user = {
    name: 'Chuck',
    age: 30,
    location: 'Sto Dgo'
};

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onSubmitForm = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const emptyArray = () => {
    app.options = [];
    flag = 0;
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
};

const renderApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={emptyArray}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={++flag}>{option}</li>) 
                }
            </ol>

            <form onSubmit={onSubmitForm}>
                <input type="test" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

let templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}}</p>
    </div>

);

renderApp();

