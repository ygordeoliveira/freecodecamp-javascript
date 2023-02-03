let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  let namesOfUsers = ["Alan", "Jeff", "Sarah", "Ryan"];

  for (let i = 0; i < namesOfUsers.length; i++) {
    let name = namesOfUsers[i];
    if (userObj.hasOwnProperty(name) === false) {
      return false;
    } 
  }
  return true;
}
// Only change code above this line

isEveryoneHere(users);

