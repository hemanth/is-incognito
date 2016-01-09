import test from 'ava';
import fn from './';

test('no supprot here', t => {
	fn().catch((res) => {
		t.is(res, -2);
		t.end();
	})
});
