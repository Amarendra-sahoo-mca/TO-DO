let inp=document.querySelector("input");
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let ol=document.querySelector("ol");

btn1.addEventListener("click", function(){
    let li=document.createElement("li");
    let dBtn=document.createElement("button");
    dBtn.innerText="X";
    dBtn.classList.add("x");
    li.classList.add("y");
    li.innerText=inp.value;
    li.appendChild(dBtn);
    ol.appendChild(li);
    inp.value=null;
});
inp.addEventListener('keyup', (key)=>{
    if(key.keyCode === 13){
        let li=document.createElement("li");
        let dBtn=document.createElement("button");
        dBtn.innerText="X";
        dBtn.classList.add("x");
        li.classList.add("y");
        li.innerText=inp.value;
        li.appendChild(dBtn);
        ol.appendChild(li);
        inp.value=null;
    }
});
ol.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let pr=event.target.parentElement;
        pr.remove();
    }
})


