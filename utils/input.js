const readline = require("readline");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForPassword() {
  return new Promise(resolve => {
    readlineInterface.question("Please enter password:", password => {
      // Add line break
      readlineInterface.output.write("\n");
      resolve(password);
      readlineInterface.close();
    });
    // Override default output to hide password
    readlineInterface._writeToOutput = function() {
      readlineInterface.output.write("");
    };
  });
}

exports.askForPassword = askForPassword;
