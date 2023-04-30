const btn = document.getElementsByClassName("btn")[0]

btn.addEventListener("click",getData)

function getData() {
    fetch("/data/data.json")
    .then((response) => response.json())
    .then((json) => console.log(json))
}