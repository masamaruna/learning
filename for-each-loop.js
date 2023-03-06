const lis = document.querySelectorAll(".js-list-item");

lis.forEach(function (node, index) {
    console.log(node.innerHTML, index); // the node is kinda the value of the list item here
    if (index >= 10) {
        node.remove();
        return false;
    }
    node.innerHTML = (index * 12) + " is the number!";
})
