let id = document.getElementById('id');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let submit = document.getElementById('submit');
let tbody = document.getElementById('tbody');



let mood = "create";
let temp;


//Create row
let arr;
if ( localStorage.product != null){
    arr = JSON.parse(localStorage.product);
}
else{
    arr = [];

}
submit.onclick=function(){
    let obj={
        id:id.value,
        firstName:firstName.value,
        lastName:lastName.value
    }
    if(id.value > 0 && firstName.value != '' && lastName.value != ''){
        if(mood === 'create'){
            arr.push(obj);
        }
        else{
                arr[temp]=obj;
                mood = 'create';
            }
        
        clear();
    }
    //save locahstorage
    localStorage.setItem("product", JSON.stringify(arr));
    show();
}


//clear inputs
function clear(){
    id.value='',
    firstName.value='',
    lastName.value=''
}

//show data in table
function show(){
    let table ='';
    for(let i=0;i<arr.length;i++){
    table += ` <tr>
    <td>${arr[i].id}</td>
    <td>${arr[i].firstName}</td>
    <td>${arr[i].lastName}</td>
    <td><button id="update" onclick="updateData(${i})">Update</button></td>
    <td><button id="delete" onclick="deleteData(${i})">Delete</button></td>
</tr>`}

document.getElementById('tbody').innerHTML = table;

}
show();




//delete data
function deleteData(i){
    arr.splice(i,1);
    localStorage.product =JSON.stringify(arr);
    show(); 
}


//update data
function updateData(i){
    id.value = arr[i].id;
    firstName.value = arr[i].firstName;
    lastName.value = arr[i].lastName;

    mood = 'update';
    temp = i;

    scroll({
        top:0,
        behavior: 'smooth',
    })
}

