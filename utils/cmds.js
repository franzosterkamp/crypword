const fs = require("fs");

function read() {
  try {
    const jsonPw = fs.readFileSync("passwords.json", "utf-8");
    const passwords = JSON.parse(jsonPw);
    return passwords;
  } catch (error) {
    return {};
  }
}

function write(passwords) {
  const data = JSON.stringify(passwords, null, 2);
  fs.writeFileSync(`passwords.json`, data);
}

function get(key) {
  const passwords = read();
  return passwords[key];
}

function set(key, value) {
  const passwords = read();
  passwords[key] = value;
  write(passwords);
}

function unset(key) {
  const passwords = read();
  delete passwords[key];
  write(passwords);
}

exports.get = get;
exports.set = set;
exports.unset = unset;
