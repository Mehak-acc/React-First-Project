const API = "https://66a88cdee40d3aa6ff5870d4.mockapi.io";

export const fetchUsers = async (email) => {
  try {
    const url = `${API}/users?email=${email}`;
    const res = await fetch(url);
    const users = await res.json();
    return users[0]; 
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const fetchUsersByUuid = async (user_uuid_id) => {
  try {
    const url = `${API}/users?user_uuid_id=${user_uuid_id}`;
    const res = await fetch(url);
    const users = await res.json();
    return users[0]; 
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createUser = async (payload) => {
  try {
    const url = `${API}/users`;
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return rawResponse.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateUser = async (id, payload) => {
  try {
    const url = `${API}/users/${id}`;
    const rawResponse = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return rawResponse.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getUserById = async (user) => {
  try {
    const url = `${API}/users/${user.id}`;
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return rawResponse.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};




 

  