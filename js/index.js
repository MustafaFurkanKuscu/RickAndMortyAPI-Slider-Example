function getFeaturedCharacters() {
    return fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .catch((error) => error);
}


getFeaturedCharacters().then((characters) => rendCharacters(characters.results));


var html = document.getElementById("splide_list");
const rendCharacters = (character) => {
    

    for (let i = 0; i < character.length; i++) {
        
        let color=DetermineColor(character[i].status);
        html.innerHTML += `<li class="splide__slide character-card">
        <img src="${character[i].image}" alt="">
        <div>
            <span class="character-name">${character[i].name}</span>
            <span class="character-status"><i class="fa-solid fa-circle" style="color: ${color};"></i>
                ${character[i].status}-${character[i].species}</span>
        </div>
    </li>`;
    }
    var splide = new Splide('.splide', {
        type: 'loop',
        drag: 'free',
        snap: true,
        perPage: 3,
        width: '60em'

    });
    splide.mount();

};

function DetermineColor(info){
    if(info=="Alive"){
        return "green";
    }
    else if(info=="Dead"){
        return "red";
    }
    else if(info=="unknown"){
        return "gray";
    }

}