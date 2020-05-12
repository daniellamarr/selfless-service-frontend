import { fullStoragePath } from './gcloudStorage';

const eventsPath = 'events%2F'

const events = [
  {
    title: 'Out-streched Hands',
    image: fullStoragePath(`${eventsPath}1.jpeg`),
    date: '29th August 2019'
  },
  {
    title: 'The Power In Your Hands',
    image: fullStoragePath(`${eventsPath}2.jpeg`),
  },
  {
    title: 'A Selfless Christmans',
    image: fullStoragePath(`${eventsPath}3.jpeg`),
  },
  {
    title: 'Patriotism and Early Leadership In Nigeria',
    image: fullStoragePath(`${eventsPath}4.jpeg`),
  },
  {
    title: 'Rehabilitation of Library',
    image: fullStoragePath(`${eventsPath}5.jpeg`),
  },
  {
    title: '#DONOTLITTER',
    image: fullStoragePath(`${eventsPath}6.jpeg`),
  },
];

export default events;
