function onReady() {
    let id = 0;

    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) { return; }

      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: ++id
      });

      newToDoText.value = '';

      renderTheUI();
    }

    function remove(id) {
      return toDos.filter(toDo => toDo.id !== id);
    }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent = toDo.title;

        newLi.appendChild(checkbox);
        toDoList.appendChild(newLi);

        let Delete = document.createElement('button');
        Delete.innerHTML = '<span>delete</span>';

        newLi.appendChild(Delete);

        Delete.addEventListener ('click', function(){
          toDos = remove(toDo.id);
          renderTheUI();
        });
      });

      addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
      });
    }
    renderTheUI();
  };

 window.onload = function() {
   onReady();
 };
