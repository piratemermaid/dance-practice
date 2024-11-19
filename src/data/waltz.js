const waltz = {
  name: 'Waltz',
  frame: [
    'Wide, like tango but less snooty - neck should not hurt',
    'Hand on back',
    'Turn a little so on left side',
  ],
  timeSignature: '3/4',
  steps: [
    {
      name: 'Basic',
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
      gifName: 'waltz-basic',
      videoUrl:
        'https://www.youtube.com/embed/-ewZ4bWRkVo?si=Cgbn49ibE3gSAN7u&amp;start=83',
    },
    {
      name: 'Progressive',
      notes: ['Box step going forward or backward - follow lead'],
      videoUrl:
        'https://www.youtube.com/embed/-ewZ4bWRkVo?si=Cgbn49ibE3gSAN7u&amp;start=339',
    },
    {
      name: 'Turning Box',
      description: 'Box step with a turn',
      notes: [
        'Smaller steps on inside, bigger steps on outside',
        'Follow leader & maintain leftish frame',
      ],
      videoUrl:
        'https://www.youtube.com/embed/-ewZ4bWRkVo?si=Cgbn49ibE3gSAN7u&amp;start=610',
    },
    {
      name: 'Underarm Turn',
      notes: [],
      footwork: [
        {
          count: 3,
          foot: 'left',
          direction: 'forward',
          technique: 'lead raise arm',
        },
        { count: 4, foot: 'right', direction: 'forward' },
        { count: '5-6', direction: 'curve around' },
        { count: 1, direction: 'curve back' },
        { count: 2, foot: 'left', direction: 'side' },
        { count: 3, foot: 'right', direction: 'close' },
        { count: 4, foot: 'left', direction: 'back into box step' },
      ],
      videoUrl:
        'https://www.youtube.com/embed/-ewZ4bWRkVo?si=Cgbn49ibE3gSAN7u&amp;start=983',
    },
  ],
};
export default waltz;
