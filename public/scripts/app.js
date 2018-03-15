'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handlePlusOne = _this.handlePlusOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: 'handlePlusOne',
        value: function handlePlusOne() {
            console.log('handlePlusOne');
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            console.log('handleMinusOne');
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            console.log('handleReset');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: '
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlePlusOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('App'));

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
