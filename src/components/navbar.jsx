const { React, ReactDOM } = require('reactjs');

const root = ReactDOM.createRoot(document.getElementById('wrapper'));

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }  

    render() {
        return (
            <div id="navBar">
                <a href="../../pages/blog/blog.html">
                    <div>
                        <p>Our Blog</p>
                    </div>
                </a>

                <a href="../../pages/member/member.html">
                    <div>
                        <p>Meet our members</p>
                    </div>
                </a>

                <a href="">
                    <div>
                        <p>Placeholder</p>
                    </div>
                </a>

                <a href="">
                    <div>
                        <p>Placeholder</p>
                    </div>
                </a>

                <a href="">
                    <div>
                        <p>Placeholder</p>
                    </div>
                </a>
            </div>
        )
    }
}

root.render(Navbar);