// Third party module
const moment = require("moment");

// Local Module
const penjumlahan = require("./modules/local/penjumlahan");

// Core Module
const os = require("os");

function getCurrentDate() {
    const date = new Date();
    const current_date = moment(date).format("YYYY/MM/DD hh:mm:ss");

    console.info("Hari ini : "+current_date);
}

function getHasilPenjumlahan(param1, param2) {
    penjumlahan(param1, param2);
}

function getMemoryLaptop() {
    console.log("Sisa Memory: " + os.freemem());
}

getCurrentDate();
getHasilPenjumlahan(1, 2);
getMemoryLaptop();

console.log("================================");

// Write & read File
const fs = require("fs");

function readFile() {
    const isi = fs.readFileSync("./assets/hello.txt");
    console.info("Ini Isis File Hello.text : "+ isi);
}

function writeFile() {
    fs.writeFileSync("./assets/hasil-buat-file.txt", "Ini Hasil Buatan writeFile function core Module");
}

readFile();
writeFile();