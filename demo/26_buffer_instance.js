/* buf.length, buf.toString(), buf.fill(), buf.equals(), buf.indexOf(), buf.copy() */

const buf = Buffer.from('This is a test!');

console.log(buf.length);

const buf2 = Buffer.allocUnsafe(10);
buf2[0] = 2;
console.log(buf2.length);

console.log(buf.toString());
console.log(buf.toString('base64'));

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
console.log(buf3.fill(10, 2, 6));

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');
console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));

console.log(buf4.indexOf('st'));
console.log(buf4.indexOf('ast'));
