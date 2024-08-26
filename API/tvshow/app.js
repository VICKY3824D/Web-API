const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) =>{
    e.preventDefault(); //preventing refresh or default actions

    //deleting tvshow image
    document.querySelectorAll('img').forEach((img) => img.remove());

    //get query value from input text
    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword},
    };
    const res = await axios.get('https://api.tvmaze.com/search/shows',config);
    getImages(res.data);
    form.elements.query.value = '';
});

const getImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            //add img source from image medium 
            img.src = result.show.image.medium; 
            document.body.append(img);
        }
    }
};