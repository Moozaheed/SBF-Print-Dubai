export interface MegaMenuItem {
  title: string;
  slug: string;
  badge?: "SALE" | "HOT" | string;
  startingPrice?: string;
}

export interface MegaMenuSubGroup {
  groupName: string;
  items: MegaMenuItem[];
}

export interface MegaMenuCategory {
  name: string;
  slug: string;
  subGroups: MegaMenuSubGroup[];
}

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    name: "Signage",
    slug: "signage",
    subGroups: [
      {
        groupName: "Signage",
        items: [
          { title: "Outdoor signboard 3D letter", slug: "outdoor-signboard-3d-letter" },
          { title: "Reception Letter", slug: "reception-letter" },
          { title: "Office name plate", slug: "office-name-plate" },
          { title: "Safety sign", slug: "safety-sign" },
          { title: "Banner and feston", slug: "banner-and-festoon" },
          { title: "Flex signboard", slug: "flex-signboard" },
          { title: "Led neon", slug: "led-neon" },
          { title: "Acrylic 3D board", slug: "acrylic-3d-board" },
          { title: "Indoor signage", slug: "indoor-signage" },
          { title: "Pylon/totem sign", slug: "pylon-totem-sign" },
          { title: "Stamp making", slug: "stamp-making" },
          { title: "Parking signage", slug: "parking-signage" },
          { title: "Elevator safety sign", slug: "elevator-safety-sign" },
        ],
      },
    ],
  },

  {
    name: "Printing and Display",
    slug: "printing-and-display",
    subGroups: [
      {
        groupName: "Printing and Display",
        items: [
          { title: "Sticker on wall", slug: "sticker-on-wall" },
          { title: "Wallpaper", slug: "wallpaper" },
          { title: "Sticker on forex and foam board", slug: "sticker-on-forex-foam-board" },
          { title: "Sticker on vehicles", slug: "sticker-on-vehicles" },
          { title: "Sticker on glass", slug: "sticker-on-glass" },
          { title: "Frosted on glass", slug: "frosted-on-glass" },
          { title: "One way vision on glass", slug: "one-way-vision-on-glass" },
          { title: "Window privacy film", slug: "window-privacy-film" },
          { title: "Rollup stand", slug: "rollup-stand" },
          { title: "Photo frame", slug: "photo-frame" },
          { title: "Flag print", slug: "flag-print" },
          { title: "Flag stand", slug: "flag-stand" },
          { title: "Banner stand", slug: "banner-stand" },
          { title: "Promotion Table", slug: "promotion-table" },
          { title: "Reception stand", slug: "reception-stand" },
          { title: "Shelf D-Board stand", slug: "shelf-d-board-stand" },
        ],
      },
    ],
  },

  {
    name: "Marketing & Gift Items",
    slug: "marketing-gift-items",
    subGroups: [
      {
        groupName: "Marketing & Gift Items",
        items: [
          { title: "Business cards", slug: "business-cards", badge: "SALE" },
          { title: "Print and cut sticker", slug: "print-and-cut-sticker" },
          { title: "Flyers", slug: "flyers", badge: "SALE" },
          { title: "Menu", slug: "menu" },
          { title: "Letterheads", slug: "letterheads" },
          { title: "Envelopes print", slug: "envelopes-print" },
          { title: "Bags print", slug: "bags-print" },
          { title: "T-shirt print", slug: "t-shirt-print" },
          { title: "Bottle print", slug: "bottle-print" },
          { title: "Mugs print", slug: "mugs-print" },
          { title: "Packaging", slug: "packaging" },
          { title: "Calendars", slug: "calendars" },
          { title: "Awards making", slug: "awards-making" },
          { title: "Diary & pen print", slug: "diary-pen-print" },
        ],
      },
    ],
  },
];
