export const getTimeDifference = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const diffInSeconds = diff / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const diffInWeeks = diffInDays / 7;
  const diffInYears = diffInDays / 365;

  if (diffInYears > 1) {
    return `${Math.round(diffInYears)} y`;
  } else if (diffInWeeks > 0) {
    return `${Math.round(diffInWeeks)} w`;
  } else if (diffInDays > 0) {
    return `${Math.round(diffInDays)} d`;
  } else if (diffInHours > 0) {
    return `${Math.round(diffInHours)} h`;
  } else return `${Math.round(diffInMinutes)} m`;
};
