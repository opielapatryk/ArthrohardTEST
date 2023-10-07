let pageSize = parseInt(document.querySelector("select").value);
let grid = document.querySelector("#grid");
let footer = document.querySelector("footer");
let isFetching = false;
let pageNumber = 1;
let hasMore = true;

document.querySelector('select').addEventListener('change', function() {
    pageSize = parseInt(this.value);
    getapi();
});


async function getapi() {
    isFetching = true;
	const response = await fetch(`https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`);
	let data = await response.json();
    isFetching = false;
    if(data.data.length === 0){
        hasMore = false;
        return
    }
    for(let product of data.data){
        let sqr = document.createElement("div");
        sqr.setAttribute("id", "sqr");
        sqr.innerHTML = `ID: ${product.id}`;
        grid.appendChild(sqr);
    }
    pageNumber++;
}


window.addEventListener("scroll", ()=>{
    const totalHeight = window.innerHeight + window.scrollY;

    if(isFetching || !hasMore){
        return
    } 
    
    if(totalHeight >= document.body.offsetHeight - 1 ){
        getapi();
    }
})

