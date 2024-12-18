let Todo=document.querySelector('button');
let msg = document.querySelector('#todos');
let getBtn= document.querySelector('#get-btn');
let createBtn = document.querySelector('#create-btn');
let updateBtn = document.querySelector('#update-btn');
let deleteBTn = document.querySelector("#delete-btn")

//retreiving the data from the server
function getData(){
let apiUrl='https://dummyjson.com/todos';
fetch(apiUrl)
.then(response => {
    return response.json();
}).then(data =>{
    console.log(data);
    msg.innerHTML="";
    let main = document.createElement('ul');
    
     data.todos.forEach(element => {
        let firstbutton=document.createElement('li');
        let ele=element.todo; 
        firstbutton.textContent=` list of todos: ${ele}`;
        main.appendChild(firstbutton);
    
    });
        msg.appendChild(main);
}).catch(err =>{
alert('something went wrong');
})
}
getBtn.addEventListener('click', getData);

//creating an object and posting it on to the server
function createData(){
    let apiUrl='https://dummyjson.com/todos/add';
    fetch(apiUrl,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        todo:"face everthing bravely post message",
        completed:true,
        userId:1
    })
})
    .then(response => {
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        msg.innerHTML="";
       let postedMsg = document.createElement('p');
       postedMsg.textContent= `POSTED OBJECT INFORMATION:- id : ${data.id}, todo : ${data.todo} ,compeleted : ${data.completed} ,userid : ${data.userId}`;
       msg.appendChild(postedMsg);
    })
}
createBtn.addEventListener('click' , createData);

//updating the data in the server
function updateData(){
    let apiUrl = 'https://dummyjson.com/todos/1';
     fetch(apiUrl, {
        method:'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo:"do great things for bright future",
            completed:false,
            userId:2
     })
    }).then(response => {
       return response.json();
    })
    .then(data => {
        console.log(data);
        msg.innerHTML="";
        let updatedMsg = document.createElement('p');
        updatedMsg.textContent=`updated todo message : ${data.todo}`;
        msg.appendChild(updatedMsg);
    }).catch(err =>{
        alert('error fetching data')
    })
}
updateBtn.addEventListener('click' , updateData);

//deleting the data from the server
function deleteData(){
    let apiUrl='https://dummyjson.com/todos/5';
    fetch(apiUrl,{
        method:'DELETE'
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        msg.textContent="5th Todo item has been deleted";
    }).catch(err =>{
        alert('error while fetching data');
    })
}
deleteBTn.addEventListener('click',deleteData);