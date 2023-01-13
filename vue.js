'use strick';

const todo = Vue.createApp({
	data: () => ({
			task: [
					{
						id: 1,
						taskName: 'Add Html',
					},
					{
						id: 2,
						taskName: 'Add Css',
					},
					{
						id: 3,
						taskName: 'Add script',
					},
					{
						id: 4,
						taskName: 'Add task',
					},
					{
						id: 5,
						taskName: 'Add vue',
					},
					{
						id: 6,
						taskName: 'Send Pechyrov',
					},
			],
			taskCompleted: [],
	}),
	methods: {
		completed(myTask, i) {
			this.taskCompleted.push(myTask);
			this.task.splice(i, 1);
		}
	}
}
).mount('#todo');