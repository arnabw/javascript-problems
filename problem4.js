function password(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    if (
      obj.hasOwnProperty("name") &&
      obj.hasOwnProperty("birthYear") &&
      obj.hasOwnProperty("siteName")
    ) {
      let birthYearCondition = obj.birthYear.toString();
      birthYearCondition = birthYearCondition.length;
      if (birthYearCondition === 4) {
        obj.siteName = obj.siteName.at(0).toUpperCase() + obj.siteName.slice(1);
        return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
      }
    }
  }
  return "invalid";
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
