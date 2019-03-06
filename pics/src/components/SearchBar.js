import React from 'react';

class SearchBar extends React.Component {
    state = { term: ""};
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    //bind a function
    // this.onFormSubmit = this.onFormSubmit.bind(this)

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            //onClick;onChange;onSubmit
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                            onClick={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;