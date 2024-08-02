const fundolupamob = document.querySelector('.config-pesquisamob');
const cliqueluapamob = document.querySelector('#icone-pesquisamob');
const fecharlupamob = document.querySelector('#icone-fecharpesquisaamob');

cliqueluapamob.addEventListener('click', function(){
    fundolupamob.classList.add('ativar-pesquisamob');
})

fecharlupamob.addEventListener('click',function(){
    fundolupamob.classList.remove('ativar-pesquisamob');
});

const fundomenu = document.querySelector('.config-menumob');
const cliquemenu = document.querySelector('#icone-menu');
const fecharmenu = document.querySelector('#closemenu');

cliquemenu.addEventListener('click', function(){
    fundomenu.classList.add('ativarconfig-menumob')
})
fecharmenu.addEventListener('click', function(){
    fundomenu.classList.remove('ativarconfig-menumob');
})
