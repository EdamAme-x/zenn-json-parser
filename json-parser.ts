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

function removeSpaces(str): string {
  let result = '';
  let quoted = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '"') {
      quoted = !quoted;
      result += '"';
    } else if (str[i] !== ' ' || quoted) {
      result += str[i];
    }
  }

  return result;
}

function JSONParser(text: string): {
  [key: string]: any
} {
  const json = {};

  text = removeSpaces(text)

  let target = "";
  let next = "";
  let pointer = 0;
  const length = text.length;
  
  return json;
}
