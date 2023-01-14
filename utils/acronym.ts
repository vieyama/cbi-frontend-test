const getAcronym = (name: string) => {
  const splittedName = name.split(" ");
  let acronym = name;
  if (splittedName.length > 1) {
    acronym = splittedName.reduce(
      (response, word) => response + word.slice(0, 1),
      ""
    );
  }
  acronym = acronym.slice(0, 2).toUpperCase();

  return { acronym };
};

export default getAcronym;
