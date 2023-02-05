let main = document.getElementById("main-container");
let addBtn = document.querySelector(".btn-add");

addBtn.addEventListener("click", addtsk);

function addtsk(){
    const newdiv = document.createElement("div");
    newdiv.classList.add('task');
    main.appendChild(newdiv);
    newdiv.after(addBtn)
}

