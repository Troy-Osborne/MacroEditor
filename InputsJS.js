 //Create the HTML for the input.
//it will always be there but when its not in use it will be hidden
function UIJSInitialiseCSS(Background="#FFF",Border="solid 1px #000",Shadow="none",FontColor="#000")
{
return `<style>
#UserInputJS{position:absolute;top:12vh; left:20vw; width:60vw; min-height:10vh;
background:${Background};border:${Border}; box-shadow:${Shadow}; 
z-index:0; display:none;}
#UIJSTitle{width:calc(100% - 24px);padding-left:24px;height:24px;
background:#66A;border-bottom:solid 1px #000;}
#UIJSContents{width:100%;height:calc(100% - 24px);}
#UIJSRow{width:100%;}
#UIJSRLeft{width:35%;height:32px;display:inline-block;}
#UIJSRRight{width:64%;min-height:32px;display:inline-block;}
#UIJSBottomLeft{width:84%;height:32px;display:inline-block;}
#UIJSCaption{padding:12px;width:100%;}
#UIJSBottomRight{width:15%;height:32px;display:inline-block;}
UIJSinput{width:100%;}
textarea.UIJSbuttonlabel{display:inline-block;min-width:50vw;height:64px;vertical-align:top;}
.UIJSfullsize{width:96%;height:100%;}
</style>`;
}

function UIJSBody(){
return `
<div id=UserInputJS>
Invisible OnLoad
</div>`;
}


//The buttons for this demo. These aren't part of the main javascript code

function DemoButton(codestring,caption="Button"){
document.write( `<button onclick='${codestring}'>
	${caption}
</button>
<textarea class=buttonlabel>${codestring}</textarea>
<br>`);
}

//Place The Demo Buttons within Main Content. 
//When they're clicked the corrosponding User Inputs will open.

//DemoButton('TextInput("Test Title","This is an example input","Default Value")',"Text Input");
//DemoButton('CustomInput("User Registration",["text","text","text","password","password"],["","","","",""],["Name:","Username:","Email:","Password:","Verify:"])',"User Registration");
//DemoButton('CustomInput("Upload File",["text","file","color"],["","","#FF0000"],["Name:","File:","Colour Code:"])',"Upload File");
//DemoButton('CustomInput("Contact Info",["text","tel","tel","text","text","file"],["First Last","0456123123","38921111","user@domain.com","<unit #>/<st #> <Street Name>, <Suburb or Town> <Postcode or Zipcode>, <State>, <Country>"],["Name:","Personal Phone:","Business Phone:","Email:","Postal Address:","Photo:"])',"Contact Info");
//DemoButton('CentreDialogue("Alert Title!","This is a demo alert!")',"Alert");
//DemoButton('CentreDialogue("Alert Title!","<img src=Sample.jpg class=UIJSfullsize>")',"Alert");

let ExpectedInput=[];
function ShowInput(){
elem=document.getElementById('UserInputJS'); 
elem.style["display"]="inline";//bring to top
//Disable Main Content
}

function HideInput(){
elem=document.getElementById('UserInputJS'); 
elem.style["display"]="none";//send to back
//Enable Main Content
}

function submit(parentfunc){
var arity=ExpectedInput.length;
HideInput();
GivenInputs=[];
for (i=0;i<arity;i++){
	elem=document.getElementById('Input'+i);
	GivenInputs.push(elem.value); 
}
parentfunc(GivenInputs);
}

function CustomInput(Title,Types,Defaults,Captions,Caption="",buttonlabel="Submit",argnames=null,parentfunc=function (x){alert(`Given Arguments: ${x}`);}){
if (argnames==null){
var a=[];
for (i=0;i<Types.length;i++){
a.push("Input"+i)
}
argnames=a;
}

var Rows=[];
if (Caption==null){
	var RowString="";
}
else {
	var RowString="<div id=UIJSRow><div id=UIJSCaption>"+Caption+"</div></div><div id=UIJSRow></div>";
}
var SubmitButton=`<div id=UIJSRow>
	<div id=UIJSBottomLeft></div>
	<div id=UIJSBottomRight><input  id='UIJSInputButton' type=button value='${buttonlabel}' onclick='submit(${parentfunc})'></div>`;
//Make Rows String
for (i=0;i<Types.length;i++){
Rows.push([Types[i],Defaults[i],Captions[i]]);
var inp="<input id='Input"+i+"' name='"+argnames[i]+"' type='"+Types[i]+"' value='"+Defaults[i]+"'>";
var cap=Captions[i];
RowString=`${RowString}
<div id=UIJSRow>
	<div id=UIJSRLeft>${cap}</div>
	<div id=UIJSRRight>${inp}</div>
</div>
`;
}
ExpectedInput=Rows;

elem=document.getElementById('UserInputJS'); 

elem.innerHTML=`<div id=UIJSTitle>${Title}</div>
<div id=UIJSContents>
${RowString}
${SubmitButton}
</div>
`;
ShowInput();
FirstElem=document.getElementById('Input0'); 
FirstElem.focus();

OnEnter=function(event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    //Click the button if enter is pressed on any input
    document.getElementById('UIJSInputButton').click();
  }
}

//For all inputs add listener for enter
for (i=0;i<Types.length;i++){
var idname='Input'+i;
CurrentElem=document.getElementById('Input0'); 
CurrentElem.addEventListener("keypress", OnEnter); 
}

}

function TextInput(Title,Caption,Default=""){
  return CustomInput(Title,["text"],[Default],[Caption]);
}

function CentreDialogue(Title,Contents){
  return CustomInput(Title,[],[],[],caption=Contents,buttonlabel="Done");
}

