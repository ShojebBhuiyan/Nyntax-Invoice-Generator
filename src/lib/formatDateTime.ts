export function formatDateTime(input: string): string {
  const date = new Date(input);

  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const month = months[date.getMonth()];
  const day = ("0" + date.getDate()).slice(-2);
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = hours + ':' + minutes + ' ' + ampm;

  return `${month}/${day}/${year} ${strTime}`;
}
