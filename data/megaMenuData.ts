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
          { title: "Outdoor 3D Letter Signs", slug: "outdoor-signboard-3d-letter" },
          { title: "Reception & Office Signage", slug: "reception-letter" },
          { title: "Office Nameplates", slug: "office-name-plate" },
          { title: "Safety & Warning Signs", slug: "safety-sign" },
          { title: "Banners & Festoons", slug: "banner-and-festoon" },
          { title: "Flex Signboards", slug: "flex-signboard" },
          { title: "LED Neon Signs", slug: "led-neon" },
          { title: "3D Acrylic Signs", slug: "acrylic-3d-board" },
          { title: "Indoor Signage", slug: "indoor-signage" },
          { title: "Pylon & Totem Signs", slug: "pylon-totem-sign" },
          { title: "Custom Rubber Stamps", slug: "stamp-making" },
          { title: "Parking & Wayfinding Signs", slug: "parking-signage" },
          { title: "Elevator Safety Signs", slug: "elevator-safety-sign" },
          { title: "LED Screen Displays", slug: "led-screen-display" },
          { title: "Laser Engraving", slug: "laser-engraving" },
          { title: "Acrylic Display Stand", slug: "acrylic-display-stand" },
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
          { title: "Wall Graphics & Stickers", slug: "sticker-on-wall" },
          { title: "Custom Wallpapers", slug: "wallpaper" },
          { title: "Forex & Foam Board Stickers", slug: "sticker-on-forex-foam-board" },
          { title: "Vehicle Graphics & Branding", slug: "sticker-on-vehicles" },
          { title: "Glass Stickers & Graphics", slug: "sticker-on-glass" },
          { title: "Frosted Glass Stickers", slug: "frosted-on-glass" },
          { title: "One Way Vision Film", slug: "one-way-vision-on-glass" },
          { title: "Window Privacy Films", slug: "window-privacy-film" },
          { title: "Roll Up Banner Stands", slug: "rollup-stand" },
          { title: "Photo Frames & Canvas Prints", slug: "photo-frame" },
          { title: "Custom Flag Printing", slug: "flag-print" },
          { title: "Flag Banner Stands", slug: "flag-stand" },
          { title: "Banner Stands", slug: "banner-stand" },
          { title: "Promotional Tables & Counters", slug: "promotion-table" },
          { title: "Reception Display Stands", slug: "reception-stand" },
          { title: "D-Board Shelf Display Stands", slug: "shelf-d-board-stand" },
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
          { title: "Business Cards", slug: "business-cards", badge: "SALE" },
          { title: "Print & Cut Stickers", slug: "print-and-cut-sticker" },
          { title: "Flyers & Leaflets", slug: "flyers", badge: "SALE" },
          { title: "Menu Printing", slug: "menu" },
          { title: "Letterheads", slug: "letterheads" },
          { title: "Envelope Printing", slug: "envelopes-print" },
          { title: "Custom Bag Printing", slug: "bags-print" },
          { title: "Custom T-Shirt Printing", slug: "t-shirt-print" },
          { title: "Custom Bottle Printing", slug: "bottle-print" },
          { title: "Custom Mug Printing", slug: "mugs-print" },
          { title: "Custom Packaging Boxes", slug: "packaging" },
          { title: "Custom Calendars", slug: "calendars" },
          { title: "Acrylic & Wooden Awards", slug: "awards-making" },
          { title: "Corporate Diaries & Pens", slug: "diary-pen-print" },
        ],
      },
    ],
  },
];
