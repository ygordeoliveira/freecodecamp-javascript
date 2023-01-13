// Setup
function phoneticLookup(val) {
  // Only change code below this line
  let result = "";

  const lookup = {
     "alpha": "Adams",
     "bravo": "Boston",
     "charlie": "Chicago",
     "delta": "Denver",
     "echo": "Easy",
     "foxtrot": "Frank",
  };
   result = lookup[val];
     return result;
}

phoneticLookup("alpha");
phoneticLookup("bravo");
phoneticLookup("charlie");
phoneticLookup("delta");
phoneticLookup("echo");
phoneticLookup("foxtrot");
phoneticLookup("");
// Only change code above this line