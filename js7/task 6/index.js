const cafe = {
    name: "Republic",
    width: 200,
    height: 300,
    personal: 5,
    hr: true,
};

console.log(`Square:${cafe.width * cafe.height}`);

const entries = Object.entries(cafe);

for (entry of entries) {
    console.log(entry[0], ":", entry[1]);
};