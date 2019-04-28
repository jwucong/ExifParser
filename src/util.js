const base64Reg = /^data:([^;]+);base64,(.+)$/gmi;

function is(value, type) {
  const c = Object.prototype.toString.call(value).slice(8, -1);
  return typeof type === 'string' ? type.toLocaleLowerCase() === c.toLocaleLowerCase() : c;
}

function hasOwnProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

function base64ToArrayBuffer(base64) {
  const match = base64Reg.exec(base64);
  if (!match) {
    return null;
  }
  const imageData = match[2];
  const binary = atob(imageData);
  const size = binary.length;
  const buffer = new ArrayBuffer(size);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < size; i++) {
    view[i] = binary.charCodeAt(i);
  }
  return buffer;
}

export {
  is,
  hasOwnProperty,
  base64ToArrayBuffer,
};
