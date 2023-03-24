var factLengh;
var fact;

function avvio(){
    let p = fetch("https://catfact.ninja/fact");
    p.then(function(arg){
	    let t = arg.json();
	    t.then(function(txt){
            factLengh = txt.factLengh
            fact = txt.fact;
            appendToList();
            //provaTabella()
	    });
    });
}

function appendToList(){
    // creazione del nodo:
    const node = document.createElement("li");

    // creazione del testo nel nodo:
    const textnode = document.createTextNode(fact);

    // aggiungo il testo al nodo:
    node.appendChild(textnode);

    // aggiungo il nodo alla lista:
    document.getElementById("out").appendChild(node);    
}

function provaTabella() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "out");
    document.body.appendChild(x);
    
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("out").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode(fact);
    z.appendChild(t);

    document.getElementById("myTr").appendChild(z);
}

function mist(){
    
}