function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('ru');
}

export default formatDate;
