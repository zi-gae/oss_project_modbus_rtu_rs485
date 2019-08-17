GetCRC = buffer => {
  let crc = 0xffff;
  let odd;

  for (let i = 0; i < buffer.length; i++) {
    crc = crc ^ buffer[i];

    for (let j = 0; j < 8; j++) {
      odd = crc & 0x0001;
      crc = crc >> 1;
      if (odd) {
        crc = crc ^ 0xa001;
      }
    }
  }

  return crc;
};
exports.GetCRC = GetCRC;
