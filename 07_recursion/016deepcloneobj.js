// structuredClone()
// JSON.parse(JSON.stringify(...))
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  let cloned = {};
  for (const key in obj) {
    cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}

const sampleObject = {
  name: "Ali",
  age: 25,
  isActive: true,
  tags: ["developer", "javascript", "openai"],
  address: {
    street: "123 Main St",
    city: "Mumbai",
    pin: 400001,
  },
  scores: [95, 87, { subject: "Math", score: 99 }],
  createdAt: new Date("2024-10-01T10:00:00Z"),
  preferences: new Map([
    ["theme", "dark"],
    ["language", "en"],
  ]),
  greet: function () {
    return `Hello, ${this.name}`;
  },
  nullValue: null,
  undefinedValue: undefined,
};

const newObj = deepClone(sampleObject);
newObj.name = "Harshit";
console.log(newObj.name);
console.log(sampleObject.name);
