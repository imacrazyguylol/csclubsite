var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const { React, ReactDOM } = require('react');
// const root = ReactDOM.createRoot(document.getElementById("slideshowContainer"));

var Slideshow = function (_React$Component) {
    _inherits(Slideshow, _React$Component);

    function Slideshow(props) {
        _classCallCheck(this, Slideshow);

        var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

        _this.state = {
            slide: 1
        };
        _this.slides = {
            1: {
                src: './assets/coding.jpeg',
                caption: "this is slide 1."
            },
            2: {
                src: './assets/coding2.jpeg',
                caption: "this is slide 2."
            },
            3: {
                src: './assets/templimg.jpg',
                caption: "this is slide 3."
            }
        };
        return _this;
    }

    _createClass(Slideshow, [{
        key: 'slideTransitionPrev',
        value: function slideTransitionPrev() {
            var ok = Object.keys(this.slides);

            if (this.state.slide === 1) {
                this.setState({ slide: ok });
            } else {
                this.setState({ slide: this.state.slide - 1 });
            }
        }
    }, {
        key: 'slideTransitionNext',
        value: function slideTransitionNext() {
            var ok = Object.keys(this.slides);

            if (this.state.slide === ok) {
                this.setState({ slide: 1 });
            } else {
                this.setState({ slide: this.state.slide + 1 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { 'class': 'slides fade' },
                React.createElement(
                    'span',
                    { 'class': 'slidePosition' },
                    this.state.slide,
                    ' / ',
                    Object.keys(this.slides)
                ),
                React.createElement('img', { style: 'width: 100%', src: this.slides[this.state.slide].src }),
                React.createElement(
                    'button',
                    { 'class': 'prev', onClick: function onClick() {
                            return _this2.slideTransitionPrev();
                        } },
                    '\u276E'
                ),
                React.createElement(
                    'button',
                    { 'class': 'next', onClick: function onClick() {
                            return _this2.slideTransitionNext();
                        } },
                    '\u276F'
                ),
                React.createElement(
                    'span',
                    { 'class': 'caption' },
                    this.slides[this.state.slide].caption
                )
            );
        }
    }]);

    return Slideshow;
}(React.Component);

root.render(React.createElement(Slideshow, null));