'use strict';

// JSX - JavaScript XML


var appRoot = document.getElementById('App');

var user = {
    name: 'Chuck',
    age: 30,
    location: 'Sto Dgo'
};

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location,
        '}'
    )
);

var counter = 0;

var addOne = function addOne() {
    console.log("addOne");
};

var minusOne = function minusOne() {
    console.log("minusOne");
};

var reset = function reset() {
    console.log("reset");
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Counter: ',
        counter
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '+2'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

ReactDOM.render(templateThree, appRoot);
