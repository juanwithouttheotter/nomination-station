const MovieAPI = {
    async searchMovies(search){
        let res = await fetch(`https://omdbapi.com/?apikey=fb4f4f23&type=movie&s=${search}`).then(res => res.json())
        .catch(err => {console.log(err)});
        return res;
    }
}

export default MovieAPI;