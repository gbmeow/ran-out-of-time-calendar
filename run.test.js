let getResults = require('./run.js');
test("sample file produces expected output", () => {
    let jsonData = getResults();
    expect(jsonData[0].startDate).toEqual('20130802T103400');
  });