document.addEventListener('DOMContentLoaded',()=>{

const list=document.querySelector('#todolist ul')
const forms=document.forms;
  const create=forms['add-todo']
//delete todo

list.addEventListener('click',(e)=>{

if (e.target.className=='todo'){
    const li=e.target.parentElement;
    li.parentNode.removeChild(li)
}
})

//update todo



//add todo

create.addEventListener('submit',(e)=>{
    e.preventDefault()

    //create elements

const value=document.getElementById('tex').value
const li=document.createElement('li')
const item=document.createElement('span')

// add text

item.textContent=value;


//add class

item.classList.add('todo')

//append


li.appendChild(item)
list.appendChild(li)



//clear input

document.getElementById('tex').value=''
})



})