const gcloudStorage = 'https://firebasestorage.googleapis.com/v0/b/selfless-service-bcf73.appspot.com/o/';

const fullStoragePath = string => {
  return `${gcloudStorage}${string}?alt=media`;
}

export {
  gcloudStorage,
  fullStoragePath
}
