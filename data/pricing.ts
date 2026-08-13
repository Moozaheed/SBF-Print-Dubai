export interface ProductOption {
  id: string;
  name: string;
  category: string;
  baseSqInRate: number; // AED per square inch
  minPressFee: number; // AED minimum press setup fee
  defaultWidth: number; // inches
  defaultHeight: number; // inches
  standardPresets: { label: string; width: number; height: number }[];
}

export interface PaperStockOption {
  id: string;
  name: string;
  gsm: number;
  multiplier: number;
  description: string;
}

export interface FinishingOption {
  id: string;
  name: string;
  setupFee: number; // AED
  unitCost: number; // AED per item
  description: string;
}

export const PRODUCTS: ProductOption[] = [
  {
    id: "business-cards",
    name: "Luxury Business Cards",
    category: "Cards",
    baseSqInRate: 0.0080,
    minPressFee: 45.00,
    defaultWidth: 3.5,
    defaultHeight: 2.0,
    standardPresets: [
      { label: "US Standard (3.5\" x 2.0\")", width: 3.5, height: 2.0 },
      { label: "Euro Standard (85mm x 55mm)", width: 3.35, height: 2.16 },
      { label: "Square (2.5\" x 2.5\")", width: 2.5, height: 2.5 },
    ],
  },
  {
    id: "flyers",
    name: "Flyers & Brochures",
    category: "Marketing",
    baseSqInRate: 0.0045,
    minPressFee: 65.00,
    defaultWidth: 5.8,
    defaultHeight: 8.3,
    standardPresets: [
      { label: "A5 (5.8\" x 8.3\")", width: 5.8, height: 8.3 },
      { label: "A4 (8.3\" x 11.7\")", width: 8.3, height: 11.7 },
      { label: "DL Rack Card (3.9\" x 8.3\")", width: 3.9, height: 8.3 },
    ],
  },
  {
    id: "banners",
    name: "Large Format Vinyl Banners",
    category: "Banners",
    baseSqInRate: 0.0025,
    minPressFee: 80.00,
    defaultWidth: 48.0,
    defaultHeight: 24.0,
    standardPresets: [
      { label: "Small Banner (4ft x 2ft)", width: 48.0, height: 24.0 },
      { label: "Medium Banner (6ft x 3ft)", width: 72.0, height: 36.0 },
      { label: "Large Event Backdrop (8ft x 4ft)", width: 96.0, height: 48.0 },
    ],
  },
  {
    id: "packaging",
    name: "Custom Packaging Boxes",
    category: "Packaging",
    baseSqInRate: 0.0120,
    minPressFee: 150.00,
    defaultWidth: 6.0,
    defaultHeight: 4.0,
    standardPresets: [
      { label: "Small Product Box (6\" x 4\")", width: 6.0, height: 4.0 },
      { label: "Medium Gift Box (8\" x 6\")", width: 8.0, height: 6.0 },
      { label: "Large Rigid Mailer (12\" x 9\")", width: 12.0, height: 9.0 },
    ],
  },
  {
    id: "folders",
    name: "Corporate Presentation Folders",
    category: "Stationery",
    baseSqInRate: 0.0095,
    minPressFee: 120.00,
    defaultWidth: 9.0,
    defaultHeight: 12.0,
    standardPresets: [
      { label: "A4 Folder Single Pocket (9\" x 12\")", width: 9.0, height: 12.0 },
      { label: "A4 Folder Double Pocket (9\" x 12\")", width: 9.0, height: 12.0 },
    ],
  },
];

export const PAPER_STOCKS: PaperStockOption[] = [
  { id: "100-bond", name: "100 GSM Bond Paper", gsm: 100, multiplier: 1.000, description: "Lightweight letterheads & office forms" },
  { id: "150-gloss", name: "150 GSM Art Gloss", gsm: 150, multiplier: 1.150, description: "Vibrant high-gloss pamphlets & inserts" },
  { id: "300-matte", name: "300 GSM Matte Stock", gsm: 300, multiplier: 1.350, description: "Popular crisp corporate cardstock" },
  { id: "350-velvet", name: "350 GSM Velvet Touch", gsm: 350, multiplier: 1.550, description: "Luxury soft-touch ultra-heavy stock" },
  { id: "400-kraft", name: "400 GSM Kraft Recycled", gsm: 400, multiplier: 1.400, description: "Eco-friendly natural brown kraft board" },
  { id: "800-rigid", name: "800 GSM Heavy Rigid Board", gsm: 800, multiplier: 2.100, description: "Premium rigid luxury gift box board" },
];

export const FINISHINGS: FinishingOption[] = [
  { id: "none", name: "None (Standard Trim)", setupFee: 0, unitCost: 0, description: "Clean precision cut edges" },
  { id: "matte-lamination", name: "Matte Lamination", setupFee: 15, unitCost: 0.04, description: "Smooth anti-glare protection" },
  { id: "gloss-lamination", name: "Gloss Lamination", setupFee: 15, unitCost: 0.04, description: "High-shine UV protective film" },
  { id: "spot-uv", name: "Spot UV Highlight", setupFee: 60, unitCost: 0.12, description: "Glossy raised clear varnish detail" },
  { id: "gold-foil", name: "Metallic Gold Foil", setupFee: 90, unitCost: 0.18, description: "Luxury hot-stamped gold foil text/logo" },
  { id: "silver-foil", name: "Metallic Silver Foil", setupFee: 90, unitCost: 0.18, description: "Sleek hot-stamped silver foil detail" },
];

export const QUANTITY_TIERS = [
  { qty: 100, discountPct: 0 },
  { qty: 250, discountPct: 8 },
  { qty: 500, discountPct: 15 },
  { qty: 1000, discountPct: 25 },
  { qty: 2500, discountPct: 35 },
  { qty: 5000, discountPct: 45 },
];

export interface CalculationResult {
  unitPrice: number;
  subtotal: number;
  vatAmount: number;
  totalPrice: number;
  tierDiscountPct: number;
  savingsAmount: number;
  areaSqIn: number;
}

export function calculatePrice(
  productId: string,
  width: number,
  height: number,
  paperGsm: number,
  finishingId: string,
  sides: "single" | "double",
  quantity: number,
  includeDesignerHelp: boolean = false
): CalculationResult {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const stock = PAPER_STOCKS.find((s) => s.gsm === paperGsm) || PAPER_STOCKS[2];
  const finishing = FINISHINGS.find((f) => f.id === finishingId) || FINISHINGS[0];

  const areaSqIn = Math.max(0.5, width * height);
  const sideMultiplier = sides === "double" ? 1.45 : 1.00;

  // Raw item paper/ink cost
  const rawUnitBase = areaSqIn * product.baseSqInRate * stock.multiplier * sideMultiplier;
  const rawBaseTotal = rawUnitBase * quantity;

  // Finishing costs
  const finishingTotal = (quantity * finishing.unitCost) + finishing.setupFee;

  // Base before tier discount
  const preDiscountSubtotal = rawBaseTotal + finishingTotal;

  // Determine volume discount fraction
  let tierDiscountPct = 0;
  for (const tier of QUANTITY_TIERS) {
    if (quantity >= tier.qty) {
      tierDiscountPct = tier.discountPct;
    }
  }

  // Subtotal with tier discount applied
  const discountedSubtotal = preDiscountSubtotal * (1 - tierDiscountPct / 100);

  // Enforce minimum press fee
  let subtotal = Math.max(product.minPressFee, discountedSubtotal);

  // Add designer help fee if requested
  if (includeDesignerHelp) {
    subtotal += 100.00; // AED 100 Flat Designer Fee
  }

  const savingsAmount = preDiscountSubtotal * (tierDiscountPct / 100);
  const vatAmount = subtotal * 0.05; // 5% UAE VAT
  const totalPrice = subtotal + vatAmount;
  const unitPrice = totalPrice / quantity;

  return {
    unitPrice: Number(unitPrice.toFixed(2)),
    subtotal: Number(subtotal.toFixed(2)),
    vatAmount: Number(vatAmount.toFixed(2)),
    totalPrice: Number(totalPrice.toFixed(2)),
    tierDiscountPct,
    savingsAmount: Number(savingsAmount.toFixed(2)),
    areaSqIn: Number(areaSqIn.toFixed(2)),
  };
}
