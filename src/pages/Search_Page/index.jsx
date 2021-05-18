import React, { Component } from 'react';
import API from "../../api/moviesApi";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import Button from "../../components/Button";
import "./Search.css";

class Search extends Component {
    state = {
        inputValue: '',
        movies: [],
        nominations: []
    }

    async componentDidMount() {
        const nominations = JSON.parse(localStorage.getItem("nominations"));
        if (nominations) {
            this.setState({ nominations });
        }
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
    }
    handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            this.handleFormSearch(event);
        }
    }
    removeNomie = (e) => {
        const removeId = e.target.id;
        console.log(removeId);
        const { nominations } = this.state;
        for (let i = nominations.length - 1; i >= 0; i--) {
            if (nominations[i].imdbID === removeId) nominations.splice(i, 1);
        }
        this.setState({ nominations });
        localStorage.setItem("nominations", JSON.stringify(nominations));
    }
    addNomie = (e) => {
        const newNomie = JSON.parse(e.target.dataset.obj);
        const { nominations } = this.state;
        nominations.push(newNomie);
        this.setState({ nominations });
        localStorage.setItem("nominations", JSON.stringify(nominations));
    }

    render(renderedMovies = this.state.movies) {
        return (
            <Container display={"flex"} flow={"c-nw"} justifyContent={"c"} alignItems={"c"}>
                <div className="nominations">
                    <h2>Your Nominations</h2>
                    <Container id="nominees" display={"flex"} flow={"r-nw"} justifyContent={"c"} alignItems={"c"}>
                        {
                            this.state.nominations.map(nomie => {
                                return (
                                    <MovieCard
                                        key={nomie.imdbID}
                                        id={nomie.imdbID}
                                        poster={nomie.Poster}
                                        title={nomie.Title}
                                        year={nomie.Year}
                                        btnType="remove"
                                        btnName="Delete"
                                        btnAction={this.removeNomie}
                                    />)
                            })
                        }

                    </Container>
                </div>
                <div id="searchBar">
                    <SearchBar
                        inputValue={this.inputValue}
                        searchOnChange={this.searchOnChange}
                        onKeyDown={this.handleKeyDown}
                        placeholder="Search Moives..."
                    />
                    <Button btn="search" btnAction={this.handleFormSearch} name="search" />
                </div>
                <div>
                    <Container id="search-movies" display={'flex'} flow={'r-w'} justifyContent={'c'} alignItems={'c'}>
                        {renderedMovies.map((movie) => {
                            return (
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
                    </Container>
                </div>

            </Container>
        )
    }

}

export default Search;