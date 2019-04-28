export default function getSegments(buffer) {
  const view = new DataView(buffer);
  const size = buffer.byteLength;
  const segments = [];
  let offset = 2;
  let current;
  let next;
  let end;
  let dataSize;

  if (view.getUint8(0) !== 0xFF && view.getUint8(1) !== 0xD8) {
    return [];
  }

  while (offset < size) {
    current = view.getUint8(offset);
    next = view.getUint8(offset + 1);
    dataSize = 1;
    if (current !== 0xFF) {
      return segments;
    }
    if (next === 0 || next === 0xFF) {
      offset++;
    } else {
      dataSize = view.getUint16(offset + 2, false);
      end = offset + 2 + dataSize + 1;
      end = end > size ? size : end;
      segments.push(buffer.slice(offset, end));
      offset += (2 + dataSize);
    }
  }
  return segments;
}
