var button = document.querySelector('input[type="button"]');
var input = document.querySelector('input[type="text"]');
var ul = document.querySelector("ul");
var liButtons = document.getElementsByTagName("button");
button.addEventListener("click", addItem);

function addItem(event) {
    if (input.value.trim().length != 0) {
        document.querySelector(".message").textContent = "";
        var itemText = document.createTextNode(input.value);
        var item = document.createElement("li");
        var button = document.createElement("button");
        var x = document.createTextNode("X");
        button.appendChild(x);
        button.addEventListener("click", deleteItem);
        item.appendChild(itemText);
        item.appendChild(button);
        ul.appendChild(item);
        input.value = "";
        input.focus();
    } else {
        document.querySelector(".message").textContent = "You can't enter empty item.";
    }
}

function deleteItem(event) {
    this.parentNode.parentNode.removeChild(this.parentNode);
}
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        button.click();
    }
});