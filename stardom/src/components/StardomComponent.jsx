import React, { Component } from 'react';
import prostar from '../resources/prostars.json';
import './StardomComponent.css';

export default class StardomComponent extends Component {
    constructor(){
        super();
        this.state ={
            prostarList:[
                prostar[0],prostar[1],prostar[2],prostar[3],prostar[4]
            ],
            noOfStarsList:[
                0,1,2,3,4
            ]
        };
    }

    renderProStars =() =>{
         const starsList=this.state.prostarList;
         const stars=starsList.map(star=>{         
            return  <tr key={star.id}>
                        <td><img src={star.pictureUrl} alt="picture"/></td>
                        <td>{star.name}</td>
                        <td>{star.popularity}</td>
                        <td><button>Delete</button></td>
                    </tr>;
        });
        return stars;
    }

    addProStar= ()=>{
        var randomProStar=Math.floor(Math.random()*prostar.length);
        while(this.state.noOfStarsList.includes(randomProStar))
            randomProStar=Math.floor(Math.random()*prostar.length)
        this.setState({
            noOfStarsList:this.state.noOfStarsList.concat(randomProStar),
            prostarList:this.state.prostarList.concat(prostar[randomProStar])
        });
    }
    render() {
        return (
            <div className='header-container'>
                <h1>ProStars</h1>
                <button onClick={this.addProStar} className='random-prostar'>Get Random Contact</button>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>popularity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProStars()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
