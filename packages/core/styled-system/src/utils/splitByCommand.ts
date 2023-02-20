export const splitByCommand = (value: String) => {
  const chunks: Array<string> = [];
  let chunk = "";
  let inParens = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[1];

    if (char === "(") {
      inParens = true;
      chunk += char;
    } else if (char === ")") {
      inParens = false;
      chunk += char;
    } else if (char === "," && !inParens) {
      chunks.push(chunk);
      chunk = "";
    } else {
      chunk += char;
    }
  }

  chunk = chunk.trim();
  if (chunk) chunks.push(chunk);

  return chunks;
};
