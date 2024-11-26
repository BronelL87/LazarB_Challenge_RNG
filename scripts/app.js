function getPeople(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data =>{
        return data.codestack
    })
}


function getRandomPerson(codestack){
    let randomInd = Math.floor(Math.random() * codestack.length);
    return codestack[randomInd];
}

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codestackEmail");
let email = document.getElementById("email");

let getRandom = document.getElementById("getRandom");


let previousPeople = [];
let previousList = document.getElementById("previousList");
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let name3 = document.getElementById('name3');
let name4 = document.getElementById('name4');
let name5 = document.getElementById('name5');

getRandom.addEventListener('click', (e) => {
    getPeople().then(codestack => {
        let chosenRandom = getRandomPerson(codestack);

        let fullName = `${chosenRandom.firstName} ${chosenRandom.lastName}`;

        firstName.innerText = chosenRandom.firstName;
        lastName.innerText = chosenRandom.lastName;
        codestackEmail.innerText = chosenRandom.coEmail;
        email.innerText = chosenRandom.email;

        previousPeople.push(fullName);

        if(previousPeople.length > 5){
            previousPeople.shift();
        }


        updatePreviousList();
    });
});

function updatePreviousList(){
    name1.innerText = previousPeople[0] || '...';
    name2.innerText = previousPeople[1] || '...';
    name3.innerText = previousPeople[2] || '...';
    name4.innerText = previousPeople[3] || '...';
    name5.innerText = previousPeople[4] || '...';
}