const prependZero = (digit) => (digit = digit.length < 2 ? `0${digit}` : digit);

const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  month = prependZero(month);
  day = prependZero(day);

  return [year, month, day].join('-');
};

export default formatDate;
