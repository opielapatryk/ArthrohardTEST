let pageSize = parseInt(document.querySelector("select").value);
let grid = document.querySelector("#grid");
let footer = document.querySelector("footer");
let isFetching = false;
let pageNumber = 1;
let hasMore = true;
let loadFirstProducts = false;

document.querySelector('select').addEventListener('change', function() {
    pageSize = parseInt(this.value);
    pageNumber = 1;
    grid.innerHTML = "";
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
        sqr.addEventListener("click", () => {
            document.getElementById("popup").style.display = "block";
            document.getElementById("popup").innerHTML = `<p id="exit" style="cursor:pointer;">x</p>
            <div>
                <p>ID: ${product.id}</p>
                <p>Nazwa: ${product.name}</p>
                <p>Wartość: ${product.value}</p>
            </div>`;
            let exit = document.getElementById("exit");

            exit.addEventListener("click", () => {
                document.getElementById("popup").style.display = "none";
            })
        })

        

        
    }
    pageNumber++;
}


window.addEventListener("scroll", () => {

    let totalHeight = window.innerHeight + window.scrollY;
    let offsethght = document.body.scrollHeight - 1
    

    if(!loadFirstProducts && totalHeight >=document.getElementById("grid").offsetTop + 122){
        loadFirstProducts = true;
        getapi();
    }

    if(isFetching || !hasMore){
        return
    } 
    
    if(totalHeight >= offsethght){
        getapi();
    }

})