var arr=[];

let btn=document.getElementById('ok');
addList(arr);
function addTodo(e){
  e.preventDefault();
  let val=document.getElementById('input').value;
  if(val==""){
    alert("Can't take empty tasks");
  }
  else arr.push(val);
 addList(arr);

document.getElementById('input').value="";
}
function addList(arr){

  let uldata="";
  arr.forEach(function (bea, index) {
    let currentlist = `<li>
    
    <h3>${index + 1}</h3>
    
    <div>${bea}</div>
    <button onclick='deleteTodo(${index})'><img src="https://img.icons8.com/windows/32/000000/delete-forever.png"/></button>
    
    
    </li>`;

    uldata += currentlist;
  });
  document.getElementById('tasks').innerHTML=uldata;
  pendingSection(arr);
}
function deleteTodo(index){
  arr.splice(index,1);
  addList(arr);

}

function pendingSection(arr){

  if(arr.length==0)
  document.getElementById('pending').innerHTML='You have no Task pending';
  else document.getElementById('pending').innerHTML='You have ' + arr.length+ ' Tasks pending';
}
