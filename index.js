const more = document.getElementById("more")
const dot = document.getElementById("dot")
const text = document.getElementById("text")
const btn = document.getElementById("btn")

function showMore(){
    if(dot.style.display ==="none"){
        dot.style.display = "inline"
        more.style.display = "none"

        btn.innerHTML = "Read more"
    }
    else{
        dot.style.display = "none"
        more.style.display = "inline"
        btn.innerHTML = "Show less"  
    }
}
function showMore2(){
    btn.style.backgroundColor = 'red'
}

btn.addEventListener("click", showMore )
btn.addEventListener("click", showMore2 )