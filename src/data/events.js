import { fullStoragePath } from './gcloudStorage';

const eventsPath = 'events%2F'

const events = [
  {
    id: 'out-stretched-hands',
    title: 'Out-streched Hands',
    image: fullStoragePath(`${eventsPath}1.jpeg`),
    date: '29th August 2019'
  },
  {
    id: 'the-power-in-your-hands',
    title: 'The Power In Your Hands',
    image: fullStoragePath(`${eventsPath}2.jpeg`),
  },
  {
    id: 'a-selfless-christmas',
    title: 'A Selfless Christmans',
    image: fullStoragePath(`${eventsPath}3.jpeg`),
  },
  {
    id: 'patriotism-early-leadership',
    title: 'Patriotism and Early Leadership In Nigeria',
    image: fullStoragePath(`${eventsPath}4.jpeg`),
  },
  {
    id: 'rehabilitation-of-library',
    title: 'Rehabilitation of Library',
    image: fullStoragePath(`${eventsPath}5.jpeg`),
  },
  {
    id: 'do-not-litter',
    title: '#DONOTLITTER',
    image: fullStoragePath(`${eventsPath}6.jpeg`),
  },
];

export default events;
