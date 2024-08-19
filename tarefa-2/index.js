const { getUser } = require("./services/service.js");

async function fetchUserData() {
  try {
    const data = await getUser();
    data.forEach((user) => {
      const inicialC = user.name;
      if (inicialC.substr(0,1) === "C") {
       return console.log(user.name);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

fetchUserData();
