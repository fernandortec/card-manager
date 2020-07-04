async function LoadCards(){
    let cards = await fetch('./cards.json');

    cards = await cards.json();

    console.log(cards)

    const data = JSON.parse(localStorage.getItem('card-data'));
    
    cards.push(data);
    
    var i = 0;

    cards.map(card => {
        i++
        var newdiv = document.createElement('div');
        var header = document.createElement('p');
        var headertext = document.createTextNode(`${i}º Cartão`);
        var middletext = document.createElement('h4');
        var body_1 = document.createTextNode(`Cartão Nº ${i}, do banco ${card.name}, da marca ${card.brand}`);
        var body_2 = document.createTextNode(`Categoria: ${card.category}, com um limite de crédito de: ${card.credit_limit},00  e uma taxa anual de: ${card.annual_fee}%`);
        header.appendChild(headertext);
        newdiv.appendChild(header);
        var skip = document.createElement('br');
        var baseimage = document.createElement('img');
        baseimage.src = card.image;
        newdiv.appendChild(skip);
        newdiv.appendChild(body_1);
        newdiv.appendChild(skip);
        middletext.appendChild(body_2);
        newdiv.appendChild(middletext);
        newdiv.appendChild(baseimage);
        document.getElementById('content').appendChild(newdiv);
    })
}

LoadCards();