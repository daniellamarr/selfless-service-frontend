const truncate = (str = '') => {
  const len = str.length;
  if (len > 200) {
    return str.substr(0, 201) + '. . .';
  }
  return str;
}

export default truncate;
