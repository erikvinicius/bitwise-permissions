export const convertDecimalToBinary = (
  decimal: number,
  withBinaryPrefix = true,
  bitSize = 16
) => {
  const parser = decimal.toString(2).padStart(bitSize, "0");

  return withBinaryPrefix ? `0b${parser}` : parser;
};

export default convertDecimalToBinary;
