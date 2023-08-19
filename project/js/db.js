import {
  getDatabase,
  onValue,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import app from "./app.js";

const db = getDatabase(app);

const bind = (path, callback) => {
  const reference = ref(db, path);
  console.log(`Bind (${path})`)

  onValue(reference, (snapshot) => {
    if (!snapshot.exists()) {
      console.error("No data available");
    }

    const data = snapshot.val();
    console.log(data.board);
    callback(data);
  });
};

const read = async (path) => {
  const reference = ref(db);
  console.log(`Read (${path})`)

  return await get(child(reference, path)).then(
    (snapshot) => {
      if (!snapshot.exists()) {
        console.error("No data available");
        return null;
      }

      return snapshot.val();
    },
    (error) => {
      console.error(error.message);
      return null;
    }
  );
};

const write = (path, data) => {
  const reference = ref(db, path);
  console.log(`Write (${path}, ${data})`)

  set(reference, data).catch((error) => {
    console.error(error.message);
  });
};

export { read, write, bind };
