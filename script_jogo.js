var player_atual, casas_pl_1 = [], casas_pl_2 = [], num_jogadas = 0,
    pl = 
    {
        player_1: 1,
        player_2: 2,
        player_2_mecha_senku: 3
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
    pl_ganhou = document.getElementById('ganhou')
;

const urlParams = new URLSearchParams(window.location.search), param_modo_jogo = urlParams.get('modo');

function jogada_mecha_senku()
{
    //escolhendo a casa
    if(num_jogadas === 1)
    {
        var casa_escolhida;
        //casas dos cantos
        if(casas_pl_1.includes(5))
        {
            var op_casa = [1, 3, 7, 9];
            var aux = op_casa[Math.floor((Math.random() * op_casa.length))];
            casa_escolhida = document.getElementById('casa-'+aux);
        }
        else
        {
            casa_escolhida = document.getElementById('casa-5');
        }
    }

    //jogando
    if(casa_escolhida != null)
    {
        casas_pl_2.push(casa_clicada);
        casa_escolhida.innerHTML = '<span class="casa-text jogador-O ' + fonte + '">O</span>';
        player_atual = pl.player_1;
        if(ganhou(casas_pl_2))
        {
            console.log("Player 2 ganhou");
            pl_ganhou.innerText = 'Player 2 ganhou';
            pl_ganhou.style.visibility = "visible";
        }
        fonte = 'fonte-' + Math.floor((Math.random() * 8) + 1);
        proximo_pl.innerHTML = '<span class="casa-text jogador-X ' + fonte + '">X</span>';
    }
    else
    {
        alert("Eitaa, você encontrou um erro, informe detalhadamente ao criador (offKevyn)!!");
    }
}

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
        else if(player_atual == pl.player_1 || player_atual == null)//Player 1
        {
            casas_pl_1.push(casa_clicada);
            element.innerHTML = '<span class="casa-text jogador-X ' + fonte + '">X</span>';
            
            player_atual = param_modo_jogo == 1 ? pl.player_2 : pl.player_2_mecha_senku;
            
            if( ganhou(casas_pl_1))
            {
                console.log("Player 1 ganhou");
                pl_ganhou.innerText = 'Player 1 ganhou';
                pl_ganhou.style.visibility = "visible";
            }

            fonte = 'fonte-' + Math.floor((Math.random() * 8) + 1);
            proximo_pl.innerHTML = '<span class="casa-text jogador-O ' + fonte + '">O</span>';
        }
        num_jogadas++;

        if(player_atual == pl.player_2_mecha_senku)
        {
            jogada_mecha_senku();
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

    // pl_ganhou.style.width="240px";
    // pl_ganhou.style.height="60px";
    return contem_todos;

}

function reiniciar()
{
    pl_ganhou.style.visibility = "hidden";
    
    casas_pl_1 = [];
    casas_pl_2 = [];
    num_jogadas++;

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