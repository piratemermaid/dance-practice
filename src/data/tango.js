const videoUrls = {
  '5beginnersteps':
    'https://www.youtube.com/embed/pSXDkPHx1_w?si=0Z-7E5_N2yiNJBFb&amp;start=',
};

const tango = {
  name: 'Tango',
  frame: ['Turn head left and be snooty'],
  steps: [
    {
      name: 'Basic',
      footwork: [
        { count: '1-2', countDesc: 'slow', foot: 'right', direction: 'back' },
        { count: '3-4', countDesc: 'slow', foot: 'left', direction: 'back' },
        { count: 5, countDesc: 'quick', foot: 'right', direction: 'back' },
        { count: 6, countDesc: 'quick', foot: 'left', direction: 'side' },
        {
          count: 7,
          countDesc: 'quick',
          foot: 'right',
          direction: 'close',
          technique: 'slide',
        },
      ],
      technique: [
        'Roll step',
        "Pull right foot in for feet together, don't put weight on it",
      ],
      videoUrl: videoUrls['5beginnersteps'] + '74',
    },
    {
      name: 'Promenade',
      footwork: [
        {
          count: '1-2',
          countDesc: 'slow',
          foot: 'right',
          direction: 'forward',
        },
        { count: '3', countDesc: 'slow', direction: 'forward' },
        { count: '4', countDesc: 'and', technique: 'pivot' },
        {
          count: 5,
          countDesc: 'quick',
          foot: 'right',
          direction: 'back',
          technique: 'back to basic',
        },
        { count: 6, countDesc: 'quick', foot: 'left', direction: 'side' },
        { count: 7, countDesc: 'quick', foot: 'right', direction: 'close' },
      ],
      technique: ['Turn to face forward and walk forward', 'Pivot on the and'],
      videoUrl: videoUrls['5beginnersteps'] + '373',
    },
    {
      name: 'Corte',
      technique: ['Keep hips forward, point left foot'],
      footwork: [
        {
          count: '1-2',
          countDesc: 'slow',
          foot: 'right',
          direction: 'forward',
          technique: 'bend forward',
        },
        { count: '3-4', countDesc: 'slow', foot: 'left' },
        {
          count: 5,
          countDesc: 'quick',
          foot: 'right',
          direction: 'back',
          technique: 'back to basic',
        },
        { count: 6, countDesc: 'quick', foot: 'left', direction: 'side' },
        { count: 7, countDesc: 'quick', foot: 'right', direction: 'close' },
      ],
      videoUrl: videoUrls['5beginnersteps'] + '608',
    },
  ],
};

export default tango;
