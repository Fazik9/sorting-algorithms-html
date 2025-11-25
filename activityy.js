

//activity 1
// check httpMethod and log what to do
let httpMethod = "POST";

if (httpMethod === "GET") {
  console.log("Fetching resource");
} else if (httpMethod === "POST") {
  console.log("Creating resource");
} else {
  console.log("Unsupported method");
}



// activity 2
// print "Checking server..." 5 times

for (let i = 0; i < 5; i++) {
  console.log("Checking server...");
}



// activity 3
// describeMethod with a default of "GET"

function describeMethod(method = "GET") {
  if (method === "GET") {
    return "Safe method";
  } else if (method === "POST") {
    return "Modifying method";
  } else {
    return "Other method";
  }
}

console.log(describeMethod("GET"));
console.log(describeMethod("POST"));
console.log(describeMethod("PUT"));
console.log(describeMethod());



// activity 4

let statusCodes = {
  200: "OK",
  403: "Forbidden",
  500: "Server Error",
};

for (let code in statusCodes) {
  console.log(`Status ${code} means ${statusCodes[code]}`);
}




// activity 5
// array of methods and print each as allowed

const allowed = ["GET", "POST", "PUT", "DELETE"];

allowed.forEach((m) => {
  console.log(`Allowed method: ${m}`);
});




///// if multiple users are adding to the cart at the same time, will this backendhandle it correctly?


///





