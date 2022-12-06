var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require(['../config.json']),
    cookie = _require.cookie;

var root = ReactDOM.createRoot(document.getElementById("leaderboardContainer"));

var Leaderboard = function (_React$Component) {
    _inherits(Leaderboard, _React$Component);

    function Leaderboard(props) {
        _classCallCheck(this, Leaderboard);

        var _this = _possibleConstructorReturn(this, (Leaderboard.__proto__ || Object.getPrototypeOf(Leaderboard)).call(this, props));

        _this.state = {
            size: 10
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
        key: 'updateLeaderboard',
        value: function updateLeaderboard() {
            var _this2 = this;

            var url = "https://adventofcode.com/2022/leaderboard/private/view/1665099.json";
            var scores = {};

            var headers = new Headers({
                /* Cookie: "session=53616c7465645f5f619a669156899b5d105a3eb7f3437bc90f7eb8a437137e8fd52b9398ea5d1d20f3ee951484c522716d899c143210c6a6aa76984d9ad76cd8", */
                Cookie: cookie
            });

            var request = new Request(url, {
                method: 'GET',
                headers: headers,
                cache: "default"
            });

            fetch(request).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(data.members)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var member = _step.value;

                        scores[data.members[member].name] = data.members[member].local_score;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var sorted = Object.fromEntries(Object.entries(scores).sort(function (_ref, _ref2) {
                    var _ref4 = _slicedToArray(_ref, 2),
                        a = _ref4[1];

                    var _ref3 = _slicedToArray(_ref2, 2),
                        b = _ref3[1];

                    return a - b;
                }));

                scores = sorted;
                console.log(scores);

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = _this2.top[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var i = _step2.value;

                        _this2.top[i] = scores[Object.keys(scores)[i]];
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }).catch(function (error) {
                console.error('an error occurred', error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // I hate this so much
            this.updateLeaderboard();

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
                    'div',
                    { className: 'top' },
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        React.createElement(
                            'span',
                            { className: 'first' },
                            '1.'
                        ),
                        ' ',
                        this.top['1']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        React.createElement(
                            'span',
                            { className: 'second' },
                            '2.'
                        ),
                        ' ',
                        this.top['2']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        React.createElement(
                            'span',
                            { className: 'third' },
                            '3.'
                        ),
                        ' ',
                        this.top['3']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        '4. ',
                        this.top['4']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        '5. ',
                        this.top['5']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        '6. ',
                        this.top['6']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        '7. ',
                        this.top['7']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        '8. ',
                        this.top['8']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        '9. ',
                        this.top['9']
                    ),
                    React.createElement(
                        'span',
                        { className: 'lbPlace' },
                        '10. ',
                        this.top['10']
                    )
                )
            );
        }
    }]);

    return Leaderboard;
}(React.Component);

root.render(React.createElement(Leaderboard, null));

setInterval(root.render, 3600000);