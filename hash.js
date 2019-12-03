const fs = require("fs");
const readline = require("readline");
const { hashPassword } = require("./utils/crypto");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readlineInterface.question("Please enter new master passwrod:", password => {
  readlineInterface.output.write("\n");

  const hashedPassword = hashPassword(password);
  fs.writeFileSync(".password", hashedPassword);

  console.log("New password saved");
  readlineInterface.close();
});

readlineInterface._writeToOutput = function() {
  readlineInterface.write("");
};

const password = process.argv[2];
const hashedPassword = hashPassword(password);
fs.writeFileSync(".password", hashedPassword);
