const info = {
    name: "Veronika",
    age: 14,
    sex: "female",
    married: false,
};

let str = "";
for (const key in info) {
    console.log(`Key:${key}`);
    console.log(`Value:${info[key]}`);
    str += info[key];
};

console.log(str);