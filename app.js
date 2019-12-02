const [cmd, key, value] = process.argv.slice(2);

const passwords = {
  wifi: 123,
  mac: "mac444"
};

switch (cmd) {
  case "get":
    passwords[key];

    break;

  case "set":
    passwords[key] = value;
    break;

  case "unset":
    delete passwords[key];
    break;

  default:
    console.log("error");
}

console.log(passwords);
