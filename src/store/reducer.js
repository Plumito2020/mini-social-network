import post from "../Components/Post/Post";

const initialState = {
  posts: [
    {
      id: 1,
      content: "1st post ",
    },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    const deepCopy = state.posts.map((post) => {
      return { ...post };
    });
    const newPosts = [...deepCopy, { id: action.id, content: action.data }];
    return { posts: newPosts };
  }
  return state;
};

export default reducer;
