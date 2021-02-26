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
            ],
            sortedNameWise:false
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

    sortByName =() =>{
       var mapStars= this.state.prostarList.sort((star1,star2)=>{
           var name1=star1.name.toLowerCase(),name2=star2.name.toLowerCase();
           if(name1>name2)
            return 1;
           else if(name1<name2)
            return -1;
           return 0;
       });
       this.setState({
           sortedNameWise:true
       });
       return mapStars;
    }
    render() {
        return (
            <div className='header-container'>
                <h1>ProStars</h1>
                <button onClick={this.addProStar}>Get Random Contact</button>
                <button onClick={this.sortByName} className='black-button'>Sort By Name</button>
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
