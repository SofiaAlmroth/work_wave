export function paginate<T>(
  items: T[],
  pageSize: number,
  selectedPage: number
) {
  const startIndex = pageSize * (selectedPage - 1);
  const endIndex = pageSize * selectedPage;

  return items.slice(startIndex, endIndex);
}

export function normalizeString(input: string) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/ø/g, "o")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/\s+/g, " ");
}
