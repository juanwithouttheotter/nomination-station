const MovieAPI = {
    async searchMovies(search){
        let res;
        try{
            res = await fetch(`https://http://omdbapi.com/?apikey=fb4f4f23&type=movie&s=${search}`);
        } catch (err){
            console.log(err);
        }
        const searchResults = await res.json();
        return searchResults;
    }
}