export function isPalidrome(str: string): boolean {
  const strWithoutSpaces = str.replace(/\s/g, '');
  return strWithoutSpaces === strWithoutSpaces.split('').reverse().join('');
}
