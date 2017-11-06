export function getFileExtension(filename) {
  return filename.substring(filename.lastIndexOf('.') + 1);
}

export function getFileName(filename) {
  return filename.substring(filename.lastIndexOf('/') + 1);
}

export function parseArabicChar(str) {
  return Number(
    str
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => d.charCodeAt(0) - 1632)
      .replace(/٫/g, '.'),
  );
}

export function hasArabicChar(str) {
  let arabic = /[\u0600-\u06FF]/;
  return arabic.test(str);
}

export function numberWithCommas(number) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
