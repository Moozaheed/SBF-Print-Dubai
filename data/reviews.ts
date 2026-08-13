export interface CustomerReview {
  name: string;
  initials: string;
  rating: 4 | 5;
  date: string;
  comment: string;
}

const REVIEW_POOL: CustomerReview[] = [
  {
    name: "Ahmed Al Mansoori",
    initials: "AA",
    rating: 5,
    date: "12 Jul 2025",
    comment: "Excellent quality and super fast delivery. The print came out exactly as designed — sharp colors and perfect finish. Will definitely order again!",
  },
  {
    name: "Sara Khan",
    initials: "SK",
    rating: 5,
    date: "3 Aug 2025",
    comment: "Very professional team. They checked our artwork before printing and caught a small bleed issue. Saved us a lot of trouble. Highly recommended.",
  },
  {
    name: "Mohammed Al Rashidi",
    initials: "MR",
    rating: 5,
    date: "18 Jun 2025",
    comment: "We ordered for our restaurant opening and everything arrived on time and looked stunning. The colors were vibrant and quality was top notch.",
  },
  {
    name: "Fatima Zahra",
    initials: "FZ",
    rating: 4,
    date: "25 Jul 2025",
    comment: "Good quality product. Delivery was slightly delayed but the team communicated well. Overall very satisfied with the final result.",
  },
  {
    name: "Raj Patel",
    initials: "RP",
    rating: 5,
    date: "8 Aug 2025",
    comment: "SBF Print is our go-to printing company in Dubai. Always consistent quality and they understand business needs. 5 stars without hesitation.",
  },
  {
    name: "Hana Al Zaabi",
    initials: "HZ",
    rating: 5,
    date: "1 Aug 2025",
    comment: "Ordered same-day and received within hours. The finish was flawless — exactly what we needed for our corporate event. Thank you!",
  },
  {
    name: "Omar Farouq",
    initials: "OF",
    rating: 4,
    date: "15 Jul 2025",
    comment: "Great value for money. The product quality is much better than what we used to get from other printers in Dubai. Packaging was also neat.",
  },
  {
    name: "Priya Menon",
    initials: "PM",
    rating: 5,
    date: "22 Jul 2025",
    comment: "I was impressed by how detailed the final output was. The team followed our specifications perfectly. Will be ordering all our marketing materials from here.",
  },
  {
    name: "Khalid Al Shamsi",
    initials: "KS",
    rating: 5,
    date: "5 Jun 2025",
    comment: "Outstanding craftsmanship. We've used many printing companies but SBF is clearly a step above. Professional, fast, and reliable.",
  },
  {
    name: "Nadia Hassan",
    initials: "NH",
    rating: 4,
    date: "29 Jun 2025",
    comment: "Really happy with the quality. The team was responsive on WhatsApp and answered all our questions quickly. Would recommend to any business.",
  },
  {
    name: "Arjun Sharma",
    initials: "AS",
    rating: 5,
    date: "11 Aug 2025",
    comment: "Ordered for our new office fit-out. The result exceeded our expectations — premium look and feel. Our clients keep complimenting our branding!",
  },
  {
    name: "Layla Al Hamdan",
    initials: "LH",
    rating: 5,
    date: "17 Jun 2025",
    comment: "Fast turnaround and top quality. The colors were exactly as on screen — no surprises. Very professional service from start to finish.",
  },
  {
    name: "James Okonkwo",
    initials: "JO",
    rating: 4,
    date: "30 Jul 2025",
    comment: "Good experience overall. The product quality is solid and the team was helpful with the artwork requirements. Pricing is also very fair.",
  },
  {
    name: "Reem Al Marzouqi",
    initials: "RM",
    rating: 5,
    date: "9 Jul 2025",
    comment: "We ordered a rush job and they delivered within the same day. Quality was absolutely perfect. SBF Print is now our trusted printing partner.",
  },
  {
    name: "Vijay Nair",
    initials: "VN",
    rating: 5,
    date: "2 Jul 2025",
    comment: "Brilliant work! The attention to detail is amazing. We ordered for a big corporate event and everything was ready ahead of schedule. Highly recommended.",
  },
  {
    name: "Aisha Bint Sultan",
    initials: "AB",
    rating: 4,
    date: "20 Jun 2025",
    comment: "Very good quality printing. The team guided us on the best material choice for our needs. Professional advice and beautiful end result.",
  },
  {
    name: "Daniel Fernandez",
    initials: "DF",
    rating: 5,
    date: "14 Aug 2025",
    comment: "Third time ordering from SBF and still impressed every time. Consistent quality and fast delivery. They never disappoint.",
  },
  {
    name: "Maryam Al Nuaimi",
    initials: "MN",
    rating: 5,
    date: "27 Jul 2025",
    comment: "The quality of the final product was exceptional. Very clean finish and the colors popped beautifully. Delivery was also ahead of schedule.",
  },
  {
    name: "Suresh Kumar",
    initials: "SK",
    rating: 4,
    date: "4 Jul 2025",
    comment: "Good printing quality at competitive prices. The staff was helpful and ensured our order was correct before dispatch. Satisfied customer!",
  },
  {
    name: "Noura Al Kaabi",
    initials: "NK",
    rating: 5,
    date: "21 Jul 2025",
    comment: "Placed an urgent order for our grand opening and SBF Print delivered perfectly. Everything looked stunning and very professional. Thank you team!",
  },
  {
    name: "Hassan Al Blooshi",
    initials: "HB",
    rating: 5,
    date: "6 Aug 2025",
    comment: "We use SBF for all our company printing needs. Always reliable, always high quality. The best printing press in Downtown Dubai without question.",
  },
  {
    name: "Divya Krishnan",
    initials: "DK",
    rating: 4,
    date: "13 Jun 2025",
    comment: "Nice quality and reasonable price. The team communicated throughout the process and delivered a great product. Happy with the experience.",
  },
  {
    name: "Tariq Al Owais",
    initials: "TO",
    rating: 5,
    date: "19 Jul 2025",
    comment: "Incredible attention to detail. The finished product looked exactly like our design mockup — even the tiny text was crisp and readable. Very impressive.",
  },
  {
    name: "Michelle Santos",
    initials: "MS",
    rating: 5,
    date: "26 Jun 2025",
    comment: "Fantastic service! The team helped us finalize the design and suggested the right finishing options. End result was stunning. Will order again soon.",
  },
  {
    name: "Faisal Al Darmaki",
    initials: "FD",
    rating: 4,
    date: "10 Aug 2025",
    comment: "Solid printing quality and fair pricing. Good communication throughout. Would definitely use SBF Print again for our next project.",
  },
];

function slugHash(slug: string): number {
  return slug.split("").reduce((acc, c, i) => acc + c.charCodeAt(0) * (i + 1), 0);
}

export function getReviewsForProduct(slug: string, count = 3): CustomerReview[] {
  const hash = slugHash(slug);
  const result: CustomerReview[] = [];
  const used = new Set<number>();
  for (let i = 0; i < count; i++) {
    let idx = (hash + i * 11) % REVIEW_POOL.length;
    while (used.has(idx)) {
      idx = (idx + 1) % REVIEW_POOL.length;
    }
    used.add(idx);
    result.push(REVIEW_POOL[idx]);
  }
  return result;
}
