'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Palette = (function (_React$Component) {
  _inherits(Palette, _React$Component);

  function Palette() {
    _classCallCheck(this, Palette);

    _React$Component.apply(this, arguments);
  }

  // Dummy class, this component is only postCSS.

  Palette.prototype.render = function render() {
    return _react2['default'].createElement('span', null);
  };

  return Palette;
})(_react2['default'].Component);

exports['default'] = Palette;
module.exports = exports['default'];