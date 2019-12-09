import { toTitleCase } from '../util.js';

test('should title case strings', function() {
  let str = 'should title case strings';
  expect(toTitleCase(str)).toBe('Should Title Case Strings');
});

test('should not capitalize short words in the middle of titles', function() {
  let str = 'letter to a mouse';
  expect(toTitleCase(str)).toBe('Letter to a Mouse');
});

test('should capitalize the first word regardless of length', function() {
  let str = 'a modest proposal to end hunger';
  expect(toTitleCase(str)).toBe('A Modest Proposal to End Hunger');
});
