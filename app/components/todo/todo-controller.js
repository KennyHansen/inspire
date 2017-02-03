(function () {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage

	//Your TotoService is a global constructor function what can you do here if you new it up?
	var todoService = new TodoService();
	var vm = new Vue({
		
		el: '#todos',
		data: {
			todoList: todoService.getTodos(),
			completed: [],
			todo: 'something cool'
		},
		mounted: function () {
			console.log(this.todo)
		},
		methods: {
			submitTodo(todo) {
				if (todo) {
					this.todoList.push(todo)
					this.todo = ''
					todoService.saveTodos(this.todoList)
				}
			},
			completeTodo(todo) {
				this.completed.push(todo)
				this.removeTodo(this.todoList.indexOf(todo))
				todoService.saveTodos(this.todoList)
			},
			removeTodo(i) {
				this.todoList.splice(i, 1)
				todoService.saveTodos(this.todoList)
			}
		}
	})



}())