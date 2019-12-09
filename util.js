export function toTitleCase(str) {
  return str
    .split(' ')
    .map((word, index) => word.length > 2 || index === 0 ? word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase() : word)
    .join(' ');
};
