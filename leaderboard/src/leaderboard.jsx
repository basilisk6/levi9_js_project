import React from 'react';
import './style.css';

export class Leaderboard extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            scores:null
            //scores:[{Nickname:"Sheldon Cooper", Points: 320}, 
                //    {Nickname:"Penny", Points:20}]
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/scores")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({scores:data});
        });
    }

    render(){
        if (this.state.scores === null){
            return <h1> Preparing leaderboards... </h1>
        } else {
            const leaderboard = this.state.scores.map(player=>{
                return <div id='leaderboard'>
                            <span className='text'>{player.nickname}</span><span className='text'>{player.points}</span>
                        </div>
            });
            return (<div>
                        <h1>Leaderboard</h1>
                        <div>{leaderboard}</div>
                    </div>)
        }
    }
}