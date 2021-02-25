export const dateFormat = (x) => {
  const date = new Date(x);
  const getDate = date.getDate();
  const getMonth = date.getMonth() + 1;
  const day = getDate < 10 ? `0${getDate}` : getDate;
  const month = getMonth < 10 ? `0${getMonth}` : getMonth;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
