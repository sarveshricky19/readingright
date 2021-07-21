

export const imgAction = () => async (dispatch) => {
  return await fetch("https://picsum.photos/v2/list/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dispatch({ type: "imgFetch", payload: json });
    });
};

export const imgIDAction = (id) => async (dispatch) => {
  return await fetch(`https://picsum.photos/id/${id}/info`)
    .then((response) => response.json())
    .then((json) => {
      console.log("ActionD", json);
      dispatch({ type: "imgFetch", payload: json });
    });
  //return console.log("From acion", id);
};
