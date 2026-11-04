import { NextRequest, NextResponse } from "next/server";

export interface Director {
  id: number | string;
  name: string;
  designation: string;
  region?: string;
  phone?: string;
  email?: string;
  photo?: string;
  [key: string]: unknown;
}

export const directorsData: Director[] = [
  {
    id: 1,
    name: "Sri G. N. Anantha Kumar",
    designation: "President / Director",
    region: "Bengaluru",
    email: "info@souharda.coop",
  },
  {
    id: 2,
    name: "Sri A. R. Prasanna Kumar",
    designation: "Vice President / Director",
    region: "Bengaluru",
    email: "info@souharda.coop",
  },
  {
    id: 3,
    name: "Sri Sharad G. Bhat",
    designation: "Managing Director",
    region: "Bengaluru",
    email: "md@souharda.coop",
  },
  {
    id: 4,
    name: "Sri B. H. Krishna Reddy",
    designation: "Director",
    region: "Bengaluru",
    email: "info@souharda.coop",
  },
  {
    id: 5,
    name: "Sri K. R. Jayadev",
    designation: "Director",
    region: "Mysuru",
    email: "info@souharda.coop",
  },
  {
    id: 6,
    name: "Sri Gurupadappa Nagamarapalli",
    designation: "Director",
    region: "Kalaburagi",
    email: "info@souharda.coop",
  },
  {
    id: 7,
    name: "Sri Ramesh Vaidya",
    designation: "Director",
    region: "Belagavi",
    email: "info@souharda.coop",
  },
];

export default directorsData;