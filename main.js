// event listener for submit 
var form = document.getElementById('addForm');  
var itemList = document.getElementById('items');  

// Form submit event 
// form.addEventListener('submit', addForm);     

form.addEventListener('submit', (e) => {
  e.preventDefault();     


  // Get input value 
  var amount = document.getElementById('amount').value; 
  var description = document.getElementById('description').value; 
//   var category = document.getElementById('category').value; 
  // Create new li element 
  var p = document.createElement('p');  
 
  // Add class 
  p.className = 'list-group-item';  
  // Add text node with input value 
  p.appendChild(document.createTextNode(amount + " " + description));  
     
  // Append li to list
itemList.appendChild(p);     
// sessionStorage.setItem("p","itemList"); 
// sessionStorage.getItem("p");



if(amount.length >0 && description.length>0){
  // Create delet button element 
  var deletBtn = document.createElement('button'); 
  // Add clases to del button 
  deletBtn.className= 'btn btn-danger btn-sm float-right delete'; 
  // Append text node 
  deletBtn.appendChild(document.createTextNode('X'));  
  // Append button to li
p.appendChild(deletBtn);    

p.addEventListener("click", () => {
localStorage.removeItem(amount);
// axios.delete(`${apiendpoint}/registeruser/${object._id}`);
p.remove();
});


// Create edit button element   
var editBtn = document.createElement('button'); 
// Add clases to del button 
editBtn.className= 'btn btn-danger btn-sm float-right delete'; 
// Append text node 
editBtn.appendChild(document.createTextNode('edit'));  
// Append button to li
p.appendChild(editBtn); 


let myObj = {
  inputamount: amount,  
  inputdescription: description,
  // inputcategory: category,
};    

let myobj_serialized = JSON.stringify(myObj); 
localStorage.setItem(myObj.inputamount,myobj_serialized); 
let myObj_deserialized = JSON.parse(localStorage.getItem(myObj.inputamount));  
console.log(myObj_deserialized);   
}
}); 

// itemList.addEventListener('click', removeItem); 

  
  
  
