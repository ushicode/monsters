import { Component } from 'react'
import './search-box.styles.scss'

class SearchBox extends Component{

    render(){
        return(
            <div>
        <input type="search" className='search-box' placeholder={this.props.placeholder} onChange={this.props.onChangeHandler}  />
            </div>
        )
    }
}

export default SearchBox