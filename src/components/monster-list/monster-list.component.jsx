import {Component} from 'react'
import './monster-list.styles.css'

class MonsterList extends Component {

    // constructor(){
    //     super()
    // }

    render(){
     
        const { name, id } = this.props.monster

        return(
            <ul className='card-container' style={{ color: '#000000' }}>
               <li>
                <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <br />
                <p>{ name }</p>
               </li>
            </ul>
        )
    }
}

export default MonsterList