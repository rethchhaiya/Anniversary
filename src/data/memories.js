// ─────────────────────────────────────────────────────────────
// OUR MEMORIES
//
// To add a real photo:
//   1. Put the image in  src/assets/images/
//   2. Import it at the top of this file, for example:
//        import firstDate from '../assets/images/first-date.jpg'
//   3. Set  src: firstDate  on the matching memory below.
//   4. Replace the alt text with a short description of the photo.
//
// When `src` is null the gallery shows a clearly labelled placeholder.
// Captions are optional — set caption to '' to hide one.
// Add or remove objects freely; the grid adapts.
// ─────────────────────────────────────────────────────────────

import mc from '../assets/images/1.png'
import mc1 from '../assets/images/2026-05-21_16.25.54.png'
import mc2 from '../assets/images/MedalTVRoblox20260819004057226.png'
import mc3 from '../assets/images/photo_2026-11-01_19-17-35.jpg'
import mc4 from '../assets/images/Screenshot 2026-05-06 012607.png'
import mc5 from '../assets/images/2026-05-23_14.28.22.png'



export const memories = [
  {
    id: 'memory-1',
    src: mc,
    alt: 'Placeholder for a photo of one of our memories',
    caption: 'Team kbal kmoch ToT',
  },
  {
    id: 'memory-2',
    src: mc1,
    alt: 'Placeholder for a photo of one of our memories',
    caption: 'Wizard hahaha',
  },
  {
    id: 'memory-3',
    src: mc2,
    alt: 'Placeholder for a photo of one of our memories',
    caption: 'Jab sat ni nk idol',
  },
  {
    id: 'memory-4',
    src: mc4,
    alt: 'Placeholder for a photo of one of our memories',
    caption: 'Luch sl ke tixtix',
  },
  {
    id: 'memory-5',
    src: mc3,
    alt: 'Placeholder for a photo of one of our memories',
    caption: 'Som idol take pic haha',
  },
  {
    id: 'memory-6',
    src: mc5,
    alt: 'Placeholder for a photo of one of our memories',
    caption: 'luch take kon srey ke hehe',
  },
]
