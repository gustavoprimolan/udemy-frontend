import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //GET JUST userId Property -- LODASH'S MAP
  // _.map(getState().posts, 'userId')

  //WILL JUST RETURN THE UNIQUE userIds
  // MAP GET PROPERTY BY NAME
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // console.log(userIds);
  // userIds.forEach((id) => dispatch(fetchUser(id)));


  //ITS THE SAME AS ABOVE
  //YOU CAN CHAIN ALL CALLS AND THEN EXECUTE WITH value()
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//Function insided function
//first users id, second dispatch to be possible to get the request without error (redux-thunk)
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
//_ IS PRIVATE FUNCTION AND DONT SHOULD CALL
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// export const selectPost = () => {
//   return {
//     type: "SELECT_POST",
//   };
// };
