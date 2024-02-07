function checkName(name) {
  if (typeof name !== "string") return "invalid";

  name = name.toLowerCase();
  const lastWord = name.at(-1);
  switch (lastWord) {
    case "a":
    case "y":
    case "i":
    case "e":
    case "o":
    case "u":
    case "w":
      return "Good Name";
    default:
      return "Bad Name";
  }
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
