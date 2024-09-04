/**
 *
 * - It is used to slice the string according to length, passed accordingly in arguments i.e num
 */
export const turncate = (str: string, num = 150) => {
  if (!str) return '';
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  } else {
    return str;
  }
};

/**
 * It is used to convert the first letter of string into uppercase
 * @param {*string} string
 * @returns
 */
export const ucFirst = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * It used to convert the frist letter to upper case of every words in a sentence.
 * @param string //Sentences
 * @param separator // separators
 * @returns
 */
export const ucFirstAll = (string: string, separator: string): string => {
  const part = string.trim().split(separator || ` `);
  if (part.length === 1) return ucFirst(string);
  let str = ``;
  part.map((p) => (str += `${ucFirst(p)} `));
  return str.trim();
};

/**
 * It used to unslufigy the string
 * @param string sentences
 * @returns
 */
export const unslufigy = (string: string) => {
  if (!string) return '';

  if (string.includes(`-`)) {
    const part = string.split(`-`);
    let str = '';
    part.map((p) => (str += `${ucFirst(p)} `));
    return str.trim();
  } else if (string.includes(`_`)) {
    const part = string.split(`_`);
    let str = '';
    part.map((p) => (str += `${ucFirst(p)} `));
    return str.trim();
  }
  return ucFirst(string);
};

export const getWidthString = (span: number) => {
  const width = (span / 12) * 100;
  return `flex: 0 0 ${width}%; max-width: ${width}%`;
};
