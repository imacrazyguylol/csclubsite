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
                src: './assets/tempImg.jpg',
                caption: "this is slide 3."
            }
        }
    }

    slideTransitionPrev() {
        let ok = Object.keys(this.slides).length;

        if (this.state.slide === 1) {
            this.setState({ slide: ok });
        } else {
            this.setState({ slide: this.state.slide - 1 });
        }
    }

    slideTransitionNext() {
        let ok = Object.keys(this.slides).length;

        if (this.state.slide === ok) {
            this.setState({ slide: 1 });
        } else {
            this.setState({ slide: this.state.slide + 1 });
        }
    }

    render() {
        return (
            <div className="slides fade">
                <span className="slidePosition">{this.state.slide} / {Object.keys(this.slides).length}</span>
                <img style={{width: '100%'}} src={this.slides[this.state.slide].src} />

                <button className="prev" onClick={() => this.slideTransitionPrev()}>&#10094;</button>
                <button className="next" onClick={() => this.slideTransitionNext()}>&#10095;</button>

                <span className="caption">{this.slides[this.state.slide].caption}</span>
            </div>
        )
    }
}

root.render(<Slideshow />);