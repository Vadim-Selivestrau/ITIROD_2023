const addOnSubmit = (id, callback) => {
  document.getElementById(id).addEventListener("submit", callback);
};

const addOnClick = (id, callback) => {
  document.getElementById(id).addEventListener("click", callback);
};

export { addOnSubmit, addOnClick };
