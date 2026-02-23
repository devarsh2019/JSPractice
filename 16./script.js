function uniqueCharacters(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }

    console.log("Unique Characters of : " + str);
    console.log(result);
}

uniqueCharacters("thequickbrownfoxjumpsoverthelazydog");
