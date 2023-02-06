const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = 0;

  for (let user in usersObj) {
    if (usersObj[user]["online"] === true) {
        onlineUsers += 1;
    }
  }
  return onlineUsers;
}
// Only change code above this line

countOnline(users);