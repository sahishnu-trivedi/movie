// document.getElementById('getApi').addEventListener('click', getApi);
document.getElementById('searchForm').addEventListener('submit', function(e){
    e.preventDefault();
    getApi()
})
// document.getElementById('getImgApi').addEventListener('click', getImgApi);
/*
function getApi(){
    var movieId = document.getElementById('movieId').value;
    fetch(`http://www.omdbapi.com/?s=${movieId}&apikey=d6ad7c2c`)
    .then((response) => response.json())
    .then((data) => {
        var output = Mustache.render(template, data);
        document.getElementById('target').innerHTML = output;
        console.log(data);
    })



}*/

async function getApi(){
    var movieId = document.getElementById('movieId').value;

    const result     =  await fetch(`http://www.omdbapi.com/?s=${movieId}&apikey=d6ad7c2c`);
    const data       =  await result.json();

    var template     =  document.getElementById('movie_tmpl').innerHTML;
    var output       =  Mustache.render(template, data);

    console.log(data);

    document.getElementById('target').innerHTML = output;
}





// function getImgApi(){
//     fetch("http://img.omdbapi.com/?i=tt3896198&apikey=d6ad7c2c")
//     .then((response) => response.json())
//     .then((poster) => {
//         console.log(poster);
//     })
// }