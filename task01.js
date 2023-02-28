"use strict";

const getUniqueIpCount = (arr) => {
  const uniqueIp = new Set(arr);
  return uniqueIp.size;
};

console.log(`Количество уникальных IP: `, getUniqueIpCount(listIPv4));
