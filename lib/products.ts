export type ProductCategory = 'chiller' | 'temperature-control' | 'hvac';

export interface Product {
  slug: string;
  category: ProductCategory;
  name: string;
  shortDesc: { tr: string; en: string; de: string; fr: string };
  description: { tr: string; en: string; de: string; fr: string };
  capacity?: string;
  features: { tr: string[]; en: string[]; de: string[]; fr: string[] };
  applications: { tr: string[]; en: string[]; de: string[]; fr: string[] };
  image: string;
}

export const products: Product[] = [
  {
    slug: 'mastertech',
    category: 'chiller',
    name: 'MASTERtech',
    shortDesc: {
      tr: 'Hava soğutmalı endüstriyel chiller — 350 kW\'den 2500 kW\'ye',
      en: 'Air-cooled industrial chiller — 350 kW to 2500 kW',
      de: 'Luftgekühlter Industriechiller — 350 kW bis 2500 kW',
      fr: 'Refroidisseur industriel à air — 350 kW à 2500 kW',
    },
    description: {
      tr: 'MASTERtech, Aytek\'in amiral gemisi hava soğutmalı chiller serisidir. 350 kW\'den 2500 kW\'ye kadar geniş kapasite aralığıyla plastik, gıda, kimya ve enerji sektörlerine hitap eder. Yüksek enerji verimliliği ve uzun ömürlü tasarımıyla endüstrinin en güvenilir chiller sistemidir.',
      en: 'MASTERtech is Aytek\'s flagship air-cooled chiller series. With a wide capacity range from 350 kW to 2500 kW, it serves the plastics, food, chemical and energy sectors. With its high energy efficiency and long-lasting design, it is the most reliable chiller system in the industry.',
      de: 'MASTERtech ist Ayteks Flaggschiff-Luftkühlchillerserie. Mit einem breiten Kapazitätsbereich von 350 kW bis 2500 kW bedient es die Kunststoff-, Lebensmittel-, Chemie- und Energiesektoren.',
      fr: 'MASTERtech est la série phare de refroidisseurs à air d\'Aytek. Avec une large plage de capacité de 350 kW à 2500 kW, il sert les secteurs des plastiques, de l\'alimentation, de la chimie et de l\'énergie.',
    },
    capacity: '350–2500 kW',
    features: {
      tr: ['Hava soğutmalı kompakt tasarım', 'R134a / R407C / R410A soğutucu akışkan', 'Mikro-işlemci kontrol', 'Genişletilmiş çalışma aralığı (-10°C\'ye kadar)', 'Düşük ses seviyesi', 'Kolay bakım erişimi'],
      en: ['Air-cooled compact design', 'R134a / R407C / R410A refrigerant', 'Microprocessor control', 'Extended operating range (down to -10°C)', 'Low noise level', 'Easy maintenance access'],
      de: ['Luftgekühltes kompaktes Design', 'R134a / R407C / R410A Kältemittel', 'Mikroprozessorsteuerung', 'Erweiterter Betriebsbereich (bis -10°C)', 'Niedriger Geräuschpegel', 'Einfacher Wartungszugang'],
      fr: ['Conception compacte à air', 'Réfrigérant R134a / R407C / R410A', 'Contrôle par microprocesseur', 'Plage de fonctionnement étendue (jusqu\'à -10°C)', 'Faible niveau sonore', 'Accès facile pour la maintenance'],
    },
    applications: {
      tr: ['Plastik enjeksiyon', 'Ekstrüzyon', 'Gıda işleme', 'Kimyasal prosesler', 'Tekstil', 'Enerji santralleri'],
      en: ['Plastic injection', 'Extrusion', 'Food processing', 'Chemical processes', 'Textile', 'Power plants'],
      de: ['Kunststoffspritzguss', 'Extrusion', 'Lebensmittelverarbeitung', 'Chemische Prozesse', 'Textil', 'Kraftwerke'],
      fr: ['Injection plastique', 'Extrusion', 'Transformation alimentaire', 'Processus chimiques', 'Textile', 'Centrales électriques'],
    },
    image: '/images/products/mastertech.jpg',
  },
  {
    slug: 'novatech',
    category: 'chiller',
    name: 'NOVAtech',
    shortDesc: {
      tr: 'Multi Tandem su soğutucu sistemi',
      en: 'Multi Tandem water cooling system',
      de: 'Multi Tandem Wasserkühlsystem',
      fr: 'Système de refroidissement Multi Tandem',
    },
    description: {
      tr: 'NOVAtech, Multi Tandem konfigürasyonuyla yüksek soğutma kapasitesi sunan gelişmiş bir chiller sistemidir. Paralel çalışan kompresörler sayesinde hem enerji tasarrufu hem de yedekleme güvenilirliği sağlar.',
      en: 'NOVAtech is an advanced chiller system offering high cooling capacity with Multi Tandem configuration. Thanks to parallel compressors, it provides both energy savings and backup reliability.',
      de: 'NOVAtech ist ein fortschrittliches Chillersystem mit hoher Kühlkapazität in Multi-Tandem-Konfiguration.',
      fr: 'NOVAtech est un système de refroidissement avancé offrant une haute capacité de refroidissement avec la configuration Multi Tandem.',
    },
    capacity: 'Multi Tandem',
    features: {
      tr: ['Multi Tandem kompresör konfigürasyonu', 'Kademeli kapasite kontrolü', 'Yedek kompresör güvenilirliği', 'Enerji optimize edilmiş çalışma', 'Uzaktan izleme desteği'],
      en: ['Multi Tandem compressor configuration', 'Staged capacity control', 'Backup compressor reliability', 'Energy-optimized operation', 'Remote monitoring support'],
      de: ['Multi-Tandem-Kompressorkonfiguration', 'Stufige Kapazitätsregelung', 'Redundante Kompressorzuverlässigkeit', 'Energieoptimierter Betrieb', 'Fernüberwachungsunterstützung'],
      fr: ['Configuration compresseur Multi Tandem', 'Contrôle de capacité par étapes', 'Fiabilité du compresseur de secours', 'Fonctionnement optimisé en énergie', 'Support de surveillance à distance'],
    },
    applications: {
      tr: ['Büyük ölçekli plastik tesisler', 'Otomotiv boyahane', 'Kimya endüstrisi', 'Soğuk hava depoları'],
      en: ['Large-scale plastic facilities', 'Automotive paint shops', 'Chemical industry', 'Cold storage'],
      de: ['Großplastikanlagen', 'Automobillackieranlagen', 'Chemieindustrie', 'Kühllager'],
      fr: ['Grandes installations plastiques', 'Cabines de peinture automobile', 'Industrie chimique', 'Entrepôts frigorifiques'],
    },
    image: '/images/products/novatech.jpg',
  },
  {
    slug: 'blowtech',
    category: 'chiller',
    name: 'BLOWtech',
    shortDesc: {
      tr: 'Film soğutma sistemi — %20 verim artışı',
      en: 'Film cooling system — 20% efficiency increase',
      de: 'Filmkühlsystem — 20% Effizienzsteigerung',
      fr: 'Système de refroidissement de film — 20% d\'augmentation d\'efficacité',
    },
    description: {
      tr: 'BLOWtech, özellikle plastik film üretiminde kullanılan yenilikçi bir soğutma sistemidir. Özel tasarımı sayesinde üretim verimini %20\'ye kadar artırır ve enerji tüketimini optimize eder.',
      en: 'BLOWtech is an innovative cooling system specially designed for plastic film production. Its special design increases production efficiency by up to 20% and optimizes energy consumption.',
      de: 'BLOWtech ist ein innovatives Kühlsystem speziell für die Kunststofffilmproduktion. Sein spezielles Design steigert die Produktionseffizienz um bis zu 20%.',
      fr: 'BLOWtech est un système de refroidissement innovant spécialement conçu pour la production de films plastiques. Sa conception spéciale augmente l\'efficacité de production jusqu\'à 20%.',
    },
    capacity: 'Modüler',
    features: {
      tr: ['Film soğutma optimizasyonu', '%20\'ye kadar verim artışı', 'Özel hava akış tasarımı', 'Hassas sıcaklık kontrolü', 'Modüler yapı'],
      en: ['Film cooling optimization', 'Up to 20% efficiency increase', 'Special airflow design', 'Precise temperature control', 'Modular structure'],
      de: ['Filmkühloptimierung', 'Bis zu 20% Effizienzsteigerung', 'Spezielles Luftstromdesign', 'Präzise Temperaturregelung', 'Modulare Struktur'],
      fr: ['Optimisation du refroidissement de film', 'Jusqu\'à 20% d\'augmentation d\'efficacité', 'Conception spéciale du flux d\'air', 'Contrôle précis de la température', 'Structure modulaire'],
    },
    applications: {
      tr: ['Plastik film üretimi', 'Şişirme kalıplama', 'Polietilen film ekstrüzyon'],
      en: ['Plastic film production', 'Blow molding', 'Polyethylene film extrusion'],
      de: ['Kunststofffilmproduktion', 'Blasformen', 'Polyethylenfilmextrusion'],
      fr: ['Production de films plastiques', 'Moulage par soufflage', 'Extrusion de films polyéthylène'],
    },
    image: '/images/products/blowtech.jpg',
  },
  {
    slug: 'freetech',
    category: 'chiller',
    name: 'FREEtech',
    shortDesc: {
      tr: 'Free cooling destekli enerji tasarruflu chiller',
      en: 'Free cooling supported energy-saving chiller',
      de: 'Freikühlung-unterstützter energiesparender Chiller',
      fr: 'Refroidisseur économe en énergie avec free cooling',
    },
    description: {
      tr: 'FREEtech, soğuk hava koşullarında doğal soğutmadan yararlanarak enerji tüketimini önemli ölçüde azaltan akıllı bir chiller sistemidir. Yıllık enerji maliyetlerini ciddi ölçüde düşürür.',
      en: 'FREEtech is a smart chiller system that significantly reduces energy consumption by utilizing natural cooling in cold weather conditions. It substantially reduces annual energy costs.',
      de: 'FREEtech ist ein intelligentes Chillersystem, das den Energieverbrauch durch natürliche Kühlung bei kalten Wetterbedingungen erheblich reduziert.',
      fr: 'FREEtech est un système de refroidissement intelligent qui réduit considérablement la consommation d\'énergie en utilisant le refroidissement naturel par temps froid.',
    },
    capacity: '200–1500 kW',
    features: {
      tr: ['Free cooling modu (doğal soğutma)', 'Enerji tasarrufu modu', 'Akıllı geçiş kontrolü', 'Yıllık enerji optimizasyonu', 'BMS entegrasyonu'],
      en: ['Free cooling mode (natural cooling)', 'Energy saving mode', 'Smart transition control', 'Annual energy optimization', 'BMS integration'],
      de: ['Freikühlmodus (natürliche Kühlung)', 'Energiesparmodus', 'Intelligente Übergangssteuerung', 'Jährliche Energieoptimierung', 'BMS-Integration'],
      fr: ['Mode free cooling (refroidissement naturel)', 'Mode économie d\'énergie', 'Contrôle de transition intelligent', 'Optimisation énergétique annuelle', 'Intégration BMS'],
    },
    applications: {
      tr: ['Veri merkezleri', 'Büyük fabrikalar', 'Hastaneler', 'Ofis binaları'],
      en: ['Data centers', 'Large factories', 'Hospitals', 'Office buildings'],
      de: ['Rechenzentren', 'Großfabriken', 'Krankenhäuser', 'Bürogebäude'],
      fr: ['Centres de données', 'Grandes usines', 'Hôpitaux', 'Immeubles de bureaux'],
    },
    image: '/images/products/freetech.jpg',
  },
  {
    slug: 'co2tech',
    category: 'chiller',
    name: 'CO2TECH',
    shortDesc: {
      tr: 'CO₂ soğutuculu, sıfır ozon tükenmesi — patent ürün',
      en: 'CO₂ refrigerant, zero ozone depletion — patented product',
      de: 'CO₂-Kältemittel, null Ozonabbau — Patentprodukt',
      fr: 'Réfrigérant CO₂, zéro appauvrissement de l\'ozone — produit breveté',
    },
    description: {
      tr: 'CO2TECH, Aytek\'in Tasarım Merkezi bünyesinde geliştirilen patent bir üründür. Doğal soğutucu akışkan CO₂ kullanarak sıfır ozon tüketimi ve düşük küresel ısınma potansiyeli sunar. Çevre dostu gelecek için ideal çözüm.',
      en: 'CO2TECH is a patented product developed within Aytek\'s Design Center. Using natural refrigerant CO₂, it offers zero ozone depletion and low global warming potential. The ideal solution for an eco-friendly future.',
      de: 'CO2TECH ist ein patentiertes Produkt, das im Design Center von Aytek entwickelt wurde. Mit dem natürlichen Kältemittel CO₂ bietet es null Ozonabbau und ein niedriges Treibhauspotenzial.',
      fr: 'CO2TECH est un produit breveté développé dans le Centre de Design d\'Aytek. Utilisant le réfrigérant naturel CO₂, il offre zéro appauvrissement de l\'ozone et un faible potentiel de réchauffement climatique.',
    },
    capacity: 'Özel tasarım',
    features: {
      tr: ['CO₂ doğal soğutucu akışkan', 'Sıfır ODP (Ozon Tükenme Potansiyeli)', 'GWP = 1 (Küresel Isınma Potansiyeli)', 'F-gaz yönetmeliğine uyumlu', 'Yüksek basınç tasarımı', 'Aytek patent teknolojisi'],
      en: ['CO₂ natural refrigerant', 'Zero ODP (Ozone Depletion Potential)', 'GWP = 1 (Global Warming Potential)', 'F-gas regulation compliant', 'High pressure design', 'Aytek patent technology'],
      de: ['CO₂ natürliches Kältemittel', 'Null ODP (Ozonabbaupotenzial)', 'GWP = 1 (Treibhauspotenzial)', 'F-Gas-Verordnung konform', 'Hochdruckdesign', 'Aytek Patenttechnologie'],
      fr: ['Réfrigérant naturel CO₂', 'Zéro ODP (Potentiel d\'appauvrissement de l\'ozone)', 'GWP = 1 (Potentiel de réchauffement climatique)', 'Conforme à la réglementation F-gaz', 'Conception haute pression', 'Technologie brevetée Aytek'],
    },
    applications: {
      tr: ['Süpermarketler', 'Soğuk hava depoları', 'Gıda işleme', 'İlaç endüstrisi'],
      en: ['Supermarkets', 'Cold storage', 'Food processing', 'Pharmaceutical industry'],
      de: ['Supermärkte', 'Kühllager', 'Lebensmittelverarbeitung', 'Pharmaindustrie'],
      fr: ['Supermarchés', 'Entrepôts frigorifiques', 'Transformation alimentaire', 'Industrie pharmaceutique'],
    },
    image: '/images/products/co2tech.jpg',
  },
  {
    slug: 'chilltech',
    category: 'temperature-control',
    name: 'CHILLTECH',
    shortDesc: {
      tr: 'Çift sıcaklık ısıtma/soğutma ünitesi — patent ürün',
      en: 'Dual temperature heating/cooling unit — patented product',
      de: 'Doppeltemperatur Heiz-/Kühleinheit — Patentprodukt',
      fr: 'Unité chauffage/refroidissement double température — produit breveté',
    },
    description: {
      tr: 'CHILLTECH, aynı anda hem ısıtma hem de soğutma yapabilen çift sıcaklık kontrol ünitesidir. Aytek Tasarım Merkezi\'nin patent ürünü olan CHILLTECH, plastik işleme makinelerinde kalıp sıcaklığını hassas biçimde kontrol eder.',
      en: 'CHILLTECH is a dual temperature control unit capable of simultaneous heating and cooling. A patented product of Aytek Design Center, CHILLTECH precisely controls mold temperature in plastic processing machines.',
      de: 'CHILLTECH ist eine Doppeltemperaturregeleinheit, die gleichzeitig heizen und kühlen kann. Als patentiertes Produkt des Aytek Design Centers regelt CHILLTECH die Werkzeugtemperatur in Kunststoffverarbeitungsmaschinen präzise.',
      fr: 'CHILLTECH est une unité de contrôle de température double capable de chauffage et refroidissement simultanés. Produit breveté du Centre de Design Aytek, CHILLTECH contrôle précisément la température du moule dans les machines de traitement des plastiques.',
    },
    capacity: '3–120 kW',
    features: {
      tr: ['Eş zamanlı ısıtma ve soğutma', 'Çift kanal kontrolü', '±0.5°C hassasiyet', 'Dokunmatik ekran PLC', 'Hızlı ısıtma/soğutma döngüsü', 'Aytek patent teknolojisi'],
      en: ['Simultaneous heating and cooling', 'Dual channel control', '±0.5°C accuracy', 'Touchscreen PLC', 'Fast heating/cooling cycle', 'Aytek patent technology'],
      de: ['Gleichzeitiges Heizen und Kühlen', 'Dual-Kanal-Kontrolle', '±0,5°C Genauigkeit', 'Touchscreen-SPS', 'Schneller Heiz-/Kühlzyklus', 'Aytek Patenttechnologie'],
      fr: ['Chauffage et refroidissement simultanés', 'Contrôle double canal', 'Précision ±0,5°C', 'PLC écran tactile', 'Cycle rapide chauffage/refroidissement', 'Technologie brevetée Aytek'],
    },
    applications: {
      tr: ['Plastik enjeksiyon kalıpları', 'Ekstrüzyon kafaları', 'Kalıp ön ısıtma', 'Kauçuk vulkanizasyon'],
      en: ['Plastic injection molds', 'Extrusion heads', 'Mold preheating', 'Rubber vulcanization'],
      de: ['Kunststoffspritzgussformen', 'Extrusionsköpfe', 'Formvorwärmung', 'Gummivulkanisierung'],
      fr: ['Moules d\'injection plastique', 'Têtes d\'extrusion', 'Préchauffage des moules', 'Vulcanisation du caoutchouc'],
    },
    image: '/images/products/chilltech.jpg',
  },
  {
    slug: 'pulsetech',
    category: 'temperature-control',
    name: 'PULSETECH',
    shortDesc: {
      tr: '4-48 kanal dinamik sıcaklık kontrolü — patent ürün',
      en: '4-48 channel dynamic temperature control — patented product',
      de: '4-48 Kanal dynamische Temperaturregelung — Patentprodukt',
      fr: 'Contrôle dynamique de température 4-48 canaux — produit breveté',
    },
    description: {
      tr: 'PULSETECH, 4\'ten 48 kanala kadar genişleyebilen çok bölgeli sıcaklık kontrol sistemidir. Her kanalı bağımsız kontrol eden bu patent ürün, karmaşık kalıp yapılarında ideal sıcaklık dağılımı sağlar.',
      en: 'PULSETECH is a multi-zone temperature control system expandable from 4 to 48 channels. This patented product independently controlling each channel ensures ideal temperature distribution in complex mold structures.',
      de: 'PULSETECH ist ein Mehrzonentemperaturregelsystem, das von 4 bis 48 Kanälen erweiterbar ist. Dieses patentierte Produkt regelt jeden Kanal unabhängig.',
      fr: 'PULSETECH est un système de contrôle de température multizone extensible de 4 à 48 canaux. Ce produit breveté contrôle chaque canal indépendamment.',
    },
    capacity: '4–48 kanal / channels',
    features: {
      tr: ['4-48 bağımsız kanal', 'Her kanalda ±1°C hassasiyet', 'Dinamik güç dağıtımı', 'Merkezi kontrol paneli', 'Veri kayıt sistemi', 'Aytek patent teknolojisi'],
      en: ['4-48 independent channels', '±1°C accuracy per channel', 'Dynamic power distribution', 'Central control panel', 'Data logging system', 'Aytek patent technology'],
      de: ['4-48 unabhängige Kanäle', '±1°C Genauigkeit pro Kanal', 'Dynamische Leistungsverteilung', 'Zentrales Bedienfeld', 'Datenprotokollierungssystem', 'Aytek Patenttechnologie'],
      fr: ['4-48 canaux indépendants', 'Précision ±1°C par canal', 'Distribution dynamique de puissance', 'Panneau de contrôle central', 'Système d\'enregistrement de données', 'Technologie brevetée Aytek'],
    },
    applications: {
      tr: ['Çok gözlü kalıplar', 'Sıcak yolluk sistemleri', 'Büyük enjeksiyon makineleri', 'Termoset kalıplama'],
      en: ['Multi-cavity molds', 'Hot runner systems', 'Large injection machines', 'Thermoset molding'],
      de: ['Mehrkavitätenwerkzeuge', 'Heißkanalsysteme', 'Große Spritzgussmaschinen', 'Duroplastformen'],
      fr: ['Moules multi-cavités', 'Systèmes de canaux chauds', 'Grandes machines d\'injection', 'Moulage thermodurcissable'],
    },
    image: '/images/products/pulsetech.jpg',
  },
  {
    slug: 'labtech',
    category: 'temperature-control',
    name: 'LABTECH',
    shortDesc: {
      tr: 'MR chiller — ±0.1°C hassasiyet, tıbbi kullanım',
      en: 'MR chiller — ±0.1°C accuracy, medical use',
      de: 'MR-Chiller — ±0,1°C Genauigkeit, medizinischer Einsatz',
      fr: 'Refroidisseur IRM — précision ±0,1°C, usage médical',
    },
    description: {
      tr: 'LABTECH, MR cihazları ve hassas laboratuvar ekipmanları için tasarlanmış yüksek hassasiyetli bir chiller sistemidir. ±0.1°C hassasiyetiyle medikal ve araştırma uygulamalarının en zorlu gereksinimlerini karşılar.',
      en: 'LABTECH is a high-precision chiller system designed for MRI devices and precision laboratory equipment. With ±0.1°C accuracy, it meets the most demanding requirements of medical and research applications.',
      de: 'LABTECH ist ein hochpräzises Chillersystem für MRT-Geräte und präzise Laborgeräte. Mit einer Genauigkeit von ±0,1°C erfüllt es die anspruchsvollsten Anforderungen medizinischer und Forschungsanwendungen.',
      fr: 'LABTECH est un système de refroidissement haute précision conçu pour les appareils IRM et les équipements de laboratoire de précision. Avec une précision de ±0,1°C, il répond aux exigences les plus exigeantes.',
    },
    capacity: '5–50 kW',
    features: {
      tr: ['±0.1°C hassasiyet', 'Titreşimsiz tasarım', 'Sürekli çalışma için yedekleme', 'Düşük elektromanyetik emisyon', 'Uzaktan izleme', 'Medikal sertifika uyumu'],
      en: ['±0.1°C accuracy', 'Vibration-free design', 'Backup for continuous operation', 'Low electromagnetic emission', 'Remote monitoring', 'Medical certification compliance'],
      de: ['±0,1°C Genauigkeit', 'Schwingungsfreies Design', 'Backup für Dauerbetrieb', 'Niedrige elektromagnetische Emission', 'Fernüberwachung', 'Medizinische Zertifizierungskonformität'],
      fr: ['Précision ±0,1°C', 'Conception sans vibration', 'Secours pour fonctionnement continu', 'Faible émission électromagnétique', 'Surveillance à distance', 'Conformité aux certifications médicales'],
    },
    applications: {
      tr: ['MR görüntüleme cihazları', 'PET tarayıcılar', 'Lazer ekipmanları', 'Araştırma laboratuvarları', 'Savunma elektroniği'],
      en: ['MRI imaging devices', 'PET scanners', 'Laser equipment', 'Research laboratories', 'Defense electronics'],
      de: ['MRT-Bildgebungsgeräte', 'PET-Scanner', 'Lasergeräte', 'Forschungslabore', 'Verteidigungselektronik'],
      fr: ['Appareils d\'imagerie IRM', 'Scanners PET', 'Équipements laser', 'Laboratoires de recherche', 'Électronique de défense'],
    },
    image: '/images/products/labtech.jpg',
  },
  {
    slug: 'multitech',
    category: 'temperature-control',
    name: 'MULTITECH',
    shortDesc: {
      tr: 'Değişken akışlı, kompresör hız kontrolü',
      en: 'Variable flow, compressor speed control',
      de: 'Variabler Durchfluss, Kompressordrehzahlregelung',
      fr: 'Débit variable, contrôle de vitesse du compresseur',
    },
    description: {
      tr: 'MULTITECH, değişken debili pompa ve inverter kompresör teknolojisini birleştiren enerji verimli bir sıcaklık kontrol sistemidir. Değişen proses yüklerine anında adapte olarak enerji tüketimini minimize eder.',
      en: 'MULTITECH is an energy-efficient temperature control system combining variable flow pump and inverter compressor technology. It minimizes energy consumption by instantly adapting to changing process loads.',
      de: 'MULTITECH ist ein energieeffizientes Temperaturregelsystem, das variable Durchflusspumpe und Inverterkompressortechnologie kombiniert.',
      fr: 'MULTITECH est un système de contrôle de température économe en énergie combinant pompe à débit variable et technologie de compresseur à onduleur.',
    },
    capacity: '10–200 kW',
    features: {
      tr: ['Değişken debi pompası', 'Inverter kompresör', 'Akıllı yük adaptasyonu', 'Enerji verimlilik sınıfı A', 'Dokunmatik HMI', 'IoT bağlantısı'],
      en: ['Variable flow pump', 'Inverter compressor', 'Smart load adaptation', 'Energy efficiency class A', 'Touchscreen HMI', 'IoT connectivity'],
      de: ['Variable Durchflusspumpe', 'Inverterkompressor', 'Intelligente Lastanpassung', 'Energieeffizienzklasse A', 'Touchscreen-HMI', 'IoT-Konnektivität'],
      fr: ['Pompe à débit variable', 'Compresseur à onduleur', 'Adaptation de charge intelligente', 'Classe d\'efficacité énergétique A', 'IHM écran tactile', 'Connectivité IoT'],
    },
    applications: {
      tr: ['Plastik işleme', 'Kalıp soğutma', 'Proses ısı transferi', 'Lazer soğutma'],
      en: ['Plastic processing', 'Mold cooling', 'Process heat transfer', 'Laser cooling'],
      de: ['Kunststoffverarbeitung', 'Formkühlung', 'Prozeßwärmeübertragung', 'Laserkühlung'],
      fr: ['Traitement des plastiques', 'Refroidissement de moule', 'Transfert de chaleur de processus', 'Refroidissement laser'],
    },
    image: '/images/products/multitech.jpg',
  },
  {
    slug: 'thermotech-180',
    category: 'temperature-control',
    name: 'THERMOTECH 180',
    shortDesc: {
      tr: 'Yüksek basınçlı sıcak su termoregülasyon — 180°C\'ye kadar',
      en: 'High pressure hot water thermoregulation — up to 180°C',
      de: 'Hochdruck-Heißwasser-Thermoregulierung — bis 180°C',
      fr: 'Thermorégulation eau chaude haute pression — jusqu\'à 180°C',
    },
    description: {
      tr: 'THERMOTECH 180, basınçlı sıcak su ile 180°C\'ye kadar sıcaklık kontrolü sağlayan yüksek performanslı bir termoregülatördür. Özellikle yüksek sıcaklık gerektiren plastik ve kauçuk uygulamaları için idealdir.',
      en: 'THERMOTECH 180 is a high-performance thermoregulator providing temperature control up to 180°C with pressurized hot water. It is especially ideal for plastic and rubber applications requiring high temperatures.',
      de: 'THERMOTECH 180 ist ein leistungsstarker Thermoregulator, der eine Temperaturregelung bis zu 180°C mit Druckheißwasser ermöglicht.',
      fr: 'THERMOTECH 180 est un thermorégulateur haute performance assurant un contrôle de température jusqu\'à 180°C avec de l\'eau chaude pressurisée.',
    },
    capacity: '6–36 kW ısıtma / heating',
    features: {
      tr: ['180°C\'ye kadar sıcaklık', 'Basınçlı kapalı devre sistemi', '±0.5°C hassasiyet', 'Otomatik hava tahliye', 'Aşırı basınç güvenliği', 'Paslanmaz çelik yapı'],
      en: ['Temperature up to 180°C', 'Pressurized closed circuit system', '±0.5°C accuracy', 'Automatic air purge', 'Over-pressure safety', 'Stainless steel construction'],
      de: ['Temperatur bis 180°C', 'Druckgeschlossenes Kreislaufsystem', '±0,5°C Genauigkeit', 'Automatische Entlüftung', 'Überdrucksicherheit', 'Edelstahlkonstruktion'],
      fr: ['Température jusqu\'à 180°C', 'Système en circuit fermé pressurisé', 'Précision ±0,5°C', 'Purge d\'air automatique', 'Sécurité surpression', 'Construction en acier inoxydable'],
    },
    applications: {
      tr: ['Yüksek sıcaklık enjeksiyon', 'Kauçuk vulkanizasyon', 'Epoksi kalıplama', 'Kompozit malzeme üretimi'],
      en: ['High temperature injection', 'Rubber vulcanization', 'Epoxy molding', 'Composite material production'],
      de: ['Hochtemperaturspritzguss', 'Gummivulkanisierung', 'Epoxidformen', 'Verbundwerkstoffproduktion'],
      fr: ['Injection haute température', 'Vulcanisation du caoutchouc', 'Moulage époxy', 'Production de matériaux composites'],
    },
    image: '/images/products/thermotech.jpg',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export const productSlugs = products.map((p) => p.slug);
