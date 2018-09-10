const initState = {
	posts: [
		{ id: '1', title: ' Funny story', body: 'lorem ipsum bla bla' },
		{ id: '2', title: ' Funny story 2', body: 'lorem ipsum bla bla again' },
		{
			id: '3',
			title: ' Funny story 3',
			body: 'lorem ipsum bla bla one more time'
		}
	]
};
const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter((post) => {
			return action.id !== post.id;
		});
		return {
			...state,
			posts: newPosts
		};
	}

	return state;
};

export default rootReducer;
