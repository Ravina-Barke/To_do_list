const AddForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
	const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
	<span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`
	// += is use for adding new entries and preventing old as it is
	list.innerHTML += html;
}

// filter todo in serach 
// to covert  all child html colletion to array
// method chaning in array-----  ! not 

const filterTodo = term=>{
	Array.from(list.children)
		.filter(todo => !todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.add('filtered'));

	Array.from(list.children)
		.filter(todo => todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.remove('filtered'));

		
	console.log(Array.from(list.children));

}

// add todo
AddForm.addEventListener('submit', e => {
	// e.preventDefault();...Prevent the auto reload of page page will submit
	e.preventDefault();
	// trim usnused to remove unused space after sumiting code  
	// todo is use to collect the data from user
	const todo = AddForm.add.value.trim();
	// if we arecadding only space still todo is added we dont want that so 
	// length of array blank entry is zero - 0 false and 1 true
	// if true value comes its work else not 
	if (todo.length) {
		//  function call
	generateTemplate(todo);
		// reset is use to resent the data while entering content
		AddForm.reset();
	}
});

// delete todo ----contains is use to specify that class is spefify in the content or not.
// evel deligation and bubbling
list.addEventListener('click', e=>{
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// for searching todo .. filter  

search.addEventListener('keyup',()=>{
	const term = search.value.trim();
	// console.log(term);
	filterTodo(term);
});


