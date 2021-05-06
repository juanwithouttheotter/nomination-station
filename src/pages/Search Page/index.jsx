import React, {Component} from 'react';
import API from "../../api/moviesApi";
import SearchBar from "../../components/SearchBar";
import NominatonCard from "../../components/NominationCard";

class Search extends Component {
    state = {
        inputValue: '',
        movies: []
    }

    searchOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
        // check our work, should delete
        console.log(this.state);
    }
    handleFormSearch = async (event) => {
        event.preventDefault();
        console.log(this.state.inputValue);
        const movies = await API.searchMovies(this.state.inputValue);
        this.setState({
            movies: movies
        })
    }

    render(renderedMovies = this.state.movies) {
        return(
            <div>
                <SearchBar 
                inputValue={this.inputValue}
                searchOnChange={this.searchOnChange}
                placeholder="Which movie do you want to nominate?" 
                />

                <div>
                    {renderedMovies.map((movie) => {
                        return(
                            <NominatonCard />

                        )
                    })}
                </div>

            </div>
        )
    }

}

export default Search;