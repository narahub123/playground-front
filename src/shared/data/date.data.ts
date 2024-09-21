const startYear = 1900;
const currentYear = new Date().getFullYear();

export const yearList: number[] = [];
for (let year = startYear; year <= currentYear; year++) {
  yearList.unshift(year);
}

export const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const lastDateOfMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export const dateList = (year: number = currentYear, month: number = 1) => {
  const dates = [];

  for (let i = 1; i <= lastDateOfMonth(year, month); i++) {
    dates.push(i);
  }

  return dates;
};
