export interface Director {
  id: number;
  slug: string;
  name: string;
  designation: string;
  image: string;
  region: string;
  email: string;
  bio?: string;
}

export const ALL_DIRECTORS: Director[] = [
  { 
    id: 1, 
    slug: "g-nanjangouda",
    name: "Sri. G. Nanjangouda", 
    designation: "President", 
    image: "/souharda/Director/2022/1nanjangouda.jpg", 
    region: "Vijayanagar", 
    email: "president@souharda.coop",
    bio: "Sri G. Nanjangouda has been serving as the President of Karnataka State Souharda Federal Cooperative Ltd. He has decades of experience in empowering local cooperatives and strengthening rural development frameworks across Karnataka."
  },
  { 
    id: 2, 
    slug: "a-r-prasannakumar",
    name: "Sri A R Prasannakumar", 
    designation: "Vice - President", 
    image: "/souharda/Director/2022/2prasanna.jpg", 
    region: "Shivamogga", 
    email: "vp@souharda.coop",
    bio: "Sri A R Prasannakumar hails from Tirthahalli, born on 19-06-1963. After completing his Engineering education, he started his professional journey in 1985 as a technical consultant in Tirthahalli and Shivamogga. Alongside his technical expertise, he has been actively involved in agriculture and public service, contributing to the cooperative sector since 1994."
  },
  { id: 3, slug: "b-h-krishna-reddy", name: "Sri. B. H. Krishna Reddy", designation: "Director", image: "/souharda/Director/2022/3krishna_Reddy.jpg", region: "Kolar", email: "souharda@souharda.coop", bio: "Prominent agricultural leader and cooperative strategist dedicated to enhancing credit facility accessibility in Kolar district." },
  { id: 4, slug: "gurunath-janthikar", name: "Sri. Gurunath Janthikar", designation: "Director", image: "/souharda/Director/2022/4Gurunath_Janthikar.jpg", region: "Bidar", email: "souharda@souharda.coop", bio: "Active contributor to cooperative movement in Bidar, bringing strategic growth and organizational leadership to the board." },
  { id: 5, slug: "jagadish-kavatagimat", name: "Sri Jagadish Kavatagimat", designation: "Director", image: "/souharda/Director/2022/5SriJagadish_Kavatagimat.jpg", region: "Belagavi", email: "souharda@souharda.coop", bio: "Leading social reformer and cooperative advocate based out of Belagavi." },
  { id: 6, slug: "guranagowda-patil", name: "Sri Guranagowda Patil", designation: "Director", image: "/souharda/Director/2022/6Sri_Guranagowda_Patil.jpg", region: "Belagavi", email: "souharda@souharda.coop", bio: "Respected cooperative activist with vast experience in administrative leadership." },
  { id: 7, slug: "thimmayya-shetty", name: "Sri Thimmayya Shetty", designation: "Director", image: "/souharda/Director/2022/7Si_Thimmayya_Shetty.jpg", region: "Mysuru", email: "souharda@souharda.coop", bio: "Focused on modernizing cooperative banking infrastructure across the Mysuru division." },
  { id: 8, slug: "gundurao", name: "Sri Gundurao", designation: "Director", image: "/souharda/Director/2022/8Sri_Gundurao.jpg", region: "Kalaburagi", email: "souharda@souharda.coop", bio: "Dedicated to socio-economic upliftment in Kalaburagi through cooperative self-reliance models." },
  { id: 9, slug: "manjunath", name: "Sri Manjunath", designation: "Director", image: "/souharda/Director/2022/9Sri_Manjunath.jpg", region: "Bengaluru", email: "souharda@souharda.coop" },
  { id: 10, slug: "sridhar", name: "Sri Sridhar", designation: "Director", image: "/souharda/Director/2022/10Sri_Sridhar.jpg", region: "Mysuru", email: "souharda@souharda.coop" },
  { id: 11, slug: "nagaraj-deshapande", name: "Sri Nagaraj Deshapande", designation: "Director", image: "/souharda/Director/2022/11Sri_Nagaraj_Deshapande.jpg", region: "Belagavi", email: "souharda@souharda.coop" },
  { id: 12, slug: "k-shivalingappa", name: "Sri K. Shivalingappa", designation: "Director", image: "/souharda/Director/2022/12Sri_K_Shivalingappa.jpg", region: "Bengaluru", email: "souharda@souharda.coop" },
  { id: 13, slug: "bharathi-g-bhat", name: "Smt. Bharathi G. Bhat", designation: "Director", image: "/souharda/Director/2022/13Smt_Bharathi_G_Bhat.jpg", region: "Belagavi", email: "souharda@souharda.coop" },
  { id: 14, slug: "shailaja-tapali", name: "Smt. Shailaja Tapali", designation: "Director", image: "/souharda/Director/2022/14Smt_Shailaja_Tapali.jpg", region: "Kalaburagi", email: "souharda@souharda.coop" },
  { id: 15, slug: "mallikarjuna-ajjappa-horakeri", name: "Sri Mallikarjuna Ajjappa Horakeri", designation: "Director", image: "/souharda/Director/2022/15Sri_Mallikarjuna_Ajjappa_Horakere.jpg", region: "Belagavi", email: "souharda@souharda.coop" },
  { id: 16, slug: "prabhudev", name: "Sri Prabhudev", designation: "Director", image: "/souharda/Director/2022/16Sri_Prabhudev.jpg", region: "Kalaburagi", email: "souharda@souharda.coop" },
  { id: 17, slug: "h-j-hanumanthaiah", name: "Sri H. J. Hanumanthaiah", designation: "Director", image: "/souharda/Director/2022/17ri_H_J_Hanumanthaiah.jpg", region: "Bengaluru", email: "souharda@souharda.coop" },
  { id: 18, slug: "raghurama-reddy", name: "Sri Raghurama Reddy", designation: "Director", image: "/souharda/Director/2022/18Sri_Raghurama_Reddy.jpg", region: "Bengaluru", email: "souharda@souharda.coop" },
  { id: 19, slug: "c-p-vijay", name: "Sri C. P. Vijay", designation: "Director", image: "/souharda/Director/2022/19Sri_C_P_Vijay.jpg", region: "Mysuru", email: "souharda@souharda.coop" },
  { id: 20, slug: "mohandas-j-naik", name: "Sri Mohandas J. Naik", designation: "Director", image: "/souharda/Director/2022/20Sri_Mohandas_J_Naik.jpg", region: "Belagavi", email: "souharda@souharda.coop" },
  { id: 21, slug: "sanjay-b-patil", name: "Sri Sanjay B. Patil", designation: "Director", image: "/souharda/Director/2022/21Sri_Sanjay_B_Patil.jpg", region: "Belagavi", email: "souharda@souharda.coop" },
  { id: 22, slug: "sanjeev-mahajan", name: "Sri Sanjeev Mahajan", designation: "Director", image: "/souharda/Director/2022/22Sri_Sanjeev_Mahajan.jpg", region: "Kalaburagi", email: "souharda@souharda.coop" },
  { id: 23, slug: "mahadevaswamy", name: "Sri Mahadevaswamy", designation: "Director", image: "/souharda/Director/2022/23Sri_Mahadevaswamy.jpg", region: "Mysuru", email: "souharda@souharda.coop" },
  { id: 24, slug: "sharan-patil", name: "Sri Sharan Patil", designation: "Director", image: "/souharda/Director/2022/24Sri_sharan_patil.jpg", region: "Kalaburagi", email: "souharda@souharda.coop" },
];