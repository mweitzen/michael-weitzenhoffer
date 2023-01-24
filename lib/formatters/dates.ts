export function formatDateSimple(date: Date | string) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const fx = Intl.DateTimeFormat("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return fx.format(date);
}

export function formatTimeSimple(date: Date | string) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const fx = Intl.DateTimeFormat("default", {
    timeStyle: "short",
  });

  return fx.format(date);
}
