function greetings(nameArray, jobObject) {
  let fullName = nameArray.join(" ");
  let job = jobObject.title + " " + jobObject.occupation;

  console.log(`Hello, ${fullName}! Nice to have a ${job} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });
