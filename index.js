var CRC16 = require("./crc");

const buffer = new Buffer.from("helloworld");
const other = CRC16.GetCRC(buffer);
console.log("Crc : ", other);
