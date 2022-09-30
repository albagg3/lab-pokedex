// Reto 1 - hacer un fetch a la pokeapi y mostrar el nombre del pokemon en un console.log
// Reto 2 - Hacer un html con un input y una lista y darle estilo
// Reto 3 - Hacer que al puslsar una tecla en el input se vea en un console.log el valor
// Reto 4 - Hacer un array con la información de los 151 primeros pokemon
// en get data tendremos que llamar del 1 al 151
// Reto 5 - Mostrar en la lista en el HTML el nombre y la imagen de los pokemons


//RETO 1 comentado
// const getData = async()=>{
//     const promise = await fetch('https://pokeapi.co/api/v2/pokemon/1')
//     const data = await promise.json();
//     console.log(data.name)
// }
//getData()

//RETO 4
const getId = () => {
    const arrNum = []
    for (let i = 1; i <= 151; i++) {
        arrNum.push(i)
    }
    return arrNum
}
const getPokemon = async () => {
    const numbers = getId()
    const newArr = []
    for (let i = 0; i < numbers.length; i++) {
        element = numbers[i]
        const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${element}`)
        const data = await promise.json();
        // console.log(data)
        newArr.push(data)
    }
    return newArr
}



//como son funciones async tenemos que crear una funcion main que sea async y 
// para poder capturar la informacion de get Pokemon con un await y luego invocar 
// al main para guardar en pokemons la informacion

const main = async () => {



    const pokemons = await getPokemon()
    console.log(pokemons)

    const list = document.querySelector('#list');
    const search = document.querySelector('#search');
   
    const imgPok = pokemons.map((element) => {
        return {
            name: element.name,
            imagen: element.sprites.front_default
        }
    })
    
    
    let text= '';
    for (let i = 0; i < 151; i++) {  

        text += `<li>${imgPok[i].name}<img src="${imgPok[i].imagen}"/></li>`
    }

    list.innerHTML = text;

    const input = document.querySelector('#search')
    input.addEventListener('keyup', () => {

        console.log(input.value)
        const filter = imgPok.filter((element)=>{

            if(element.name.includes(input.value)) return true
        })

        let text = '';
        for (let i = 0; i < filter.length; i++) {  

            text += `<li>${filter[i].name}<img src="${filter[i].imagen}"/></li>`
        }

        list.innerHTML = text
    })

}

main()


//el window e sun objeto que ya te viene cuando abre el navegador 
// se reifere a la ventana en la que está 


//listener a nodos y solo a nodos no a valores
//si ponemos keydown no le da tiempo a capturar al evento y nos lo saca como por un paso por detrás
// tambien se pude usar 'input'






