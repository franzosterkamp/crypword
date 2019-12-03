const { get, set, unset } = require("./utils/cmds");
const { askForPassword } = require("./utils/input");
const { verifyHash, readMasterPassword } = require("./utils/crypto");
const userArgs = process.argv.slice(2);
const readline = require("readline");
const [cmd, key, value] = userArgs;

async function execute() {
  const hash = readMasterPassword();
  const password = await askForPassword();
  if (!verifyHash(password, hash)) {
    throw new Error("Falsches MasterPassword du Otto!");
  }
  switch (cmd) {
    case "get":
      {
        const result = await get(key);
        console.log(result);
      }
      break;

    case "set":
      await set(key, value);
      break;

    case "unset":
      await unset(key);
      break;

    default:
      console.error("Unknown command");
  }
}

execute();
