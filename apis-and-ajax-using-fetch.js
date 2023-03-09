let leia = {};

fetch("https://swapi.dev/api/people/5")
    .then(function (response) {
        return response.json()
    })

    .then(function (res) {
        console.log(res);
        leia = res;
        leia.films.forEach(function (url, index) {
            console.log(index, url);
        })

        const [movie1, movie2, movie3, ...movies] = leia.films;
        console.log(movie3);
    })