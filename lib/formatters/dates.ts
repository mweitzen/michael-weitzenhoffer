export function formatDateSimple(date: Date) {
  const fx = Intl.DateTimeFormat("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return fx.format(date);
}

export function formatTimeSimple(date: Date) {
  const fx = Intl.DateTimeFormat("default", {
    timeStyle: "short",
  });

  return fx.format(date);
}
