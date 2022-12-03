var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var root = ReactDOM.createRoot(document.getElementById("leaderboardContainer"));

var Leaderboard = function (_React$Component) {
    _inherits(Leaderboard, _React$Component);

    function Leaderboard(props) {
        _classCallCheck(this, Leaderboard);

        var _this = _possibleConstructorReturn(this, (Leaderboard.__proto__ || Object.getPrototypeOf(Leaderboard)).call(this, props));

        _this.state = {
            size: 5
        };
        _this.top = {
            1: 'person',
            2: 'person',
            3: 'person',
            4: 'person',
            5: 'person',
            6: 'person',
            7: 'person',
            8: 'person',
            9: 'person',
            10: 'person'
        };
        return _this;
    }

    _createClass(Leaderboard, [{
        key: 'updateLBSize',
        value: function updateLBSize() {
            switch (this.state.size) {
                case 5:
                    this.setState({ size: 10 });
                    break;
                case 10:
                    this.setState({ size: 20 });
                    break;
                case 20:
                    this.setState({ size: 5 });
                    break;
            }

            this.render();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'leaderboard' },
                React.createElement(
                    'a',
                    { href: 'https://adventofcode.com/2022/leaderboard/private/view/1665099' },
                    React.createElement(
                        'span',
                        { className: 'title' },
                        'Advent of Code 2022'
                    )
                ),
                React.createElement(
                    'button',
                    { onClick: this.updateLBSize() },
                    this.state.size
                ),
                React.createElement(
                    'div',
                    { className: 'top' },
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        this.top['1']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        this.top['2']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        this.top['3']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        this.top['4']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        this.top['5']
                    )
                )
            );
        }
    }]);

    return Leaderboard;
}(React.Component);