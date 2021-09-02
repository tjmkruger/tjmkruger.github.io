
const longDateFormat = new Intl.DateTimeFormat("en-AU", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const monthDateFormat = new Intl.DateTimeFormat("en-AU", {
  month: "short",
  year: "numeric",
});

export type format = { fullDate: (dateString: string) => string, monthDate: (dateString: string) => string }

export const format: format = {
  fullDate: (dateString) => longDateFormat.format(new Date(dateString)),
  monthDate: (dateString) => monthDateFormat.format(new Date(dateString)),
};