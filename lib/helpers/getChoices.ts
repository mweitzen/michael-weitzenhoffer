function getChoices(
  dataset: any[],
  key: string,
  options: { nestedKey?: string; transformer?: (self: any) => any }
) {
  if (!dataset) return [];

  const { nestedKey, transformer } = options;

  let rawChoices;

  if (!!nestedKey) {
    rawChoices = dataset.map((item) => item[key][nestedKey]);
  } else {
    rawChoices = dataset.map((item) => item[key]);
  }

  const choices = rawChoices.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  if (!!transformer) {
    return choices.map(transformer);
  }

  return choices;
}

export default getChoices;
