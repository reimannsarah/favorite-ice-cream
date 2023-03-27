window.onload = function () {
    const h1 = document.createElement ("h1");
    const body = document.querySelector('body');
    const h3 = document.createElement("h3");
    const ul = document.createElement("ul");
   

    const flavors = ["olive oil", "cookies n' cream", "snickerdoodle", "half-baked"];

    flavors.forEach(function(flavor){
        const li = document.createElement("li");
        li.append(flavor);
        ul.append(li);
    });

    h1.append("Ice Cream is the best Cream");
    h3.append("Flavors");

    body.append(h1);
    body.append(h3);
    body.append(ul);

}