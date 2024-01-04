
async function getAllUser() {
  try {
    const response = await fetch("https://github.com/hiteshchoudhary/apihub");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUser();