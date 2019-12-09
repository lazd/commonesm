import { toTitleCase } from './util.mjs';

let title = toTitleCase(`i'm a little module`);

console.log(title);

export {
  title
};
