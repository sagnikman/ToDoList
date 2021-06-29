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
}

inpNewTask.keypress((e) =>  {
    if(e.which === 13) addItem()
})

function clearDone() {
    $('#ulTasks .done').remove();
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks);
}

btnAdd.click(addItem);

btnReset.click(() => inpNewTask.val(""))

btnCleanup.click(clearDone);

btnSort.click(sortTasks);