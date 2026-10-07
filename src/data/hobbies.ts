// Add new hobby photos here. Location is required; description is optional.
const hobbyPhotoEntries = [
  {
    src: "/images/s-blob-v1-IMAGE-vZS7CmeFR7g.jpg",
    location: "Chiyoda, Kanda Izumicho, Japan",
  },
  {
    src: "/images/s-blob-v1-IMAGE-usyn3kmI2co.jpg",
    location: "Folsom, Louisiana",
    description: "Close-up picture of Bison.",
  },
  {
    src: "/images/s-blob-v1-IMAGE-q9BuDDmdfao.jpg",
    location: "East Rock, New Haven, CT",
  },
  {
    src: "/images/s-blob-v1-IMAGE-OaiVpmEUQFE.jpg",
    location: "Nara, Takabatakecho, Japan",
  },
  {
    src: "/images/s-blob-v1-IMAGE-nREFkEcZqmE.jpg",
    location: "Davenport, Yale, New Haven",
  },
  {
    src: "/images/s-blob-v1-IMAGE-lKQnfLyyl7Y.jpg",
    location: "East Rock, New Haven, CT",
    description: "Hiking trip up East Rock.",
  },
  {
    src: "/images/s-blob-v1-IMAGE-jTfS5M-kQng.jpg",
    location: "Kyoto, Arashiyama Nakaoshitacho, Japan",
  },
  {
    src: "/images/s-blob-v1-IMAGE-IDEhtidHbk4.jpg",
    location: "East Rock, New Haven, CT",
  },
  {
    src: "/images/s-blob-v1-IMAGE-hgwKJEhp2wQ.jpg",
    location: "Kyoto Gyoen, Japan",
  },
  {
    src: "/images/s-blob-v1-IMAGE-fHEEZeRwE-o.jpg",
    location: "Bensonhurst Park, New York",
  },
  {
    src: "/images/s-blob-v1-IMAGE-eHeejckJPD4.jpg",
    location: "Bensonhurst Park, New York",
  },
  {
    src: "/images/s-blob-v1-IMAGE-CPZZYY_ZWGA.jpg",
    location: "Yale, CT",
    description: "Double rainbow at Yale.",
  },
  {
    src: "/images/s-blob-v1-IMAGE-BugSMBS0JrQ.jpg",
    location: "Yellowstone National Park",
  },
  {
    src: "/images/s-blob-v1-IMAGE-93l_-7CG640.jpg",
    location: "East Rock, New Haven, CT",
  },
  {
    src: "/images/s-blob-v1-IMAGE-8yh6e8DWcPg.jpg",
    location: "Central Park, New York",
  },
  {
    src: "/images/s-blob-v1-IMAGE-4-Uh26pPz0E.jpg",
    location: "Louisiana",
  },
  {
    src: "/images/s-blob-v1-IMAGE--fiYBKoih3M.jpg",
    location: "Yellowstone National Park",
  },
  {
    src: "/images/s-blob-v1-IMAGE-rYndycRIwsw.jpg",
    location: "New Haven, CT",
    description: "Sunset.",
  },
  {
    src: "/images/s-blob-v1-IMAGE-WK3klWEff2o.jpg",
    location: "Folsom, Louisiana",
    description: "Rhea bird.",
  },
];

type HobbyEntry = (typeof hobbyPhotoEntries)[number];

// [x%, y%, rotation, width%]. Extra photos past this list get a generated slot.
const desktop = [
  [3, 2, -6, 23], [28, 0, 4, 21], [50, 7, -3, 24], [75, 2, 5, 21],
  [1, 20, 3, 22], [26, 25, -5, 25], [52, 16, 2, 20], [74, 23, -4, 22],
  [8, 38, -2, 23], [34, 34, 6, 22], [58, 41, -6, 20], [76, 36, 3, 20],
  [24, 56, -3, 24], [50, 49, 5, 23], [74, 54, -5, 21],
  [12, 64, -4, 20], [40, 61, 3, 22], [62, 66, -2, 22],
  [6, 70, 5, 21], [38, 73, -5, 20],
];

const tablet = [
  [2, 1, -5, 32], [36, 0, 4, 30], [66, 5, -3, 30],
  [0, 15, 3, 30], [34, 18, -6, 32], [68, 13, 2, 28],
  [6, 30, -2, 31], [38, 28, 5, 30], [64, 33, -4, 30],
  [1, 43, 4, 30], [32, 46, -3, 33], [66, 41, 3, 30],
  [40, 56, 2, 28], [64, 61, -2, 30],
  [2, 69, 4, 31], [36, 67, -4, 30], [66, 71, 3, 28],
  [22, 36, 5, 26],
  [10, 74, 4, 28], [44, 72, -3, 27],
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
  [24, 24, -5, 44], [18, 58, 4, 42],
];

function photoAlt(photo: HobbyEntry) {
  if (!("description" in photo) || !photo.description) return `Photo at ${photo.location}`;

  const caption = photo.description.replace(/\.$/, "");
  const place = photo.location.split(",")[0]?.trim() ?? photo.location;
  if (caption.endsWith(place)) {
    const rest = photo.location.slice(place.length).replace(/^,\s*/, "");
    return rest ? `${caption}, ${rest}` : caption;
  }

  return `${caption}, ${photo.location}`;
}

function slot(index: number) {
  const placed = desktop[index];
  if (placed && tablet[index] && phone[index]) {
    const [x, y, rotation, w] = placed;
    const [tx, ty, , tw] = tablet[index];
    const [mx, my, , mw] = phone[index];
    return { x, y, rotation, w, tx, ty, tw, mx, my, mw };
  }

  const column = index % 4;
  const row = Math.floor(index / 4) % 5;
  return {
    x: 4 + column * 23,
    y: 6 + row * 14,
    rotation: ((index % 5) - 2) * 3,
    w: 21,
    tx: 2 + (column % 3) * 32,
    ty: 4 + row * 14,
    tw: 30,
    mx: column % 2 === 0 ? 4 : 44,
    my: 6 + (row % 4) * 15,
    mw: 46,
  };
}

export const hobbyPhotos = hobbyPhotoEntries.map((photo, index) => {
  const place = slot(index);
  return {
    src: photo.src,
    location: photo.location,
    ...("description" in photo && photo.description ? { description: photo.description } : {}),
    alt: photoAlt(photo),
    rotation: place.rotation,
    x: `${place.x}%`,
    y: `${place.y}%`,
    w: `${place.w}%`,
    tx: `${place.tx}%`,
    ty: `${place.ty}%`,
    tw: `${place.tw}%`,
    mx: `${place.mx}%`,
    my: `${place.my}%`,
    mw: `${place.mw}%`,
  };
});
