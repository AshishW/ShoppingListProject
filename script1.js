var button =document.getElementById("btn_ent");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var li=document.querySelector("li");
function input_length(){
	return input.value.length;
}

function createListItem(){
	var li_ele=document.createElement("li");
	li_ele.appendChild(document.createTextNode(input.value));
	ul.appendChild(li_ele);
	li_ele.addEventListener("click",toggleItem);
	input.value = "";
	deletebtn();
    function deletebtn(){
	var delbtn=document.createElement("button");
    delbtn.appendChild(document.createTextNode("delete"));
    li_ele.appendChild(delbtn);
    delbtn.addEventListener("click",delfun);

    }
   function delfun(){
   li_ele.remove();
  }
   function toggleItem(){
    li_ele.classList.toggle("done");
 }
 
}
function addItemByClick(){
	if(input_length() > 0){
		createListItem();
	}
}
function createItemsKeypress(event){
   if(input_length() > 0 && event.which===13){
   	createListItem();
   }
}
button.addEventListener("click",addItemByClick);
input.addEventListener("keypress",createItemsKeypress);




