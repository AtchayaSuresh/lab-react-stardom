import React, { Component } from 'react';
import prostar from '../resources/prostars.json';
import './StardomComponent.css';

export default class StardomComponent extends Component {
    constructor(){
        super();
        this.state ={
            prostars:{
                prostar},
            noOfStars:5
        };
    }

    renderProStars =() =>{
         const stars=prostar.map((star,index)=>{         
             if(index<this.state.noOfStars)
            return  <tr key={star.id}>
                        <td><img src={star.pictureUrl} alt="picture"/></td>
                        <td>{star.name}</td>
                        <td>{star.popularity}</td>
                        <td><button>Delete</button></td>
                    </tr>;
        });
        return stars;
    }
    render() {
        return (
            <div className='header-container'>
                <h1>ProStars</h1>
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
