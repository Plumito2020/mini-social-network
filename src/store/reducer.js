const initialState = {
  posts: [
    {
      id: 1,
      content: "1st post ",
    },
  ],
  infos: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    const deepCopy = state.posts.map((post) => {
      return { ...post };
    });
    const newPosts = [...deepCopy, { id: action.id, content: action.data }];
    return { posts: newPosts };
  }
  if (action.type === "SAVE_INFOS") {
    return {
      ...state,
      infos: {
        name: action.data.name,
        adress: action.data.adress,
        phone: action.data.phone,
        mail: action.data.mail,
      },
    };
  }
  return state;
};

export default reducer;
