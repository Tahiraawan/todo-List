export async function getAllToDos(userId) {
  const response = await fetch(
    `http://ec2-50-17-231-251.compute-1.amazonaws.com:4000/api/todoapp/${userId}`
  );
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  throw new Error("could not load to-dos..please try again");
}
export function addTodo(title, description, userId) {
  return fetch(
    "http://ec2-50-17-231-251.compute-1.amazonaws.com:4000/api/todoapp",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title, //title:title
        description, //description:description
        userid: userId,
      }),
    }
  );
}
export function removeTodo(id) {
  return fetch(
    `http://ec2-50-17-231-251.compute-1.amazonaws.com:4000/api/todoapp/delete`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
    }
  );
}
export function updateTodo(id, title, description) {
  return fetch(
    `http://ec2-50-17-231-251.compute-1.amazonaws.com:4000/api/todoapp/update`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
        id,
      }),
    }
  );
}
