import React, { Component } from 'react'
import{FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title:"free cocktails",
                info: 'This is the info about the cocktail and there is no other things'
            },
            {
                icon: <FaHiking/>,
                title:"free hiking",
                info: 'This is the info about the hiking  and there is no other things'
            },         {
                icon: <FaShuttleVan/>,
                title:"free shuttlevan",
                info: 'This is the info about the shuttle van and there is no other things'
            },         {
                icon: <FaBeer/>,
                title:"strongest beer",
                info: 'This is the info about the beer and there is no other things'
            },
        ]
    }
    render() {
        return (
        <section className='services'>
             <Title title='services'/>
            <div className='services-center'>
                {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
              
               
       
        )
    }
}
