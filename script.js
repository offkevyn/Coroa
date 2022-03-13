var player_atual, casas_pl_1 = [], casas_pl_2 = [],
    pl = 
    {
        player_1: 1,
        player_2: 2
    },
    sequencia_vitoria = 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ],
    proximo_pl = document.getElementById('proximo_jogar'),
    pl_ganhou = document.getElementById('ganhou');
;

function clique(evt)
{
    element = document.getElementById(evt.target.id);

    casa_clicada = parseInt(evt.target.id.replace(/[^0-9]/g,''));

    console.log(casa_clicada);
    
    if(casas_pl_2.includes(casa_clicada) == false && casas_pl_1.includes(casa_clicada) == false)
    {
        if(player_atual == pl.player_2) //Player 2
        {
            casas_pl_2.push(casa_clicada);
            element.innerHTML = '<span class="casa-text jogador-O ' + fonte + '">O</span>';
            player_atual = pl.player_1;
            if( ganhou(casas_pl_2))
            {
                console.log("Player 2 ganhou");
                pl_ganhou.innerText = 'Player 2 ganhou';
                pl_ganhou.style.visibility = "visible";
            }
            fonte = 'fonte-' + Math.floor((Math.random() * 8) + 1);
            proximo_pl.innerHTML = '<span class="casa-text jogador-X ' + fonte + '">X</span>';
        }
        else //Player 1
        {
            casas_pl_1.push(casa_clicada);
            element.innerHTML = '<span class="casa-text jogador-X ' + fonte + '">X</span>';
            player_atual = pl.player_2;
            if( ganhou(casas_pl_1))
            {
                console.log("Player 1 ganhou");
                pl_ganhou.innerText = 'Player 1 ganhou';
                pl_ganhou.style.visibility = "visible";
            }

            fonte = 'fonte-' + Math.floor((Math.random() * 8) + 1);
            proximo_pl.innerHTML = '<span class="casa-text jogador-O ' + fonte + '">O</span>';
        }
    }
}

function ganhou(casas_verificar)
{
    contem_todos = false;

    aux = sequencia_vitoria.forEach((sequencia, i) => {
            if(contem_todos == false && casas_verificar.includes(sequencia[0]) && casas_verificar.includes(sequencia[1]) && casas_verificar.includes(sequencia[2]))
            {
                contem_todos = true;
                return contem_todos;
            }
    });
    return contem_todos;
}

function reiniciar()
{
    casas_pl_1 = [];
    casas_pl_2 = [];

    player_atual = pl.player_1;
    fonte = 'fonte-' + Math.floor((Math.random() * 8) + 1);
    proximo_pl.innerHTML = '<span class="casa-text jogador-X ' + fonte + '">X</span>';

    casas = document.getElementsByClassName("casa");

    for (var i = 0; i < casas.length; i++) {
        casas[i].innerHTML = '';
    }

}

function main()
{
    casas = document.getElementsByClassName("casa");

    for (var i = 0; i < casas.length; i++) {
        casas[i].addEventListener('click', clique);
    }

    fonte = 'fonte-' + Math.floor((Math.random() * 8) + 1);
    
    proximo_pl.innerHTML = '<span class="casa-text jogador-X ' + fonte + '">X</span>';

}

main();