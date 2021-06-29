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
    listItem.click(() => {
        listItem.toggleClass('done');
    }) 
    ulTasks.append(listItem);
    inpNewTask.val("")
    inpNewTask.prop('autofocus',true);
    toggleInputButtons()
}

inpNewTask.keypress((e) =>  {
    if(e.which === 13) addItem()
    
})

function clearDone() {
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