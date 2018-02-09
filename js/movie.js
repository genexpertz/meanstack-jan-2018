
function Movie(name, rating) {
    this.name = name;
    this.rating = rating;
}

function clickme() {

    var mvName = getMovieName();
    var mvRating = getMovieRating();

    var oldMovies = getOldMovies();
    var movies = getMovieArray(mvName, mvRating, oldMovies);
    storeToLocal(movies);
    addToList(mvName, mvRating);
}

function addToList(mvName, mvRating) {
    var list = document.getElementById('mvlist');
    var litem = document.createElement('li');
    litem.setAttribute("class","list-group-item");
    var txtNodeName = document.createTextNode(mvName);
    var txtNodeRating = document.createTextNode("," + mvRating);
    litem.appendChild(txtNodeName);
    litem.appendChild(txtNodeRating);
    list.appendChild(litem);
}

function onInit() {

    var oldMovies = getOldMovies();
    for (var i = 0; i < oldMovies.length; i++) {
        addToList(oldMovies[i].name, oldMovies[i].rating);
    }
}

function getMovieName() {
    var mvName = document.getElementById('mvname');
    return mvName.value;
}

function getMovieRating() {
    var mvRating = document.getElementById('mvrating');
    return mvRating.value;
}

function getOldMovies() {
    var oldMovies = JSON.parse(localStorage.getItem('movies'));
    if (oldMovies == null) {
        oldMovies = new Array();
    }
    return oldMovies;
}

function getMovieArray(mvName, mvRating, oldMovies) {
    var movies = new Array();
    if (oldMovies != null || oldMovies.length > 0) {
        movies = oldMovies;
    }
    var mvObject = new Movie(mvName, mvRating);

    movies.push(mvObject);
    return movies;
}

function storeToLocal(movies) {
    localStorage.setItem("movies", JSON.stringify(movies));
}

window.onload = onInit;/**
 * Created by admin on 09/02/18.
 */
