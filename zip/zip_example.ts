// @ts-ignore
import JSZip from 'node-zip';

const zip = new JSZip;
zip.file('test1.file', 'hello there 1');
zip.file('test2.file', 'hello there 2');
const data = zip.generate({ base64: false, compresion: 'DEFLATE' });
console.log('Zip', data);

console.log("=============================================");

// @ts-ignore
const unzzip = new require('node-zip')(data, { base64: false, compresion: 'DEFLATE' });
const contentUint8_test1 = unzzip.files['test1.file']._data.getContent();
const contentUint8_test2 = unzzip.files['test2.file']._data.getContent();
const test1 = new TextDecoder().decode(contentUint8_test1);
const test2 = new TextDecoder().decode(contentUint8_test2);
console.log(test1);
console.log(test2);
