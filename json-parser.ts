const sample = `
{
  "number": 0,
  "string": "hello",
  "boolean": false,
  "json": {
      "number": -1,
      "string": 'world',
      "boolean": true
  }
}
`;

function JSONParser(string: string): {
  [key: string]: string
} {
  const json = {};
  
  return json;
}
