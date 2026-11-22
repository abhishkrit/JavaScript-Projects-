let taskElement = document.querySelector('.js-taskName')
let dueDateElement=document.querySelector('.js-dueDate');
 let todoArray = JSON.parse(localStorage.getItem('arrayList')) || [{
  name:"Make Dinner",
  dueDate:"04-15-2026"
 } , {
  name:"Learn Spanish",
  dueDate:"05-29-2027"
 }];

 renderTOdolist();

    function renderTOdolist(){
      let todoList='';
     
      for(let i=0; i < todoArray.length ; i++){

      let One_Object=todoArray[i];
      let name=One_Object.name;
      let dueDate=One_Object.dueDate;
  
      let html=`<div> - ${name} </div>  
      
      <div> ${dueDate} </div>
      
      <button onclick="

      todoArray.splice(${i},1);

      renderTOdolist();

      " style=' color:white; background-color:red; padding : 10px 5px ;

        margin-left: 50px; border:none;  border-radius:3px; cursor:pointer;

       '>Delete</button> `;



      todoList = todoList + html;

     

    }

     document.querySelector('.todo-div').innerHTML=todoList;  


    }



 



    function addFunc(){

      let taskName=taskElement.value;
      let dueDate=dueDateElement.value;

    
      todoArray.push({name :taskName,
        dueDate:dueDate,
      });

     



     

      taskElement.value='';
      if (dueDateElement.value) {
    dueDateElement.value = '';   
  }

      renderTOdolist();



      localStorage.setItem('arrayList',JSON.stringify(todoArray));



      console.log(JSON.stringify(todoArray));

    }



    function inputKeyDown(event){

      if(event.key==='Enter'){

        addFunc();

      }

    }





    function removeStorage(){

      todoArray=[];

      localStorage.removeItem('arraylist');

      renderTOdolist();

    } 

