const name = "Jude" + " Bona";
const course = "Computer and information Systems";
const year = new Date().getFullYear();

console.log(`Name: ${name}`);
console.log(`Course: ${course}`);
console.log(`Year: ${year}`);

function formatGreeting(name, course, year) {
  return `Hi, I'm ${name}, studying ${course} in ${year}.`;
}

console.log(formatGreeting(name, course, new Date().getFullYear()));