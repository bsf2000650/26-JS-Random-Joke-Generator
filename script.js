{/* <div id="joke" class="joke">Awesome Joke is loading...</div>
        <div id="jokeBtn" class="btn">Next JOKE</div> */}

// PROMISES 

// 2 condtion => success => fail

// fetch()('https://restcountries.eu/rest/v2/name/nepal');

// milega => sahi hai
// nai milega => internet error. server error


// fullfilled
// reject

// In 90% cases promise is consumed or 10% created

// fetch()
// fullfilled
// reject
// ongoing

// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn  = document.querySelector('#jokeBtn');

// const generateJokes = () => {

//     // const setHeader = {
//     //     headers : {
//     //         Accept : 'application/json',
//     //     }
//     // }

//     // fetch('https://icanhazdadjoke.com/',setHeader)
//     // .then((res) => res.json())

//     // .then((data) => {
//     //     jokes.innerHTML = data.joke;
//     // })
    
//     // .catch((error) => {
//     //     console.log(error);
//     // })

// }


const generateJokes = async () => {
    try{
        const setHeader = {
            headers : {
                Accept : 'application/json',
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/',setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(error){
        console.log(`The error is ${error}`);
    }   
}

jokeBtn.addEventListener('click',generateJokes);
generateJokes();