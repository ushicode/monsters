import { Component } from 'react'
import MonsterList from '../monster-list/monster-list.component'
import './card-list.styles.css'

class CardList extends Component{

    render(){
        const { monsters } = this.props
        // console.log(this.props);

        return(
         <div className='card-list'>
        {monsters && monsters.map((monster) => (
           <MonsterList key={monster.id} monster={monster}/>
        ))}
         </div>
        )
    }
}

export default CardList