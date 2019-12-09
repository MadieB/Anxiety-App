let solutions

function loadPage() {
fetch("solutions.json")
    .then(response => response.json())
    .then(json => {console.log(json)
                  solutions = json
                  createCards()})
    .catch(error => console.error(error))
//createCards()
}
function createCards() {
let container = document.createElement('div')
container.innerHTML = solutions.map(solution=>
`<div>

</div>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}