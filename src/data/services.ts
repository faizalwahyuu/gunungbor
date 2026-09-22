import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 1,
    number: "01",
    title: "Drilling Batuan",
    tag: "Hard Rock",
    shortDescription: "Pengeboran berdaya tembus tinggi pada formasi batuan keras, basalt, andesit, dan formasi geologi padat.",
    description: "Layanan pengeboran spesialis untuk formasi batuan beku dan metamorf dengan compressive strength tinggi. Menggunakan metode rotary percussive dan down-the-hole (DTH) hammer dengan bit karbida tungsten industri untuk penetrasi optimal tanpa merusak stabilitas formasi sekitar.",
    scope: [
      "Penetrasi batuan keras (Andesit, Granit, Basalt, Breksi)",
      "Pengeboran DTH Hammer & Rotary Percussion",
      "Pemasangan anchor batuan & tie-back tendon",
      "Blasthole drilling untuk penataan tebing & lereng"
    ],
    fieldConditions: [
      "Batuan dengan RMR (Rock Mass Rating) tinggi",
      "Area tebing curam dan singkapan batuan masif",
      "Lokasi minim akses sumber air pendingin konvensional"
    ],
    image: "/images/service-rock.webp",
    fallbackImage: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    number: "02",
    title: "Geotechnical Drilling",
    tag: "Engineering",
    shortDescription: "Pengeboran investigasi bawah permukaan untuk perolehan parameter tanah, batuan, dan daya dukung pondasi infrastruktur.",
    description: "Pengeboran geoteknik komprehensif untuk proyek bendungan, terowongan, jalan layang lereng, dan fondasi gardu induk. Dilengkapi pengujian insitu seperti Standard Penetration Test (SPT), Permeability Test (Packer/Lugeon), dan instalasi instrumentasi geoteknik seperti inclinometer dan piezometer.",
    scope: [
      "Continuous core drilling geoteknik & rock sampling",
      "Standard Penetration Test (SPT) terkalibrasi",
      "Packer test & Lugeon test untuk konduktivitas hidrolik",
      "Instalasi casing inclinometer, piezometer, dan extensometer"
    ],
    fieldConditions: [
      "Rencana pondasi jembatan pegunungan & terowongan",
      "Zona patahan aktif dan area potensi liquifaksi/longsor",
      "Area kerja sempit di sekitar struktur eksisting"
    ],
    image: "/images/service-geotechnical.webp",
    fallbackImage: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    number: "03",
    title: "Exploration Drilling",
    tag: "Subsurface",
    shortDescription: "Dukungan pekerjaan eksplorasi mineral, batubara, dan air tanah dalam untuk memperoleh data bawah permukaan yang akurat.",
    description: "Pengambilan data geologi subsurface presisi tinggi untuk pemetaan cadangan sumber daya alam dan studi kelayakan. Tim kami berpengalaman mengoperasikan rig wireline eksplorasi dengan recovery rate core tinggi pada interval lapisan kritis.",
    scope: [
      "Diamond wireline core drilling (HQ, NQ, PQ sizing)",
      "Stratigraphic correlation & lithology logging support",
      "Deep aquifer testing & water well exploration",
      "Core preservation & core box labeling berstandar JORC/KCMI"
    ],
    fieldConditions: [
      "Kawasan konsesi hutan dan perbukitan terpencil",
      "Topografi bergelombang tanpa akses jalan logistik alat berat",
      "Kebutuhan operasional 24 jam nonstop"
    ],
    image: "/images/service-exploration.webp",
    fallbackImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    number: "04",
    title: "Core Drilling",
    tag: "High Recovery",
    shortDescription: "Pengeboran inti dengan diamond core drill bit untuk mendapatkan recovery sample utuh (>95%) bagi analisis laboratorium.",
    description: "Fokus utama pada integritas sampel geologi. Menggunakan triple-tube core barrel (HQ3 / NQ3) dan lumpur bor polimer khusus untuk melindungi inti batuan lunak maupun rekahan batuan rapuh agar tidak tergerus selama proses coring.",
    scope: [
      "HQ3, NQ3, PQ3 Triple Tube coring system",
      "RQD (Rock Quality Designation) sampling logging",
      "Oriented core drilling untuk analisis diskontinuitas kekar",
      "Sampling batuan untuk uji Unconfined Compressive Strength (UCS)"
    ],
    fieldConditions: [
      "Lapisan batuan terlapukkan (weathered rock) & fractured zone",
      "Tuntutan perolehan core recovery minimum 90-95%",
      "Pengambilan sampel presisi pada kedalaman lebih dari 150 meter"
    ],
    image: "/images/service-core.webp",
    fallbackImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    number: "05",
    title: "Slope & Mountain Drilling",
    tag: "Extreme Terrain",
    shortDescription: "Pengeboran pada lereng curam, tebing terjal, dan ketinggian pegunungan dengan anchoring sistem tali keselamatan ganda.",
    description: "Keahlian utama TERRADRILL. Mengerjakan pemboran di tebing terjal kemiringan 45° hingga 85° menggunakan rig modular khusus (man-portable / heli-portable) yang di-anchor kokoh pada dinding tebing. Dirancang untuk pekerjaan stabilisasi lereng, soil nailing, rock bolting, dan drainase horizontal.",
    scope: [
      "Horizontal & sub-horizontal drainage hole drilling",
      "Anchor drilling untuk penahan tanah & rockfall netting",
      "Mobilisasi rig modular ke puncak tebing terisolir",
      "Pemasangan perkuatan tebing & cable anchor bertegangan tinggi"
    ],
    fieldConditions: [
      "Kemiringan lereng ekstrem > 50 derajat",
      "Zona bahaya longsor tebing aktif di jalur transportasi vital",
      "Akses personil menggunakan harness & rope access teknis"
    ],
    image: "/images/service-mountain.webp",
    fallbackImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    number: "06",
    title: "Custom Drilling",
    tag: "Tailored Solutions",
    shortDescription: "Solusi rekayasa pengeboran kustom untuk tantangan spesifik proyek yang tidak dapat diatasi metode standar.",
    description: "Ketika kondisi lapangan tidak memungkinkan penggunaan alat konvensional, kami merancang konfigurasi rig khusus, modifikasi sistem sirkulasi udara/air, serta sistem winch peluncur mandiri untuk menuntaskan pekerjaan sesuai target waktu dan anggaran.",
    scope: [
      "Re-engineering & adaptasi rig untuk ruang terbatas / basement terowongan",
      "Deep geotechnical instrumentation pada struktur bendungan",
      "Pengeboran dewatering pada formasi bertekanan artesis tinggi",
      "Supervisi teknis lapangan dan konsultasi metodologi metode bor khusus"
    ],
    fieldConditions: [
      "Keterbatasan clearance atap atau ruang kerja sempit",
      "Kondisi lingkungan sensitif yang membatasi getaran dan kebisingan",
      "Target waktu cepat untuk mitigasi darurat bencana geologi"
    ],
    image: "/images/service-custom.webp",
    fallbackImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
  }
];
