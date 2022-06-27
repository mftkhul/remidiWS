const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'feba71fd4bmshca685748180bedfp154ff2jsn9a321f46c385',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => {
        const list = response.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}">
                        <h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.catch(err => console.error(err));