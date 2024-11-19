const waltz = {
  name: 'Waltz',
  frame: [
    'Wide, like tango but less snooty - neck should not hurt',
    'Hand on back',
    'Turn a little so on left side',
  ],
  timeSignature: '3/4',
  basic: {
    footwork: [
      { count: 1, foot: 'right', direction: 'back' },
      { count: 2, foot: 'left', direction: 'left', technique: 'rise' },
      { count: 3, foot: 'right', direction: 'close', technique: 'slide' },
      { count: 4, foot: 'left', direction: 'forward' },
      { count: 5, foot: 'right', direction: 'right', technique: 'rise' },
      { count: 6, foot: 'left', direction: 'close', technique: 'slide' },
    ],
    technique: [
      'Roll through feet',
      'Rise on 2nd step',
      'Weight on 1 foot at a time',
    ],
    videoUrl:
      'https://www.youtube.com/embed/-ewZ4bWRkVo?si=Cgbn49ibE3gSAN7u&amp;start=159;end=162',
  },
};

export default waltz;
