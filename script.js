const movies = [{
    movie: `Speed Racer`,
    suggestion: `@bunnysince02`
}, {
    movie: `Stand By Me`,
    suggestion: `@bunnysince02`
}, {
    movie: `Barbie e o Castelo de Diamantes`,
    suggestion: `@bunnysince02`
}, {
    movie: `10 coisas que eu odeio em você`,
    suggestion: `@bunnysince02`
}, {
    movie: `Se Meu Apartamento Falasse`,
    suggestion: `@bunnysince02`
}, {
    movie: `Retrato de Uma Jovem em Chamas`,
    suggestion: `@de_bbatan`
}, {
    movie: `Embriagado de Amor`,
    suggestion: `@de_bbatan`
}, {
    movie: `Paris, Texas`,
    suggestion: `@de_bbatan`
}, {
    movie: `Do the Right Thing`,
    suggestion: `@de_bbatan`
}, {
    movie: `Se Meu Apartamento Falasse`,
    suggestion: `@de_bbatan`
}, {
    movie: `The Goldfinch`,
    suggestion: `@luks.png`
}, {
    movie: `Baby Driver`,
    suggestion: `@luks.png`
}, {
    movie: `Palm Springs`,
    suggestion: `@luks.png`
}, {
    movie: `The Time Traveler's Wife`,
    suggestion: `@luks.png`
}, {
    movie: `Que Horas Ela Volta?`,
    suggestion: `@luks.png`
}, {
    movie: `Shiva Baby`,
    suggestion: `@princess_leia_101`
}, {
    movie: `Game Night`,
    suggestion: `@princess_leia_101`
}, {
    movie: `Napoleon Dynamite`,
    suggestion: `@princess_leia_101`
}, {
    movie: `como enlouquecer seu chefe`,
    suggestion: `@princess_leia_101`
}, {
    movie: `The Lady from Shanghai`,
    suggestion: `@princess_leia_101`
}, {
    movie: `Into The Wild`,
    suggestion: `@vwcasswv`
}, {
    movie: `Coraline`,
    suggestion: `@vwcasswv`
}, {
    movie: `Tempo`,
    suggestion: `@vwcasswv`
}, {
    movie: `Spirit Corcel Indomável`,
    suggestion: `@vwcasswv`
}, {
    movie: `as vantagens de ser invisível`,
    suggestion: `@vwcasswv`
}]


let btn = document.querySelector("#Qbtn");

let movie = document.querySelector(".movie");

let suggestion = document.querySelector(".suggestion");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * movies.length);
    movie.innerHTML = movies[random].movie;
    suggestion.innerHTML = movies[random].suggestion;
})
