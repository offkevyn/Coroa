info = document.getElementById('info');

var {width, height} = info.getBoundingClientRect();
info.addEventListener('mousemove', function (e)
{
    info.style.transition = '0s';
    info.style.setProperty('--x-pos', (e.offsetX/width) - 0.8);
    info.style.setProperty('--y-pos', (e.offsetY/width) - 0.8);
});

info.addEventListener('mouseout', function ()
{
    info.style.transition = '0.5s';
    info.style.setProperty('--x-pos', 0);
    info.style.setProperty('--y-pos', 0);
});




