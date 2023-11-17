export function isPalidrome(str: string): boolean {
  let strWithoutSpaces = str.replace(/\s/g, '');
  return strWithoutSpaces === strWithoutSpaces.split('').reverse().join('');
}
