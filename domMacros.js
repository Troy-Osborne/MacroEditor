function Macro(Name,Icon,Key,Arity,Function){
//Normal Macro using javascript typing
return [Name,Icon,Key,Arity,Function];
}

SEBID=Macro("Get Element By ID","GEBID.jpg","I",1,function (id) {return 'elem=document.getElementById(\''+id+'\'); val=elem.value; //do something with value';});

innerHTMLMacro=Macro("Change inner html","GEBID.jpg","I",1,function (id) {return 'elem=document.getElementById(\''+id+'\'); elem.innerHTML= "something"; //set your innerHTML here';});

let javascript_DOM_macros=["JS DOM","JS DOM.jpg",[SEBID]]; 