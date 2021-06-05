import React, { Component } from 'react';

const WithSearch = WrappedComponent => {
    return class extends Component {

        state = {
            searchTerm : ''
        }

        handleSearch = event => {
            this.setState({searchTerm: event.target.value})
        }

        render(){
            
            return(
                <div>
                    <input type="text" onChange={this.handleSearch} value={this.state.searchTerm} />
                    <WrappedComponent searchTerm={this.state.searchTerm} />
                </div>
            )
        }
    }
}

export default WithSearch;