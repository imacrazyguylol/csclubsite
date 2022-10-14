const { React, ReactDOM } = require('reactjs');

const root = ReactDOM.createRoot(document.getElementById('themeToggleContainer'));

class ToggleTheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: true,
        };
    }

    render() {
        return(
            <button
                className='themeToggleButton'
                onClick={() => this.state.dark = !this.state.dark}
            ></button>
            //button should have custom svg based on background colors
        );
    }
}

root.render(ToggleTheme);