const videoUrls = {
  '7beginnersteps':
    'https://www.youtube.com/embed/PX9Avh3bpL4?si=4jBS42gXpjQs1nwx&amp;start=',
  americansteps:
    'https://www.youtube.com/embed/FyopJ7GGElI?si=V8FR1mHPEZXDgHfh&amp;start=',
};

const rumba = {
  name: 'Rumba',
  frame: ['More closed than waltz', 'Elbow up', 'Like holding a beach ball'],
  steps: [
    {
      name: 'Basic',
      description: 'Slow, quick quick slow, quick quick',
      footwork: [
        {
          countDesc: 'slow',
          count: '1-2',
          foot: 'right',
          direction: 'back',
        },
        {
          countDesc: 'quick',
          count: 3,
          foot: 'left',
          direction: 'left',
        },
        {
          countDesc: 'quick',
          count: 4,
          foot: 'right',
          direction: 'close',
        },
        {
          countDesc: 'slow',
          count: '5-6',
          foot: 'left',
          direction: 'forward',
        },
        {
          countDesc: 'quick',
          count: 7,
          foot: 'right',
          direction: 'right',
        },
        {
          countDesc: 'quick',
          count: 8,
          foot: 'left',
          direction: 'close',
        },
      ],
      notes: ['Slide on balls of feet like moving tissues'],
      gifName: 'rumba-basic',
      videoUrl: videoUrls['7beginnersteps'] + '109',
    },
    {
      name: 'Slow Underarm Turn',
      footwork: [
        {
          count: '5-6',
          countDesc: 'slow',
          foot: 'left',
          direction: 'in box step',
        },
        {
          count: 7,
          countDesc: 'quick',
          foot: 'right',
          direction: 'start to turn right',
        },
        {
          count: '8-2',
          countDesc: 'quick slow',
          foot: '',
          direction: 'turn',
        },
        {
          count: 3,
          countDesc: 'quick',
          foot: 'right',
          direction: 'toward partner',
        },
        {
          count: 4,
          countDesc: 'quick',
          foot: 'left',
          direction: 'forward',
          technique: 'back into box step',
        },
      ],
      notes: ['6 steps, but 6th step is back into box', 'Do fun arm thing'],
      videoUrl: videoUrls['7beginnersteps'] + '670',
    },
    {
      name: 'Outside Rockstep',
      footwork: [
        {
          count: '1-4',
          countDesc: 'slow quick quick',
          direction: 'regular box step',
        },
        { count: '5-6', countDesc: 'slow', foot: 'left', direction: 'left' },
        {
          count: 7,
          countDesc: 'quick',
          foot: 'right',
          direction: 'diagonal',
          technique: 'rockstep',
        },
        {
          count: 8,
          countDesc: 'quick',
          foot: 'left',
          direction: 'more rocksteps or back into box',
        },
      ],
      notes: [
        'After first slow quick quick, go to side and rockstep diagonally',
      ],
      videoUrl: videoUrls['7beginnersteps'] + '528',
    },
    {
      name: 'Cross Body Lead',
      footwork: [
        {
          count: '1-4',
          countDesc: 'slow quick quick',
          direction: 'regular box step',
        },
        { count: '5-6', countDesc: 'slow', foot: 'left', direction: 'forward' },
        { count: 7, countDesc: 'quick', foot: 'right', direction: 'forward' },
        {
          count: 8,
          countDesc: 'quick',
          foot: 'left',
          direction: 'forward',
          technique: 'pivot on and',
        },
        { count: '1-2', countDesc: 'slow', foot: 'right', direction: 'back' },
        { count: 3, countDesc: 'quick', foot: 'left', direction: 'side' },
        { count: 4, countDesc: 'quick', foot: 'right', direction: 'together' },
        {
          count: '5-6',
          countDesc: 'slow',
          foot: 'left',
          direction: 'back into box',
        },
      ],
      notes: [
        'After first slow quick quick, forward -> forward & pivot on left? -> step together? -> back into box step',
      ],
      videoUrl: videoUrls['7beginnersteps'] + '1141',
    },
    {
      name: 'Rumba Walk',
      description:
        'Half a box step to partners side by side to walking round like a #girlboss',
      footwork: [
        {
          count: '1-4',
          countDesc: 'slow quick quick',
          direction: 'regular box step',
        },
        { count: '5-6', countDesc: 'slow', foot: 'left', direction: 'forward' },
        { count: '7', countDesc: 'quick', foot: 'right', direction: 'forward' },
        { count: '8', countDesc: 'quick', foot: 'left', direction: 'forward' },
        {
          count: '1-2',
          countDesc: 'slow',
          foot: 'right',
          direction: 'forward',
          technique: 'pivot on and',
        },
        { count: 3, countDesc: 'quick', foot: 'left', direction: 'side rock' },
        {
          count: 4,
          countDesc: 'quick',
          foot: 'right',
          direction: 'same place',
        },
        {
          count: '5-7',
          countDesc: 'slow',
          direction: 'walk around',
          technique: 'fun arms',
        },
        {
          count: 8,
          countDesc: 'quick',
          foot: 'right',
          direction: 'pivot then back into box',
        },
      ],
      videoUrl: videoUrls['americansteps'] + '68',
    },
  ],
};

export default rumba;
