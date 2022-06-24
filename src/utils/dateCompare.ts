export function dateCompare(date: Date) {
  const today = new Date(date);
  // Data inicio
  const dateNow = new Date();
  const dateStart = new Date(dateNow.setHours(1, 0, 0, 1));
  // Data final
  const dateEnd = new Date(dateNow.setHours(23, 59, 59, 999));
  // Data que vamos comparar
  console.log({ dateStart, dateEnd, date });
  if (
    dateStart.getTime() < today.getTime() &&
    dateEnd.getTime() > today.getTime()
  ) {
    return true;
  } else {
    return false;
  }
}
