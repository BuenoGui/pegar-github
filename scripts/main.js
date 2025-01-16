$(document).ready(function() {

    const endpoint = ('https://api.github.com/users/BuenoGui');

    const nome = document.querySelector('#nome');
    const usuario = document.querySelector('#usuario');
    const icone = document.querySelector('#icone');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const github = document.querySelector('#github');

    fetch(endpoint).then(function(answers) {
        return answers.json();
    }).then (function(json) {
        nome.innerText = json.name;
        usuario.innerText = json.login;
        icone.src = json.avatar_url;
        seguindo.innerText = json.followeing;
        seguidores.innerText = json.followers;
        repositorios.innerText = json.public_repos;
        github.href = json.html_url;
    }).finally (function() {
        console.log("tudo feito");
    })
    

})