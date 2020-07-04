//Creating credit card related |
//                             V

var nome_banco = document.getElementById('card-bank');
var imagem = document.getElementById('card-img');
var limite = document.getElementById('card-limit');
var taxa = document.getElementById('card-annual-fee');
var categoria = document.getElementById('card-category');
var visa = document.getElementById('visa-card');
var mastercard = document.getElementById('mastercard-card');
var elo = document.getElementById('elo-card');
var hipercard = document.getElementById('hipercard-card');
var american = document.getElementById('american-card') 
var btn = document.getElementById('button');
var form = document.querySelector('form');

document.body.onload = () => {
     btn.style.backgroundColor = 'grey'
     btn.style.boxShadow = 'none';
     btn.style.pointerEvents = 'none'
}

var imageurl = '';

imagem.onchange = (e) => {
     const reader = new FileReader();
     reader.readAsDataURL(imagem.files[0]);
     reader.onload = () => {
          imageurl = reader.result
     }
     document.getElementById('btnv2').innerHTML = imagem.files[0].name;
}

taxa.onkeyup = () => {
    btn.disabled = false;
    btn.style.backgroundColor = '#6633cc'
    btn.style.boxShadow = '0px 10px 20px 1px #6633cc;';
    btn.style.pointerEvents = 'all';
}

     let flag = '';
     changeValue(visa);
     changeValue(mastercard);
     changeValue(elo);
     changeValue(hipercard);
     changeValue(american);
     
function changeValue(x){
     x.onchange = () => {
          flag = x.value;
     }
}

form.onsubmit = (e) => {
     e.preventDefault();
     //Avoiding the page to reload

     const data = {
          name:nome_banco.value,
          brand:flag,
          category:categoria.value,
          credit_limit:limite.value,
          image:imageurl,
          annual_fee:taxa.value,
     }
     localStorage.setItem('card-data',JSON.stringify(data));

     window.location.href = 'listing.html';
    
}

