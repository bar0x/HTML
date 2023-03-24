var factLengh;

function avvio(){
    let p = fetch("https://catfact.ninja/fact");
    p.then(function(arg){
	    let t = arg.json();
	    t.then(function(txt){
            factLengh = txt.factLengh
            appendToList(txt.fact)
	    });
    });
}


function appendToList(input){
    // creazione del nodo:
    const node = document.createElement("li");

    // creazione del testo nel nodo:
    const textnode = document.createTextNode(input);

    // aggiungo il testo al nodo:
    node.appendChild(textnode);

    // aggiungo il nodo alla lista:
    document.getElementById("out").appendChild(node);    
}