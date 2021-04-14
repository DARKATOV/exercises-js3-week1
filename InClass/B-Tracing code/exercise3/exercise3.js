
const getRepos = function(repoName) {
  return fetch(`https://api.github.com/users/${repoName}/repos`)  
    .then(data => data.json())
    .then(function(response) {
        return response.map(function(rep) {
		      console.log(rep.name);
          return rep.name;
      });
    });
};

const migracodeRepos = getRepos('migracode-barcelona');
console.log("Loading...");

let names = migracodeRepos.then((repnames)=>{
  repnames.forEach( repo => {
    var myElement = document.querySelector("#main");
    var paragraph = document.createElement("p"); 
    paragraph.textContent = repo;
    myElement.appendChild(paragraph);
  })
})

// Task1. Fix the code
// Task2. Create a <p> for each repository



// const p1 = Promise.resolve(1);
// console.log(p1);
// p1
//   .then (x => x+5)
//   // .then (x => console.log(x))
//   .then (x => Promise.resolve(x+5))
//   .then(x => console.log(x));


// console.log(p1.then);
// console.log(p1);