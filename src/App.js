import './App.css';
import React, {Component} from 'react';
import Ciao from './components/Ciao';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlphabet: true,
            isDirection: true,
            users: [
                {
                    id: 1,
                    fname: 'Elon'
                },
                {
                    id: 2,
                    fname: 'Elen'
                },
                {
                    id: 3,
                    fname: 'Tim'
                },
                {
                    id: 4,
                    fname: 'Bob'
                },
                {
                    id: 5,
                    fname: 'Sasha'
                },
                {
                    id: 6,
                    fname: 'Rob'
                },
                {
                    id: 7,
                    fname: 'Alex'
                },
                {
                    id: 8,
                    fname: 'Rex'
                },
            ]
        }
    }

    sortUsers = () => {
        const {users, isDirection} = this.state;
        const sortUsers = JSON.parse(JSON.stringify(users));
        //const sortUsers = [...users];
        sortUsers.sort((prev, next) => isDirection ? next.id - prev.id : prev.id - next.id);
        this.setState({
            isDirection: !isDirection,
            users: sortUsers
        })
    }
    sortUsersAlpha = () => {
        const {users, isAlphabet} = this.state;
        const sortUsersName = JSON.parse(JSON.stringify(users));
        sortUsersName.sort((a, b) => {
            if (a.fname > b.fname) {
                return isAlphabet ? -1 : 1;
            }
            if (a.fname < b.fname) {
                return isAlphabet ? 1 : -1;
            }
            return 0;
        });
        this.setState({
            isAlphabet: !isAlphabet,
            users: sortUsersName
        })
    }

    render() {
        const {users, isDirection, isAlphabet} = this.state;
        return <>
            <p>
                <button onClick={this.sortUsers}>SORT BY NUMBER {isDirection ? 'straight ' : 'reverse '}</button>
                <button onClick={this.sortUsersAlpha}>SORT BY NAME {isAlphabet ? 'straight ' : 'reverse '}</button>
            </p>
            <div>
                {users.map(({id, fname}) => <Ciao key={id} id={id} name={fname}/>)}
            </div>
        </>;
    }
}

export default App;