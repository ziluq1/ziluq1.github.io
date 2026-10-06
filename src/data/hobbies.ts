// Scrambled polaroid positions for desktop, tablet, and phone. Photos stay in public/images/.

const hobbySources = [
  "/images/s-blob-v1-IMAGE-4-Uh26pPz0E.jpg",
  "/images/s-blob-v1-IMAGE-8yh6e8DWcPg.jpg",
  "/images/s-blob-v1-IMAGE-93l_-7CG640.jpg",
  "/images/s-blob-v1-IMAGE-BugSMBS0JrQ.jpg",
  "/images/s-blob-v1-IMAGE-CPZZYY_ZWGA.jpg",
  "/images/s-blob-v1-IMAGE-hgwKJEhp2wQ.jpg",
  "/images/s-blob-v1-IMAGE-IDEhtidHbk4.jpg",
  "/images/s-blob-v1-IMAGE-lKQnfLyyl7Y.jpg",
  "/images/s-blob-v1-IMAGE-nREFkEcZqmE.jpg",
  "/images/s-blob-v1-IMAGE-Pr0wU1NT4Lo.jpg",
  "/images/s-blob-v1-IMAGE-q9BuDDmdfao.jpg",
  "/images/s-blob-v1-IMAGE-usyn3kmI2co.jpg",
  "/images/s-blob-v1-IMAGE-vZS7CmeFR7g.jpg",
  "/images/s-blob-v1-IMAGE--fiYBKoih3M.jpg",
  "/images/s-blob-v1-IMAGE-jTfS5M-kQng.jpg",
  "/images/s-blob-v1-IMAGE-eHeejckJPD4.jpg",
  "/images/s-blob-v1-IMAGE-fHEEZeRwE-o.jpg",
  "/images/s-blob-v1-IMAGE-OaiVpmEUQFE.jpg",
];

const desktop = [
  [3, 2, -6, 23], [28, 0, 4, 21], [50, 7, -3, 24], [75, 2, 5, 21],
  [1, 20, 3, 22], [26, 25, -5, 25], [52, 16, 2, 20], [74, 23, -4, 22],
  [8, 38, -2, 23], [34, 34, 6, 22], [58, 41, -6, 20], [76, 36, 3, 20],
  [24, 56, -3, 24], [50, 49, 5, 23], [74, 54, -5, 21],
  [12, 64, -4, 20], [40, 61, 3, 22], [62, 66, -2, 22],
];

const tablet = [
  [2, 1, -5, 32], [36, 0, 4, 30], [66, 5, -3, 30],
  [0, 15, 3, 30], [34, 18, -6, 32], [68, 13, 2, 28],
  [6, 30, -2, 31], [38, 28, 5, 30], [64, 33, -4, 30],
  [1, 43, 4, 30], [32, 46, -3, 33], [66, 41, 3, 30],
  [40, 56, 2, 28], [64, 61, -2, 30],
  [2, 69, 4, 31], [36, 67, -4, 30], [66, 71, 3, 28],
  [22, 36, 5, 26],
];

const phone = [
  [4, 2, -6, 52], [42, 2, 5, 50],
  [2, 9, 4, 48], [44, 11, -5, 50],
  [4, 18, -3, 50], [46, 20, 4, 48],
  [4, 27, 3, 50], [40, 30, -4, 48],
  [4, 36, -5, 48], [46, 38, 3, 50],
  [2, 46, 4, 50], [42, 48, -3, 48],
  [44, 57, 5, 48],
  [16, 14, -4, 42], [10, 33, 3, 40],
  [18, 42, -5, 42], [4, 64, 2, 46], [46, 66, -3, 46],
];

export const hobbyPhotos = hobbySources.map((src, index) => {
  const [x, y, rotation, w] = desktop[index];
  const [tx, ty, , tw] = tablet[index];
  const [mx, my, , mw] = phone[index];
  return {
    src,
    alt: `Hobby photograph ${index + 1}`,
    rotation,
    x: `${x}%`,
    y: `${y}%`,
    w: `${w}%`,
    tx: `${tx}%`,
    ty: `${ty}%`,
    tw: `${tw}%`,
    mx: `${mx}%`,
    my: `${my}%`,
    mw: `${mw}%`,
  };
});
