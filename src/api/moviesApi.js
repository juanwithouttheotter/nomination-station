const MovieAPI = {
        async searchMovies(search) {
                const res = await fetch(`https://omdbapi.com/?apikey=fb4f4f23&type=movie&s=${search}`)
                        .then((response) => response.json())
                        .catch((err) => {
                                alert(err);
                        });
                return res;
        },
};

export default MovieAPI;
