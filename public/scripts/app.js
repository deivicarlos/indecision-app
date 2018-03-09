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

ReactDOM.render(template, appRoot);
"use strict";

exports.__esModule = true;

var _babelPresetFlow = require("babel-preset-flow");

var _babelPresetFlow2 = _interopRequireDefault(_babelPresetFlow);

var _babelPluginTransformReactJsx = require("babel-plugin-transform-react-jsx");

var _babelPluginTransformReactJsx2 = _interopRequireDefault(_babelPluginTransformReactJsx);

var _babelPluginSyntaxJsx = require("babel-plugin-syntax-jsx");

var _babelPluginSyntaxJsx2 = _interopRequireDefault(_babelPluginSyntaxJsx);

var _babelPluginTransformReactDisplayName = require("babel-plugin-transform-react-display-name");

var _babelPluginTransformReactDisplayName2 = _interopRequireDefault(_babelPluginTransformReactDisplayName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  presets: [_babelPresetFlow2.default],
  plugins: [_babelPluginTransformReactJsx2.default, _babelPluginSyntaxJsx2.default, _babelPluginTransformReactDisplayName2.default],
  env: {
    development: {
      plugins: []
    }
  }
};
module.exports = exports["default"];
