const form = document.querySelector('#search-form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword},
    };
    const res = axios.get('https://api.tvmaze.com/search/shows',config);
    console.log(res.data);
});