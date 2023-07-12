var opts,text,element,color,updateText,updateColor,updateBtn,editBtn,deleteBtn;
var form_content = document.getElementById("mainDiv");
function add() {
  opts = document.getElementById('options').value;
  color = document.getElementById('color').value;
  text = document.getElementById('text').value;
  
  element= document.createElement(opts);
  element.innerHTML = text;
  element.style.color = color;
  document.body.appendChild(element);
  document.getElementById('color').value = '#000000';
  document.getElementById('text').value = "";
  document.getElementById('options').value = "h1";

  element.addEventListener('click',()=>{
    document.body.removeChild(form_content);

    editBtn = document.createElement('button');
    editBtn.innerHTML = "Edit";
    deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    document.body.appendChild(deleteBtn);
    document.body.appendChild(editBtn);

    editBtn.addEventListener('click',() =>{
      editFun();
    });

    deleteBtn.addEventListener('click',() =>{
      deleteFun();
    });
   
  });
  
} 

function editFun(){
  updateText = document.createElement("textarea");
  updateText.innerHTML = text;
  document.body.appendChild(updateText);

  
  updateColor = document.createElement("input");
  updateColor.setAttribute("type","color");
  document.body.appendChild(updateColor);
  updateColor.value= color;

  updateBtn = document.createElement("Button");
  document.body.appendChild(updateBtn);
  updateBtn.innerHTML = "Update";

  updateBtn.onclick = () => { 
    element.innerHTML = updateText.value;
    element.style.color =  updateColor.value;
  }
}

function deleteFun(){
  document.body.removeChild(deleteBtn);
  document.body.removeChild(editBtn);
  document.body.appendChild(form_content);
  document.body.removeChild(element);
  document.body.removeChild(updateText);
  document.body.removeChild(updateBtn);
  document.body.removeChild(updateColor); 
}

