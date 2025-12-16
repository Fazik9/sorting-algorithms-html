// Dataset
const people = [
  { id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician', accomplishment: 'spaceflight calculations', imageId: 'MK3eW3A' },
  { id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist', accomplishment: 'discovery of Arctic ozone hole', imageId: 'mynHUSa' },
  { id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist', accomplishment: 'electromagnetism theory', imageId: 'bE7W1ji' },
  { id: 3, name: 'Percy Lavon Julian', profession: 'chemist', accomplishment: 'pioneering cortisone drugs, steroids and birth control pills', imageId: 'IOjWm71' },
  { id: 4, name: 'Subrahmanyan Chandrasekhar', profession: 'astrophysicist', accomplishment: 'white dwarf star mass calculations', imageId: 'lrWQx8l' }
];

// Task 0: Remove imageId from all people
const cleanedPeople = people.map(p => {
  const { imageId, ...rest } = p;
  return rest;
});

// Task 1: Categorize chemists vs non-chemists
const chemists = cleanedPeople.filter(p => p.profession === "chemist");
const nonChemists = cleanedPeople.filter(p => p.profession !== "chemist");

// Task 2: People with exactly 3 tokens in their name
const threeWordNames = cleanedPeople.filter(p => p.name.split(" ").length === 3);

// Task 3a: Find first physicist
const firstPhysicist = cleanedPeople.find(p => p.profession === "physicist");

// Task 3b: Find index of first astrophysicist
const astrophysicistIndex = cleanedPeople.findIndex(p => p.profession === "astrophysicist");

// Task 3c: Check if all have a defined profession
const allHaveProfession = cleanedPeople.every(p => p.profession !== undefined);

// Logs so you can see output
console.log("Cleaned People:", cleanedPeople);
console.log("Chemists:", chemists);
console.log("Non-Chemists:", nonChemists);
console.log("Names with exactly 3 words:", threeWordNames);
console.log("First Physicist:", firstPhysicist);
console.log("Index of first Astrophysicist:", astrophysicistIndex);
console.log("Do all have professions?", allHaveProfession);
