const root = ReactDOM.createRoot(document.getElementById("leaderboardContainer"));

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 5,
        }
        this.top = {
            1: 'person',
            2: 'person',
            3: 'person',
            4: 'person',
            5: 'person',
            6: 'person',
            7: 'person',
            8: 'person',
            9: 'person',
            10: 'person',
        }
    }

    updateLBSize() {
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

    render() {
        return(
            <div className="leaderboard">
                <a href="https://adventofcode.com/2022/leaderboard/private/view/1665099"><span className="title">Advent of Code 2022</span></a>
                <button onClick={this.updateLBSize()}>{this.state.size}</button>
                
                <div className="top">
                    <span className="lbPlace">{this.top['1']}</span>
                    <span className="lbPlace">{this.top['2']}</span>
                    <span className="lbPlace">{this.top['3']}</span>
                    <span className="lbPlace">{this.top['4']}</span>
                    <span className="lbPlace">{this.top['5']}</span>
                </div>
            </div>
        )
    }
}
