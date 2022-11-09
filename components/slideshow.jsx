'use strict';

const { React, ReactDOM } = require('reactjs');
const e = React.createElement;
const root = ReactDOM.createRoot(document.getElementById("slideshowContainer"));

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: 1,
        }
        this.slides = {
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
        }
    }

    slideTransitionPrev() {
        let ok = Object.keys(this.slides);

        if (this.state.slide === 1) {
            this.setState({slide: ok});
        } else {
            this.setState({slide: this.state.slide - 1});
        }
    }

    slideTransitionNext() {
        let ok = Object.keys(this.slides);

        if (this.state.slide === ok) {
            this.setState({slide: 1});
        } else {
            this.setState({slide: this.state.slide + 1});
        }
    }

    render() {
        return (
            <div class="slides fade">
                <span class="slidePosition">{this.state.slide} / {Object.keys(this.slides)}</span>
                <img style="width: 100%" src={this.slides[this.state.slide].src} />

                <button class="prev" onClick={() => this.slideTransitionPrev()}>&#10094;</button>
                <button class="next" onClick={() => this.slideTransitionNext()}>&#10095;</button>

                <span class="caption">{this.slides[this.state.slide].caption}</span>
            </div>
        )
    }
}

root.render(e(Slideshow));