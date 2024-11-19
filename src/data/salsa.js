const videoUrls = {
  beginners:
    'https://www.youtube.com/embed/t_clXFnHJEU?si=zKv84ZyPdcz_Lea7&amp;start=',
};

const salsa = {
  name: 'Salsa',
  steps: [
    {
      name: 'Basic',
      footwork: [
        { count: 1, foot: 'right', direction: 'back' },
        { count: 2, foot: 'left', direction: 'place' },
        { count: '3-4', foot: 'right', direction: 'close' },
        { count: 5, foot: 'left', direction: 'forward' },
        { count: 6, foot: 'right', direction: 'place' },
        { count: '7-8', foot: 'left', direction: 'close' },
      ],
      videoUrl: videoUrls.beginners + '85',
    },
    {
      name: 'Underarm Turn',
      footwork: [
        { count: 1, foot: 'right', direction: 'back' },
        { count: 2, foot: 'left', direction: 'place' },
        { count: '3-4', foot: 'right', direction: 'close' },
        { count: 5, foot: 'left', direction: 'forward' },
        { count: 6, foot: 'right', direction: 'pivot' },
        { count: '7-8', foot: 'left', direction: 'back to basic' },
      ],
      videoUrl: videoUrls.beginners + '157',
    },
    {
      name: 'Cross Body Lead',
      videoUrl: videoUrls.beginners + '352',
    },
    {
      name: 'Underarm Turn',
      footwork: [
        { count: 1, foot: 'right', direction: 'back' },
        { count: 2, foot: 'left', direction: 'place' },
        { count: '3-4', foot: 'right', direction: 'close' },
        { count: 5, foot: 'left', direction: 'forward' },
        { count: 6, foot: 'right', direction: 'pivot' },
        { count: '7-8', foot: 'left', direction: 'back to basic' },
      ],
      videoUrl: videoUrls.beginners + '478',
    },
  ],
};

export default salsa;
