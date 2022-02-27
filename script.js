var player_atual, casas_pl_1, casas_pl_2,
    pl = 
    {
        player_1: 1,
        player_2: 2
    }
;

function clique(evt)
{
    element = document.getElementById(evt.target.id);

    if(player_atual == pl.player_2)
    {
        player_atual = pl.player_1;
        element.style.backgroundColor = "yellow";
    }
    else
    {
        player_atual = pl.player_2;
        element.style.backgroundColor = "red";
    }


}

function main()
{
    casas = document.getElementsByClassName("casa");

    for (var i = 0; i < casas.length; i++) {
        casas[i].addEventListener('click', clique);
    }

}

main();