const { cookie } = require(['../config.json']);
const root = ReactDOM.createRoot(document.getElementById("leaderboardContainer"));

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 10,
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

    updateLeaderboard() {
        const url = "https://adventofcode.com/2022/leaderboard/private/view/1665099.json";
        let scores = {};

        const headers = new Headers({
            /* Cookie: "session=53616c7465645f5f619a669156899b5d105a3eb7f3437bc90f7eb8a437137e8fd52b9398ea5d1d20f3ee951484c522716d899c143210c6a6aa76984d9ad76cd8", */
            Cookie: cookie,
        });

        const request = new Request(url, {
            method: 'GET',
            headers: headers,
            cache: "default",
        });

        fetch(request)
            .then((response) => response.json())
            .then(data => {
                console.log(data);

                for (let member of Object.keys(data.members)) {
                    scores[data.members[member].name] = data.members[member].local_score;
                }

                let sorted = Object.fromEntries(
                    Object.entries(scores).sort(([, a], [, b]) => a - b)
                );

                scores = sorted;
                console.log(scores);

                for (let i of this.top) {
                    this.top[i] = scores[Object.keys(scores)[i]];
                }
            })
            .catch(error => {
                console.error('an error occurred', error);
            });
    }

    render() { // I hate this so much
        this.updateLeaderboard();

        return (
            <div className="leaderboard">
                <a href="https://adventofcode.com/2022/leaderboard/private/view/1665099"><span className="title">Advent of Code 2022</span></a>

                <div className="top">
                    <span className="lbPlace"><span className="first">1.</span> {this.top['1']}</span>
                    <span className="lbPlace"><span className="second">2.</span> {this.top['2']}</span>
                    <span className="lbPlace"><span className="third">3.</span> {this.top['3']}</span>
                    <span className="lbPlace">4. {this.top['4']}</span>
                    <span className="lbPlace">5. {this.top['5']}</span>
                    <span className="lbPlace">6. {this.top['6']}</span>
                    <span className="lbPlace">7. {this.top['7']}</span>
                    <span className="lbPlace">8. {this.top['8']}</span>
                    <span className="lbPlace">9. {this.top['9']}</span>
                    <span className="lbPlace">10. {this.top['10']}</span>
                </div>
            </div>
        )
    }
}

root.render(<Leaderboard />);

setInterval(root.render, 3600000);