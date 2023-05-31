const printTotalAmount = require("./calculator");

describe('printTotalAmount', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('should print the correct congestion charge amount', () => {

    const dateTimeString = "2023-05-31 17:45";
    const expectedOutput = "The total fee is 13 kr";

    printTotalAmount(dateTimeString);

    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });

  it('should print the correct congestion charge amount when given several passages', () => {

    const dateTimeStringList = "2023-05-31 08:00, 2023-05-31 12:00, 2023-05-31 12:45, 2023-05-31 17:45";
    const expectedOutput = "The total fee is 42 kr";

    printTotalAmount(dateTimeStringList);

    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });

});