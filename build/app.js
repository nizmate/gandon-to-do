/* env */
const API_URL = 'https://softonix-crud-test.firebaseio.com/'
$(document).ready(function () {
	/* dom */
	const $toDoWraper = $('.js-todo-wrap')

	/* init fetch */
	update($toDoWraper)
})

const update = (wrap) => {
	fetchAllTask('to-do-list.json')
		.then(res => {
			renderItems(wrap, res)
				.then(res => {
					updateStatus()
				})
		})
}

const fetchAllTask = (url) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'GET',
			url: `${API_URL}${url}`,
			success: function (data) {
				resolve(data)
			}
		})
	})
}

const renderItems = (wrapper, data) => {
	return new Promise((resolve, reject) => {
		let str = '';
		for (key in data) {
			str += `<li class="list-group-item" data-id="${key}" data-status="${data[key].done}">
								<input type="checkbox">
								<span>${data[key].title}</span>
								<button type="button" class="btn btn-danger btn-sm pull-right">Archive</button>
							</li>`
		}

		wrapper.append(str)
		resolve(str)
	})
}

const updateStatus = () => {
		let $toDoItem = $('.list-group-item')

		$toDoItem.each((i, e) => {
			let status = $(e).attr('data-status'), input = $(e).find('input')

			if (status === 'true') input.prop('checked', true)
		})
}
