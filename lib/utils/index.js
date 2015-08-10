
export function className(list) {
  if (!list) return '';
  if (typeof list === 'string') return list;
  return list.join(' ');
}
