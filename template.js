const fotr_style = `
margin-top: 100px;
    width: 100%;
    height: 25px;
    background-color: #023B65;
    position: fixed;
    bottom: 0;
    padding: 0;
    margin: 0 auto;

    font-family: 'Delius', cursive;
    padding-left: 10px;
    font-size: 1rem;
    font-weight: 400;
    color: #17B5FC;

    text-shadow: 1px 1px 20px #17B5FC;
    -webkit-text-stroke-width: 0.4px;
    -webkit-text-stroke-color: #17B5FC;
`;

const fotr = document.createElement("footer");
fotr.innerHTML = "by offKevyn lindamente - contato: <span>email</span> - &copy; 2018";
fotr.style.cssText = fotr_style;
document.body.appendChild(fotr);
