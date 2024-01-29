window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('update');
		task_edit_el.innerText = 'Update';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "update") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Update";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});





// window.addEventListener('load', () => {
//     const form = document.querySelector("#new-task-form");
//     const input = document.querySelector("#new-task-input");
//     const list_el = document.querySelector("#tasks");

//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const task = input.value;

//         // Send a request to the server to add the task
//         const response = await fetch('/addTask', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ task }),
//         });

//         const result = await response.json();

//         if (result.success) {
//             // If the task is added successfully, update the UI
//             const { taskId } = result;
//             addTaskToUI(task, taskId);
//         }

//         input.value = '';
//     });

//     function addTaskToUI(task, taskId) {
//         const task_el = document.createElement('div');
//         task_el.classList.add('task');

//         const task_content_el = document.createElement('div');
//         task_content_el.classList.add('content');

//         task_el.appendChild(task_content_el);

//         const task_input_el = document.createElement('input');
//         task_input_el.classList.add('text');
//         task_input_el.type = 'text';
//         task_input_el.value = task;
//         task_input_el.setAttribute('readonly', 'readonly');

//         task_content_el.appendChild(task_input_el);

//         const task_actions_el = document.createElement('div');
//         task_actions_el.classList.add('actions');

//         const task_edit_el = document.createElement('button');
//         task_edit_el.classList.add('update');
//         task_edit_el.innerText = 'Update';

//         const task_delete_el = document.createElement('button');
//         task_delete_el.classList.add('delete');
//         task_delete_el.innerText = 'Delete';

//         task_actions_el.appendChild(task_edit_el);
//         task_actions_el.appendChild(task_delete_el);

//         task_el.appendChild(task_actions_el);

//         list_el.appendChild(task_el);

//         task_edit_el.addEventListener('click', async () => {
//             // Handle update task logic here
//             const updatedTask = prompt('Enter updated task:', task);

//             if (updatedTask !== null) {
//                 const response = await fetch('/updateTask', {
//                     method: 'PUT',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ taskId, updatedTask }),
//                 });

//                 const result = await response.json();

//                 if (result.success) {
//                     task_input_el.value = updatedTask;
//                 }
//             }
//         });

//         task_delete_el.addEventListener('click', async () => {
//             // Handle delete task logic here
//             const response = await fetch('/deleteTask', {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ taskId }),
//             });

//             const result = await response.json();

//             if (result.success) {
//                 list_el.removeChild(task_el);
//             }
//         });
//     }
// });
