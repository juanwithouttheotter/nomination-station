import React, {Component} from 'react';
import API from "../../api/moviesApi";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import Button from "../../components/Button";

class Search extends Component {
    state = {
        inputValue: '',
        movies: [],
        nominations: {}
    }
    async componentDidMount() {
        const nominations = JSON.parse(localStorage.getItem("nominations"));
        this.setState({nominations})
    }

    searchOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }
    handleFormSearch = async (event) => {
        event.preventDefault();
        let movies = await API.searchMovies(this.state.inputValue);
        this.setState({
            movies: movies.Search
        });

        console.log(this.state.movies);
    }
    handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            this.handleFormSearch(event);
        }
    }
    removeNomie = (e) => {
        const removeId = e.target.id;
        const {nominations} = this.state;
        for (let i= nominations.length -1; i>=0; i--) {
            if(nominations[i] === removeId) nominations.splice(i,1);
        }
        this.setState({nominations});
        localStorage.setItem("nominations", JSON.stringify(nominations));
    }
    addNomie = (e) => {
        const newNomie = JSON.parse(e.target.dataset.obj);
        const {nominations} = this.state;
        nominations.push(newNomie);
        this.setState({nominations});
        localStorage.setItem("nominations", JSON.stringify(nominations));
    }

    render(renderedMovies = this.state.movies) {
        return(
            <div>
                <SearchBar 
                inputValue={this.inputValue}
                searchOnChange={this.searchOnChange}
                onKeyDown={this.handleKeyDown}
                placeholder="Which movie do you want to nominate?" 
                />
                <Button btn="search" btnAction={this.handleFormSearch} name="search"/>
                {/* <div className="nominations">
                    {this.state.nominations.map(nomie => {
                        return(
                        <NominationCard
                            key={nomie.imdbID}
                            id={nomie.imdbID}
                            poster={nomie.Poster}
                            title={nomie.Title}
                            year={nomie.Year}
                            btnType="remove"
                            btnName="Delete"
                        />)
                    })}

                </div> */}

                <div className="search-movies">
                    {renderedMovies.map((movie) => {
                        console.log(movie);
                        return(
                            <MovieCard 
                                key={movie.imdbID}
                                id={movie.imdbID}
                                poster={movie.Poster}
                                title={movie.Title}
                                year={movie.Year}
                                btnType="add"
                                btnName="Nominate"
                                btnAction={this.addNomie}
                                dataObj={JSON.stringify(movie)}
                            />

                        )
                    })}
                </div>

            </div>
        )
    }

}

export default Search;