let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
{
    quote: `"O único homem que nunca comete erros é aquele que nunca faz nada."`,
    person: `Theodore Roosevelt`
},
{
    quote: `"A coragem não é a ausência de medo, mas sim a avaliação de que algo é mais importante que o medo.""`,
    person: `Franklin D. Roosevelt`
},
{
    quote: `"Se você pode sonhar, você pode fazer." `,
    person: `Walt Disney`
},
{
    quote: `"O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta"`,
    person: `Winston Churchill`
},
{
    quote: `"Não espere. O tempo nunca será 'justo'."`,
    person: `Napoleon Hill`
},
{
    quote: `"Tente mover o mundo - o primeiro passo será mover a si mesmo."`,
    person: `Platão`
},
{
    quote: `"Tudo é difícil antes de ser fácil." `,
    person: `Goethe`
},
{
    quote: `"A vida é 10% o que acontece com você e 90% como você reage a isso." `,
    person: `Charles Swindoll`
},
{
    quote: `"Você não precisa ver toda a escada, apenas dê o primeiro passo."`,
    person: `Martin Luther King Jr.`
},
{
    quote: `"Faça o teu melhor na condição que você tem, enquanto você não tem condições melhores para fazer melhor ainda"`,
    person: `Mario Sergio Cortella`
},
{
    quote: `"Você não tem que ser grande para começar, mas você tem que começar para ser grande."`,
    person: `Zig Ziglar`
},
{
    quote: `"Os obstáculos não têm que parar você. Se você encontrar uma parede, não desista. Descubra como escalá-la, passar por ela ou contorná-la."`,
    person: `Michael Jordan`
},
{
    quote: `"Você não é derrotado quando perde. Você é derrotado quando desiste." `,
    person: `Michael Phelps`
},
{
    quote: `"O único lugar onde sucesso vem antes do trabalho é no dicionário."`,
    person: `Vince Lombardi`
},
{
    quote: `"Você tem que esperar coisas de si mesmo antes de poder fazê-las."`,
    person: `Magic Johnson`
},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person


})