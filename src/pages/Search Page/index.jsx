import React, {Component} from 'react';
import API from "../../api/moviesApi";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import Button from "../../components/Button";

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
        let movies = await API.searchMovies(this.state.inputValue);
        this.setState({
            movies: movies.Search
        });

        console.log(this.state.movies);
    }

    render(renderedMovies = this.state.movies) {
        return(
            <div>
                <SearchBar 
                inputValue={this.inputValue}
                searchOnChange={this.searchOnChange}
                placeholder="Which movie do you want to nominate?" 
                />
                <Button btn="search" btnAction={this.handleFormSearch} name="search"/>

                <div>
                    {renderedMovies.map((movie) => {
                        return(
                            <MovieCard 
                                key={movie.imdbID}
                                id={movie.imdbID}
                                poster={movie.Poster}
                                title={movie.Title}
                                year={movie.Year}

                            />

                        )
                    })}
                </div>

            </div>
        )
    }

}

export default Search;