const api_key = "api_key=14505f2a2450a1c964c0c838699994ac";
const api_url = "https://api.themoviedb.org/3/";

const pop = api_url + "discover/movie?sort_by=popularity.desc&" + api_key;
//const pop = 'https://api.themoviedb.org/3/movie/550?api_key=14505f2a2450a1c964c0c838699994ac';

const imgurl ="https://image.tmdb.org/t/p/w500";
//  const srurl =api_url + "search/movie?"+api_key;
const er =api_url+"discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&"+api_key;

 const srurl ="https://api.themoviedb.org/3/search/movie?api_key=14505f2a2450a1c964c0c838699994ac&query="
 
const main =document.getElementById('list');
const btn =document.getElementById('btn');
const search = document.getElementById('search');


getmovies(pop);


function getmovies(ur) {

    fetch(ur).then(res => res.json()).then(data => {
        showmovie(data.results); 
       
    })
    
}
function showmovie(data){
    main.innerHTML='';
    data.forEach(mov => {
        const {title,overview,poster_path,vote_count,vote_average} =mov;
        const moiveEl=document.createElement("div");
        moiveEl.classList.add("movie")
         moiveEl.innerHTML = `
         <div class="post">
         <img src="${imgurl+poster_path}" alt="${title}">
         
         

            <div class="movie_info">
                <h2>${title}</h2>

            <div class = "rating">
                <span>vote:${vote_count}</span>
                <span class="${getcolor(vote_average)}">${vote_average}</span>
            </div>
            </div>
            <div class="overview">
                ${overview}
            </div>
            </div>
            
            `
            main.appendChild(moiveEl);
        
    });
}

function getcolor(color){
    if(color >= 8){
        return "green";
    }
    else if(color>=5) {
        return "orange";
    }
    else {
        return "red";
    }
}

// btn.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const searchterm = search.value;
//     console.log(search);
//     if(search){
//         //getmovies(srurl+'&query='+searchterm);
//         getmovies(srurl+searchterm);
//     }
//     else{
//         getmovies(api_url)
//     }
    
    

// })
function fun(){
    const searchterm = search.value ;
    // console.log(search);
    if(searchterm!=0){
        //getmovies(srurl+'&query='+searchterm);
        getmovies(srurl+searchterm);
        search.value='';
    }
    else{
        getmovies(er)
    }

}
    

