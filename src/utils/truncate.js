const truncate = (str = '') => {
  const len = str.length;
  if (len > 100) {
    return str.substr(0, 101) + '. . .';
  }
  return str;
}

export default truncate;
