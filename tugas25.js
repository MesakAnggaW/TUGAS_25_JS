let angka = "2 39 76 50 9 7 41 2 24 1 16";
angka = angka.split(" ");

console.log("Sebelumnya :", angka.toString());
console.log("Ascending :", angka.sort().toString());
console.log("Descending :", angka.sort().reverse().toString());
console.log("Filter > 10 :", angka.filter((x) => { return x > 10 }).toString());