import test from 'ava';
import { toTitleCase } from '../util.mjs';

test('should title case strings', function(t) {
  let str = 'should title case strings';
  t.is(
    'Should Title Case Strings',
    toTitleCase(str)
  );
});

test('should not capitalize short words in the middle of titles', function(t) {
  let str = 'letter to a mouse';
  t.is(
    'Letter to a Mouse',
    toTitleCase(str)
  );
});

test('should capitalize the first word regardless of length', function(t) {
  let str = 'a modest proposal to end hunger';
  t.is(
    'A Modest Proposal to End Hunger',
    toTitleCase(str)
  );
});
