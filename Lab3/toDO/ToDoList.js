
    let inBox = document.querySelector('#inBox')
    let list = document.querySelector('#list')

    inBox.addEventListener("keyup", function (event){
    if (event.key == "Enter" && this.value.trim() != "") {
    addItem(this.value)
    this.value = ""
}
})
    let addItem = (inBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inBox}<i></i>`;

    listItem.addEventListener("click", function() {
    this.classList.toggle('done')
})

    listItem.querySelector("i").addEventListener("click", function() {
    listItem.remove()
})
    list.appendChild(listItem);
}