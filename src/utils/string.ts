export function capitalize(value: string): string {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}
export function capitalizeWords(value: string): string {
  if (!value) return '';
  return value
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
}