const TimeRange = {
  RANGE_1: { start: 600, end: 629, price: 8 },
  RANGE_2: { start: 630, end: 659, price: 13 },
  RANGE_3: { start: 700, end: 759, price: 18 },
  RANGE_4: { start: 800, end: 829, price: 13 },
  RANGE_5: { start: 830, end: 1459, price: 8 },
  RANGE_6: { start: 1500, end: 1529, price: 13 },
  RANGE_7: { start: 1530, end: 1659, price: 18 },
  RANGE_8: { start: 1700, end: 1759, price: 13 },
  RANGE_9: { start: 1800, end: 1829, price: 8 },
  RANGE_10: { start: 1830, end: 559, price: 0 }
};

function getPrice(timeString) {
  const hour = parseInt(timeString.substr(0, 2), 10);
  const minute = parseInt(timeString.substr(3, 2), 10);

  const time = hour * 100 + minute;

  for (const rangeKey in TimeRange) {
    const range = TimeRange[rangeKey];
    if (time >= range.start && time <= range.end) {
      return range.price;
    }
  }

  return 0;
}

const printTotalAmount = (dateTimeString) => {
  const price = getPrice(dateTimeString.substr(11, 5));
  console.log(`The total fee is ${price} kr`);
}

module.exports = printTotalAmount;
