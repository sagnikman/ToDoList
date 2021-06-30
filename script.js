let ulTasks = $('#ulTasks');
let inpNewTask = $('#inpNewTask');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnCleanup = $('#btnCleanup');
let btnSort = $('#btnSort');


function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item', 
        text: inpNewTask.val()  
    })

    listItem.click((e) => {
        listItem.toggleClass('done');
        let state="1";
        if(localStorage.getItem(e.target.innerText)!=null) {
            if(localStorage.getItem(e.target.innerText)=="1") state="0";
            else state="1"
        }
        localStorage.setItem(e.target.innerText,state);
    }) 
    

    localStorage.setItem(listItem[0].innerText,"0");
    ulTasks.append(listItem);
 
    inpNewTask.val("")
    inpNewTask.prop('autofocus',true);
    toggleInputButtons()
}

inpNewTask.keypress((e) =>  {
    if(e.which === 13) addItem()
    
})

function clearDone() {

    Object.keys(localStorage).forEach((key) => {
        let listText=key;
        let currentState=localStorage.getItem(key);
        if(currentState==="1") {
            localStorage.removeItem(listText);  
        }
       });

    
    $('#ulTasks .done').remove();
    toggleInputButtons()
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks);
}

function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
  }

inpNewTask.on('input', toggleInputButtons) 

btnAdd.click(addItem);

btnReset.click(() =>{ inpNewTask.val("")
toggleInputButtons()
})

btnCleanup.click(clearDone);

btnSort.click(sortTasks);


function getTodos() {

    Object.keys(localStorage).forEach((key) => {
    
        let listText=key;
        let currentState=localStorage.getItem(key);

        let listItem;
        if(currentState=="0") {
            listItem = $('<li>', {
                'class': 'list-group-item', 
                text: listText 
            })
            
        }
        else {
            listItem = $('<li>', {
                'class': 'list-group-item done', 
                text: listText 
            })
            
        }

        listItem.click((e) => {
            listItem.toggleClass('done');
            let state="1";
            if(localStorage.getItem(e.target.innerText)!=null) {
                if(localStorage.getItem(e.target.innerText)=="1") state="0";
                else state="1"
            }
            localStorage.setItem(e.target.innerText,state);
        }) 

        ulTasks.append(listItem);

        
       });

    
    inpNewTask.val("")
    inpNewTask.prop('autofocus',true);
    toggleInputButtons()
}

getTodos();

