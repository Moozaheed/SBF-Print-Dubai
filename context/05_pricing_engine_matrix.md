# 05 — Dynamic Printing Pricing Engine & Matrix Mathematics

## 1. Master Price Calculation Formula

The real-time calculation engine computes the exact cost for any printing configuration using the following deterministic formula:

$$\text{Subtotal} = \max\left(\text{MinPressFee}, \left[ \Big( (\text{Area}_{\text{sqin}} \times \text{Rate}_{\text{sqin}} + \text{BaseUnitCost}) \times Q \times M_{\text{gsm}} \times M_{\text{sides}} \Big) + \Big( Q \times \text{Cost}_{\text{finishing\_unit}} + \text{Setup}_{\text{finishing}} \Big) \right] \times (1 - D_{\text{tier}}) \right)$$

Where:
- $\text{Area}_{\text{sqin}} = \text{Width (in)} \times \text{Height (in)}$
- $\text{Rate}_{\text{sqin}}$ = Per-square-inch paper & ink rate (varies by product category)
- $\text{BaseUnitCost}$ = Minimum per-item material cost
- $Q$ = Total print quantity ordered ($Q \in \{100, 250, 500, 1000, 2500, 5000, \dots\}$)
- $M_{\text{gsm}}$ = Paper Stock GSM multiplier
- $M_{\text{sides}}$ = Side multiplier ($1.00$ for single-sided / $1.45$ for double-sided)
- $\text{Cost}_{\text{finishing\_unit}}$ = Variable unit cost for selected finishing (Spot UV, Foil, Lamination)
- $\text{Setup}_{\text{finishing}}$ = Fixed plate/die setup fee for special finishes
- $D_{\text{tier}}$ = Tier discount fraction based on volume
- $\text{MinPressFee}$ = Minimum baseline order fee (AED 45.00)

---

## 2. Product Category Base Rates & Square-Inch Matrix

| Product Category | Standard Preset Dimensions | Base Rate / Sq. Inch ($\text{Rate}_{\text{sqin}}$) | Minimum Press Setup Fee |
| :--- | :--- | :--- | :--- |
| **Business Cards** | 3.5" x 2.0" (7.0 sq.in) | AED 0.0080 / sq.in | AED 45.00 |
| **Flyers & Leaflets** | A5 (5.8" x 8.3") / A4 (8.3" x 11.7") | AED 0.0045 / sq.in | AED 65.00 |
| **Large Format Banners** | Custom (e.g. 72" x 36") | AED 0.0025 / sq.in | AED 80.00 |
| **Custom Packaging Boxes**| Custom die-fold dimensions | AED 0.0120 / sq.in | AED 150.00 |
| **Corporate Folders** | A4 Folded (9" x 12") | AED 0.0095 / sq.in | AED 120.00 |

---

## 3. Paper Stock GSM Multiplier Matrix ($M_{\text{gsm}}$)

| Paper Stock Option | GSM Rating | Cost Multiplier ($M_{\text{gsm}}$) | Best Suited Category |
| :--- | :--- | :--- | :--- |
| **100 GSM Bond Paper** | 100 GSM | 1.000 (Baseline) | Standard Flyers & Letterheads |
| **150 GSM Art Gloss** | 150 GSM | 1.150 | High-gloss Pamphlets & Folders |
| **300 GSM Art Matte** | 300 GSM | 1.350 | Premium Business Cards & Postcards |
| **350 GSM Velvet Touch** | 350 GSM | 1.550 | Ultra-heavy Luxury Cards & Cover Stock |
| **Kraft Recycled Board** | 400 GSM | 1.400 | Eco-friendly Packaging & Kraft Tags |
| **Heavy Rigid Board** | 800 GSM | 2.100 | Premium Rigid Gift & Product Boxes |
| **Outdoor Heavy Vinyl** | 510 GSM | 1.250 | Waterproof Wide-Format Banners |

---

## 4. Finishing Options & Setup Costs

| Finishing Option | Fixed Setup Fee ($\text{Setup}_{\text{finishing}}$) | Variable Cost per Unit ($\text{Cost}_{\text{finishing\_unit}}$) |
| :--- | :--- | :--- |
| **None (Standard Trim)** | AED 0.00 | AED 0.00 |
| **Matte / Gloss Lamination** | AED 15.00 | AED 0.04 / unit |
| **Soft-Touch Velvet Laminate** | AED 25.00 | AED 0.08 / unit |
| **Spot UV (Gloss Highlight)** | AED 60.00 | AED 0.12 / unit |
| **Metallic Gold / Silver Foil**| AED 90.00 | AED 0.18 / unit |
| **Custom Die-Cut Corners** | AED 40.00 | AED 0.05 / unit |

---

## 5. Tier Discount Schedule ($D_{\text{tier}}$)

Bulk pricing automatically applies non-linear volume discount tiers:

```text
Quantity Range:   100 – 249 units    ==>  0% Discount (Base)
Quantity Range:   250 – 499 units    ==>  8% Discount
Quantity Range:   500 – 999 units    ==> 15% Discount
Quantity Range: 1000 – 2499 units    ==> 25% Discount
Quantity Range: 2500 – 4999 units    ==> 35% Discount
Quantity Range: 5000+ units          ==> 45% Discount
```

---

## 6. Designer Fee & Tax Calculations

- **Designer Layout Help Fee**: Additional flat **AED 100.00** when `"I need a designer to create/fix my layout"` is selected.
- **UAE Value Added Tax (VAT)**: **5.00%** applied to $\text{Subtotal} + \text{DesignerFee}$.
- **Final Client Total**:
  $$\text{Grand Total} = (\text{Subtotal} + \text{DesignerFee}) \times 1.05$$
