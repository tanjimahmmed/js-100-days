// select items
const alert = document.querySelector(".alert");
const form = document.querySelector('.grocery_form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit_btn');
const container = document.querySelector('.grocery_container');
const list = document.querySelector('.grocery_list');
const clearBtn = document.querySelector('.clear_btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// -------- event listeners
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);

// load items
window.addEventListener('DOMContentLoaded', setupItems);

// functions
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    // if(value) {
    //     console.log('value is truthy');
    // }
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id, value)
        
        // display alert
        displayAlert('item added to the list', 'success');
        // show container
        container.classList.add('show_container');
        // add to local strong
        addToLocalStorage(id, value);
        // set back default
        setBackToDefault()
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert('please enter value', 'danger');
    }
}
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert_${action}`);
    // remove alert
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert_${action}`) ;
    }, 1000);
}
// clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery_item');

    if(items.length > 0){
        items.forEach(function (item) {
           list.removeChild(item); 
        });
    }
    container.classList.remove('show_container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');
}

// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove('show_container');
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}

// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
// set edit item
editElement = e.currentTarget.parentElement.previousElementSibling;
// set form value
grocery.value = editElement.innerHTML;
editFlag = true;
editID = element.dataset.id;
submitBtn.textContent = 'edit';
}

// set back to default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// set back to default
// function setBackToDefault() {
//     console.log('set back to default');
// }

// local storage
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    let items = getLocalStorage();

    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
    // console.log(grocery);
}
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
       if(item.id !== id){
           return item;
       } 
    });
    localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
       if(item.id === id){
           item.value = value;
       } 
       return item;
    });
    localStorage.setItem('list', JSON.stringify(items));

}
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}
// save as strings
// localStorage.setItem('orange', JSON.stringify(['item','item2']));
// const oranges = JSON.parse(localStorage.getItem('orange'));
// console.log(oranges);
// localStorage.removeItem('orange');

// setup items
function setupItems() {
    let items = getLocalStorage();
    if(items.length > 0){
items.forEach(function (item) {
    createListItem(item.id, item.value);
});
container.classList.add('show_container');
    }
}

function createListItem(id, value) {
    const element = document.createElement('article');
        // add class
        element.classList.add('grocery_item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = 
        `
        <p class="title">${value}</p>
            <div class="btn_container">
                <button type="button" class="edit_btn">
                    <i class="fas fa-edit"></i>
                </button>
            <button type="button" class="delete_btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        `;
        const deleteBtn = element.querySelector('.delete_btn');
        const editBtn = element.querySelector('.edit_btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        // append child
        list.appendChild(element);
}