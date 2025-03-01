
const Conversion = (camelCaseStr) => {
  let spacedStr = camelCaseStr.replace(/([A-Z])/g, ' $1');
  let result = spacedStr.replace(/\b\w/g, char => char.toUpperCase());
  return result.trim();
}

export default Conversion