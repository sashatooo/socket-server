const trimString = require("./utils");

let users = [];

const findUser = (user) => {
  const userName = trimString(user.name);
  const userRoom = trimString(user.room);

  return users.find(
    (u) => trimString(u.name) === userName && trimString(u.room) === userRoom
  );
};

const addUser = (user) => {
  const isExist = findUser(user);

  !isExist && users.push(user);

  const currentUser = isExist || user;

  return { isExist: !!isExist, user: currentUser };
};

const getRoomUsers = (room) => users.filter((u) => u.room === room);

const removeUser = (user) => {
    const found = findUser(user)
    if(found) {
        users = users.filter(u => u.room === found.room && u.name !== found.name || u.room !== found.room);
    }

    return found
}

module.exports = { addUser, findUser, getRoomUsers, removeUser };
