import { DistrictData } from './types';

// Helper to generate placeholder data for categories not fully detailed in the prompt
const generateGenericItems = (category: string, districtName: string, count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${districtName}-${category}-${i}`,
    name: `${districtName} ${category} Point ${i + 1}`,
    description: `A prominent ${category} destination in ${districtName}.`,
    location: `${districtName} Area`,
    tags: [category, districtName]
  }));
};

const BATHINDA: DistrictData = {
  id: 'bathinda',
  name: 'Bathinda',
  tagline: 'City of Lakes & Ancient Forts',
  description: 'Ancient Vikramapur, home to the oldest fort in India and a modern industrial hub.',
  heroImage: '',
  categories: {
    history: [
      { id: 'qila-mubarak', name: 'Qila Mubarak', description: '1800-2000 year old brick fort where Razia Sultana was imprisoned. Visited by Guru Gobind Singh Ji.', location: 'City Center' },
    ],
    nature: [
      { id: 'rose-garden', name: 'Rose Garden', description: 'Once the biggest in Asia, a beautiful spot for nature lovers.' },
      { id: 'bir-talab', name: 'Bir Talab Zoo', description: 'Zoological park located in a forest area.' },
      { id: 'lakes', name: 'City Lakes', description: 'Chetak Lake, Joggers Park Lake offering boating.' }
    ],
    religious: [
      { id: 'damdama', name: 'Takht Sri Damdama Sahib', description: 'One of the 5 Takhts, located in Talwandi Sabo (28km away). Guru Gobind Singh Ji compiled the Guru Granth Sahib here.', type: 'Gurudwara' },
      { id: 'maiser', name: 'Maisar Khana Temple', description: 'Famous Mata shrine 29km away. Huge fairs held here.', type: 'Mandir' },
      { id: 'lakhi-jungle', name: 'Lakhi Jungle', description: 'Historic spot where Guru Nanak Dev Ji meditated.', type: 'Gurudwara' }
    ],
    industry: [
      { id: 'hmel', name: 'HMEL Refinery', description: 'Huge oil refinery by HPCL-Mittal.' },
      { id: 'thermal', name: 'Thermal Power Plants', description: 'Guru Nanak Dev & Guru Hargobind Thermal Plants.' }
    ],
    food: [
      { id: 'bhatti', name: 'Bhatti da Murga', description: 'Legendary charcoal-grilled tandoori chicken.' }
    ],
    education: [
      { id: 'cup', name: 'Central University of Punjab', description: 'Top ranking university.' },
      { id: 'aiims', name: 'AIIMS Bathinda', description: 'Premier medical institute.' }
    ]
  }
};

const AMRITSAR: DistrictData = {
  id: 'amritsar',
  name: 'Amritsar',
  tagline: 'The Spiritual Capital (Sifti da Ghar)',
  description: 'Founded in 1577 by Guru Ram Das Ji, it is the holiest city for Sikhs.',
  heroImage: '',
  categories: {
    religious: [
      { id: 'golden-temple', name: 'Harmandir Sahib', description: 'The holiest shrine of Sikhism. 24x7 open langar.', type: 'Gurudwara' },
      { id: 'durgiana', name: 'Durgiana Temple', description: 'Hindu counterpart to Golden Temple, dedicated to Goddess Durga.', type: 'Mandir' },
      { id: 'ram-tirath', name: 'Ram Tirath Temple', description: 'Ancient ashram where Sita gave birth to Luv-Kush.', type: 'Mandir' }
    ],
    history: [
      { id: 'jallianwala', name: 'Jallianwala Bagh', description: 'Memorial of the 1919 massacre.' },
      { id: 'partition', name: 'Partition Museum', description: 'World-class museum on 1947 stories.' },
      { id: 'gobindgarh', name: 'Gobindgarh Fort', description: '7D shows, museums, and food street.' },
      { id: 'wagah', name: 'Wagah Border', description: 'Beating Retreat Ceremony (28km away).' }
    ],
    food: [
      { id: 'kulcha', name: 'Pehelwan Kulcha', description: 'World famous Amritsari Kulcha.' },
      { id: 'kesar', name: 'Kesar da Dhaba', description: 'Legendary dal makhani and parathas.' },
      { id: 'jalebi', name: 'Gurdas Ram Jalebi', description: 'Famous jalebis since 1910.' }
    ],
    nature: [
       { id: 'harike', name: 'Harike Wetland', description: 'Largest wetland in North India (55km away).' }
    ]
  }
};

const MANSA: DistrictData = {
  id: 'mansa',
  name: 'Mansa',
  tagline: 'Area of Malwa’s White Gold',
  description: 'Cotton producing hub ("Chhota Bathinda") and homeland of Sidhu Moose Wala.',
  heroImage: '',
  categories: {
    farm: [
      { id: 'cotton', name: 'Cotton Fields', description: 'Vast fields of "White Gold" (Cotton).' }
    ],
    culture: [
       { id: 'moosa', name: 'Village Moosa', description: 'Village of legendary singer Sidhu Moose Wala.' }
    ],
    religious: [
      { id: 'meharaj', name: 'Gurudwara Meharaj Sahib', description: 'Famous dera of Jagata Bhagat Ji.', type: 'Gurudwara' },
      { id: 'maisar-khana', name: 'Maisar Khana Mandir', description: 'Powerful Shakti temple near border.', type: 'Mandir' }
    ],
    industry: [
      { id: 'tspl', name: 'Talwandi Sabo Power Plant', description: 'One of the largest thermal plants.' }
    ]
  }
};

const FARIDKOT: DistrictData = {
  id: 'faridkot',
  name: 'Faridkot',
  tagline: 'City of Palaces',
  description: 'Named after Baba Farid, known for its royal heritage and clean railway station.',
  heroImage: '',
  categories: {
    heritage: [
      { id: 'raj-mahal', name: 'Raj Mahal', description: 'Victorian-Indo-Saracenic palace of the last King.' },
      { id: 'qila', name: 'Faridkot Fort', description: '700-year-old fort.' },
      { id: 'darbar', name: 'Darbar Ganj', description: 'Royal guest house and gardens.' }
    ],
    religious: [
      { id: 'godari', name: 'Gurudwara Godari Sahib', description: 'Guru Gobind Singh Ji stayed here.', type: 'Gurudwara' },
      { id: 'tibbi', name: 'Gurudwara Tibbi Sahib', description: 'Historical site where Guru Ji shot an arrow.', type: 'Gurudwara' }
    ],
    accommodation: [
      { id: 'fairy', name: 'Fairy Cottage', description: 'Heritage hotel, formerly a royal guest house.', type: 'Hotel' }
    ]
  }
};

const MUKTSAR: DistrictData = {
  id: 'muktsar',
  name: 'Sri Muktsar Sahib',
  tagline: 'Pool of Liberation',
  description: 'Site of the Battle of Muktsar (1705) where 40 Sikhs (Chali Mukte) attained martyrdom.',
  heroImage: '',
  categories: {
    religious: [
      { id: 'darbar', name: 'Sri Darbar Sahib', description: 'Main Gurudwara commemorating the 40 Muktas.', type: 'Gurudwara' },
      { id: 'tuti-gandhi', name: 'Gurudwara Tuti Gandhi Sahib', description: 'Marks where the Guru\'s musket rope broke.', type: 'Gurudwara' },
      { id: 'tibbi-muktsar', name: 'Gurudwara Tibbi Sahib', description: 'Guru Ji stood on this mound during battle.', type: 'Gurudwara' }
    ],
    history: [
      { id: 'minar', name: 'Mukta Minar', description: 'Tallest victory tower in the district.' }
    ],
    culture: [
      { id: 'maghi', name: 'Maghi Mela', description: 'Huge fair held every January (13-14).' }
    ]
  }
};

const FEROZEPUR: DistrictData = {
  id: 'ferozepur',
  name: 'Ferozepur',
  tagline: 'Land of Martyrs',
  description: 'Border district with huge historical importance regarding freedom struggle and 1971 war.',
  heroImage: '',
  categories: {
    history: [
      { id: 'hussainiwala', name: 'Hussainiwala Memorial', description: 'Cremation spot of Bhagat Singh, Rajguru & Sukhdev. Border retreat ceremony.' },
      { id: 'saragarhi', name: 'Saragarhi Memorial', description: 'Commemorates the Battle of Saragarhi.' },
      { id: 'anglo', name: 'Anglo-Sikh War Memorial', description: 'Site of the Battle of Ferozeshah.' }
    ],
    nature: [
      { id: 'harike', name: 'Harike Wetland', description: 'Largest wetland in North India, bird paradise.' }
    ],
    religious: [
      { id: 'jain', name: 'Jain Mandir Zira', description: 'Ancient temple with beautiful carvings.', type: 'Mandir' }
    ]
  }
};

const JALANDHAR: DistrictData = {
  id: 'jalandhar',
  name: 'Jalandhar',
  tagline: 'Sports Capital & NRI Hub',
  description: 'Ancient city, major media hub, and center for sports goods manufacturing.',
  heroImage: '',
  categories: {
    religious: [
      { id: 'devi-talab', name: 'Devi Talab Mandir', description: '250-year-old Shakti temple, very powerful.', type: 'Mandir' },
      { id: 'cathedral', name: 'St. Mary\'s Cathedral', description: 'Beautiful architecture.', type: 'Church' }
    ],
    nature: [
      { id: 'wonderland', name: 'Wonderland Theme Park', description: 'Water and dry rides.' }
    ],
    education: [
      { id: 'lpu', name: 'Lovely Professional University', description: 'Massive campus.', type: 'University' }
    ],
    food: [
      { id: 'haveli', name: 'Rangla Punjab Haveli', description: 'Cultural dining experience.' }
    ],
    history: [
       { id: 'nurmahal', name: 'Nurmahal Sarai', description: 'Mughal Sarai built by Noor Jahan.' }
    ]
  }
};

const HOSHIARPUR: DistrictData = {
  id: 'hoshiarpur',
  name: 'Hoshiarpur',
  tagline: 'Land of Saints & Kinnows',
  description: 'Greenest district in Punjab, located in the Shivalik foothills.',
  heroImage: '',
  categories: {
    nature: [
      { id: 'takhni', name: 'Takhni-Rehmapur Sanctuary', description: 'Wildlife sanctuary with leopards and deer.' },
      { id: 'citrus', name: 'Citrus County', description: 'Luxury farm stays in Kinnow orchards.' }
    ],
    history: [
      { id: 'dholbaha', name: 'Dholbaha Archaeological Site', description: 'Harappan era artifacts found here.' },
      { id: 'bajwara', name: 'Bajwara Fort', description: 'Ancient fort with panoramic views.' }
    ],
    shopping: [
      { id: 'wood', name: 'Wooden Inlay Market', description: 'Famous for wooden handicrafts.' }
    ]
  }
};

const RUPNAGAR: DistrictData = {
  id: 'rupnagar',
  name: 'Rupnagar (Ropar)',
  tagline: 'Cradle of Harappan Civilization',
  description: 'Home to 5000-year-old history and the birthplace of Khalsa.',
  heroImage: '',
  categories: {
    history: [
      { id: 'museum', name: 'Archaeological Museum', description: 'Displays Harappan artifacts.' },
      { id: 'virasat', name: 'Virasat-e-Khalsa', description: 'World-class Sikh history museum in Anandpur Sahib.' }
    ],
    religious: [
      { id: 'kesgarh', name: 'Takht Sri Kesgarh Sahib', description: 'Birthplace of the Khalsa (1699).', type: 'Gurudwara' },
      { id: 'chamkaur', name: 'Chamkaur Sahib', description: 'Site of the battle where elder Sahibzadas were martyred.', type: 'Gurudwara' }
    ],
    nature: [
      { id: 'bhakra', name: 'Bhakra Nangal Dam', description: 'One of the highest gravity dams.' },
      { id: 'wetland', name: 'Ropar Wetland', description: 'Ramsar site for bird watching.' }
    ]
  }
};

const MOHALI: DistrictData = {
  id: 'mohali',
  name: 'Mohali (SAS Nagar)',
  tagline: 'IT & Sports Hub',
  description: 'Modern city, home to cricket and tech.',
  heroImage: '',
  categories: {
    heritage: [
      { id: 'fateh', name: 'Fateh Burj', description: 'Tallest victory tower in India (Chappar Chiri).' }
    ],
    education: [
       { id: 'isb', name: 'Indian School of Business', description: 'Premier business school.', type: 'Institute' }
    ],
    religious: [
      { id: 'amb', name: 'Gurudwara Amb Sahib', description: 'Historical Gurudwara.', type: 'Gurudwara' }
    ],
    shopping: [
      { id: 'vr', name: 'VR Punjab Mall', description: 'Largest mall in the region.' }
    ],
    nature: [
       { id: 'pca', name: 'PCA Stadium', description: 'World class cricket stadium.' }
    ]
  }
};

const CHANDIGARH: DistrictData = {
  id: 'chandigarh',
  name: 'Chandigarh',
  tagline: 'The City Beautiful',
  description: 'India’s first planned city, capital of Punjab & Haryana.',
  heroImage: '',
  categories: {
    nature: [
      { id: 'rock', name: 'Rock Garden', description: 'Art from recycled waste.' },
      { id: 'sukhna', name: 'Sukhna Lake', description: 'Man-made lake for boating.' },
      { id: 'rose', name: 'Rose Garden', description: 'Asia\'s largest rose garden.' }
    ],
    shopping: [
      { id: 'elante', name: 'Elante Mall', description: 'Huge shopping complex.' },
      { id: 'sec17', name: 'Sector 17 Plaza', description: 'Open air shopping center.' }
    ],
    history: [
      { id: 'capitol', name: 'Capitol Complex', description: 'UNESCO World Heritage site by Le Corbusier.' }
    ]
  }
};

const BARNALA: DistrictData = {
  id: 'barnala',
  name: 'Barnala',
  tagline: 'Textile Hub',
  description: 'Centrally located district known for textiles and spirituality.',
  heroImage: '',
  categories: {
    industry: [
      { id: 'trident', name: 'Trident Group', description: 'World\'s largest terry towel maker.' }
    ],
    religious: [
      { id: 'nanaksar', name: 'Gurudwara Nanaksar Thath', description: 'Serene complex.', type: 'Gurudwara' },
      { id: 'geeta', name: 'Geeta Bhawan', description: 'Radha-Krishna temple.', type: 'Mandir' }
    ],
    nature: [
      { id: 'bird', name: 'Barnala Bird Sanctuary', description: 'Home to migratory birds.' }
    ]
  }
};

const PATIALA: DistrictData = {
  id: 'patiala',
  name: 'Patiala',
  tagline: 'The Royal City',
  description: 'Famous for its palaces, Patiala Peg, Jutti and Paranda.',
  heroImage: '',
  categories: {
    heritage: [
      { id: 'qila', name: 'Qila Mubarak Complex', description: '260-year-old fort-palace. Darbar Hall with original chandeliers. Contains the Sheesh Mahal.' },
      { id: 'sheesh', name: 'Sheesh Mahal', description: 'Palace of Mirrors built in 1847. Thousands of colored glass mirrors and frescoes.' },
      { id: 'moti-bagh', name: 'Moti Bagh Palace (NIS)', description: 'Massive white palace built in 1847, now the National Institute of Sports.' },
      { id: 'baradari', name: 'Baradari Gardens', description: '18th-century royal garden with marble baradari. Evening light shows.' },
      { id: 'bahadurgarh', name: 'Bahadurgarh Fort', description: 'Built 1658 by Saif Khan, renovated by Maharaja Karam Singh. Huge walls.' },
      { id: 'rajindera', name: 'Rajindera Kothi', description: 'Former royal guest house – now Heritage Hotel.' }
    ],
    religious: [
      { id: 'dukh', name: 'Gurudwara Dukh Niwaran Sahib', description: 'Guru Tegh Bahadur Ji blessed this place as the "remover of sorrow".', type: 'Gurudwara' },
      { id: 'kali', name: 'Kali Devi Temple', description: '250-year-old temple, considered one of the 51 Shakti Peethas.', type: 'Mandir' }
    ],
    shopping: [
       { id: 'adalat', name: 'Adalat Bazaar', description: 'Famous for Patiala Salwar, Juttis, and Phulkari dupattas.' }
    ],
    food: [
      { id: 'jaggi', name: 'Jaggi Sweets', description: 'Famous for Patiala Shahi Lassi.' },
      { id: 'mohan', name: 'Mohan Dhaba', description: 'Known for Aloo Parantha and white makhan.' },
      { id: 'sahni', name: 'Sahni Fish Corner', description: 'Famous for Mutton Curry.' },
      { id: 'sadhu', name: 'Sadhu Ram di Kachori', description: 'Legendary Pindi Chhole.' }
    ],
    accommodation: [
      { id: 'neemrana', name: 'Neemrana’s Baradari Palace', description: 'Heritage hotel offering a royal experience.', type: 'Hotel' },
      { id: 'eqbal', name: 'Hotel Eqbal Inn', description: 'Best value hotel near Baradari.', type: 'Hotel' }
    ]
  }
};

const SANGRUR: DistrictData = {
  id: 'sangrur',
  name: 'Sangrur',
  tagline: 'Heart of Malwa',
  description: 'Former capital of Jind State, rich in royal heritage.',
  heroImage: '',
  categories: {
    heritage: [
      { id: 'banasar', name: 'Banasar Bagh', description: 'Royal gardens and palace with marble baradari.' },
      { id: 'clock', name: 'Clock Tower', description: 'Iconic landmark.' }
    ],
    history: [
       { id: 'bhadaur', name: 'Bhadaur Fort', description: 'Birthplace of Mirza-Sahiba.' }
    ]
  }
};

const GURDASPUR: DistrictData = {
  id: 'gurdaspur',
  name: 'Gurdaspur',
  tagline: 'Northern Gateway',
  description: 'Rich in history, touches Pakistan border and Himachal.',
  heroImage: '',
  categories: {
    religious: [
      { id: 'dera', name: 'Dera Baba Nanak', description: 'View Kartarpur Sahib (Pakistan) from here.', type: 'Gurudwara' },
      { id: 'achal', name: 'Achal Sahib', description: 'Ancient Gurudwara in Batala.', type: 'Gurudwara' },
      { id: 'qadian', name: 'Qadian', description: 'Ahmadiyya Muslim Headquarters.', type: 'Mosque' }
    ],
    industry: [
      { id: 'batala', name: 'Batala Foundries', description: 'Iron bird city.' }
    ],
    nature: [
       { id: 'fish', name: 'Fish Market', description: 'Famous for fish delicacies.' }
    ]
  }
};

const MOGA: DistrictData = {
  id: 'moga',
  name: 'Moga',
  tagline: 'NRI & Dairy Hub',
  description: 'Prosperous rural district, Nestlé home.',
  heroImage: '',
  categories: {
    religious: [
      { id: 'nanaksar', name: 'Gurudwara Nanaksar Kaleran', description: 'Grand marble Gurudwara.', type: 'Gurudwara' },
      { id: 'dina', name: 'Dina Sahib', description: 'Historical site.', type: 'Gurudwara' }
    ],
    industry: [
      { id: 'nestle', name: 'Nestlé Factory', description: 'World\'s largest milk plant.' }
    ],
    farm: [
      { id: 'baag', name: 'The Baag Farm Stay', description: 'Authentic farm experience.' }
    ]
  }
};

const FATEHGARH_SAHIB: DistrictData = {
  id: 'fatehgarh-sahib',
  name: 'Fatehgarh Sahib',
  tagline: 'Land of Martyrdom',
  description: 'Site of the martyrdom of the younger Sahibzadas.',
  heroImage: '',
  categories: {
    religious: [
      { id: 'fatehgarh', name: 'Gurudwara Sri Fatehgarh Sahib', description: 'Commemorates the younger Sahibzadas.', type: 'Gurudwara' },
      { id: 'jyoti', name: 'Jyoti Sarup Sahib', description: 'Cremation site.', type: 'Gurudwara' },
      { id: 'rauza', name: 'Rauza Sharif', description: 'Tomb of Sufi saint Shaikh Ahmad Sirhindi.', type: 'Mosque' }
    ],
    heritage: [
      { id: 'aam-khas', name: 'Aam Khas Bagh', description: 'Mughal Garden.' },
      { id: 'sanghol', name: 'Sanghol', description: 'Harappan archaeological site.' }
    ]
  }
};

const FAZILKA: DistrictData = {
  id: 'fazilka',
  name: 'Fazilka',
  tagline: 'Desert & Border Land',
  description: 'Touches Thar desert and Pakistan border.',
  heroImage: '',
  categories: {
    history: [
      { id: 'asafwala', name: 'Asafwala War Memorial', description: '1971 War memorial with captured tanks.' },
      { id: 'sadqi', name: 'Sadqi Border', description: 'Border retreat ceremony.' }
    ],
    nature: [
      { id: 'abohar', name: 'Abohar Wildlife Sanctuary', description: 'Blackbuck sanctuary.' }
    ],
    food: [
      { id: 'kinnow', name: 'Kinnow Mandi', description: 'Huge citrus market.' }
    ]
  }
};

const KAPURTHALA: DistrictData = {
  id: 'kapurthala',
  name: 'Kapurthala',
  tagline: 'Paris of Punjab',
  description: 'Known for its French and Moorish architecture.',
  heroImage: '',
  categories: {
    heritage: [
      { id: 'jagatjit', name: 'Jagatjit Palace', description: 'Modeled after Versailles.' },
      { id: 'elysee', name: 'Elysee Palace', description: 'Now Circuit House.' }
    ],
    religious: [
      { id: 'moorish', name: 'Moorish Mosque', description: 'Copy of Grand Mosque of Marrakesh.', type: 'Mosque' },
      { id: 'panch', name: 'Panch Mandir', description: 'Unique temple architecture.', type: 'Mandir' },
      { id: 'ber', name: 'Gurudwara Ber Sahib', description: 'Where Guru Nanak Dev Ji meditated.', type: 'Gurudwara' }
    ],
    nature: [
      { id: 'kanjli', name: 'Kanjli Wetland', description: 'Scenic lake.' }
    ]
  }
};

const LUDHIANA: DistrictData = {
  id: 'ludhiana',
  name: 'Ludhiana',
  tagline: 'Manchester of India',
  description: 'Industrial hub of Punjab, famous for hosiery, cycles, and sewing machines.',
  heroImage: '',
  categories: {
    industry: [
      { id: 'hosiery', name: 'Hosiery Industry', description: 'Winter wear capital of India.' },
      { id: 'cycle', name: 'Cycle Industry', description: 'Hero Cycles, Avon Cycles headquarters.' }
    ],
    education: [
      { id: 'pau', name: 'Punjab Agricultural University', description: 'Leading agriculture university causing Green Revolution.', type: 'University' }
    ],
    history: [
      { id: 'lodhi', name: 'Lodhi Fort', description: '500 year old fort.' },
      { id: 'museum', name: 'Rural Museum', description: 'Located in PAU, displays Punjabi culture.' }
    ],
    shopping: [
       { id: 'pavilion', name: 'Pavilion Mall', description: 'Premium shopping destination.' },
       { id: 'chaura', name: 'Chaura Bazaar', description: 'Old wholesale market.' }
    ],
    religious: [
        { id: 'dukh-niwaran', name: 'Gurudwara Dukh Niwaran Sahib', description: 'Famous Gurudwara in Field Ganj.', type: 'Gurudwara' },
        { id: 'alamgir', name: 'Gurudwara Manji Sahib Alamgir', description: 'Historic Gurudwara (10km away).', type: 'Gurudwara' }
    ]
  }
};

const MALERKOTLA: DistrictData = {
  id: 'malerkotla',
  name: 'Malerkotla',
  tagline: 'Symbol of Harmony',
  description: 'Punjab\'s only Muslim majority district, known for peace.',
  heroImage: '',
  categories: {
    heritage: [
      { id: 'qila', name: 'Qila Mubarak', description: 'Palace of the Nawabs.' },
      { id: 'hada', name: 'Ha-Da-Mohalla', description: 'Peace memorial.' }
    ],
    religious: [
      { id: 'jama', name: 'Jama Masjid', description: 'Ancient mosque.', type: 'Mosque' },
      { id: 'chakreshwari', name: 'Mata Chakreshwari Devi', description: 'Ancient temple.', type: 'Mandir' }
    ],
    food: [
      { id: 'biryani', name: 'Nawabi Biryani', description: 'Famous local dish.' }
    ]
  }
};

const TARN_TARAN: DistrictData = {
  id: 'tarn-taran',
  name: 'Tarn Taran',
  tagline: 'Land of Holy Tank',
  description: 'Has the world\'s largest Sarovar.',
  heroImage: '',
  categories: {
    religious: [
      { id: 'darbar', name: 'Sri Harmandir Sahib', description: 'Largest Sarovar in the world.', type: 'Gurudwara' },
      { id: 'goindwal', name: 'Goindwal Sahib', description: '84-step Baoli.', type: 'Gurudwara' },
      { id: 'khadur', name: 'Khadur Sahib', description: 'Guru Angad Dev Ji\'s seat.', type: 'Gurudwara' }
    ]
  }
};

const PATHANKOT: DistrictData = {
  id: 'pathankot',
  name: 'Pathankot',
  tagline: 'Gateway to J&K',
  description: 'Strategic city at the foothills.',
  heroImage: '',
  categories: {
    nature: [
      { id: 'ranjit', name: 'Ranjit Sagar Dam', description: 'Massive lake.' }
    ],
    religious: [
      { id: 'muktesar', name: 'Muktesar Mahadev', description: 'Cave temples.', type: 'Mandir' }
    ]
  }
};

const NAWANSHAHR: DistrictData = {
  id: 'nawanshahr',
  name: 'Nawanshahr (SBS Nagar)',
  tagline: 'Land of Martyrs',
  description: 'Home to Khatkar Kalan.',
  heroImage: '',
  categories: {
    history: [
       { id: 'khatkar', name: 'Khatkar Kalan', description: 'Ancestral village of Bhagat Singh.' }
    ]
  }
};

// Re-exporting comprehensive list
export const DISTRICTS_DATA: DistrictData[] = [
  AMRITSAR,
  BARNALA,
  BATHINDA,
  CHANDIGARH,
  FARIDKOT,
  FATEHGARH_SAHIB,
  FAZILKA,
  FEROZEPUR,
  GURDASPUR,
  HOSHIARPUR,
  JALANDHAR,
  KAPURTHALA,
  LUDHIANA,
  MALERKOTLA,
  MANSA,
  MOGA,
  MOHALI,
  MUKTSAR,
  NAWANSHAHR,
  PATHANKOT,
  PATIALA,
  RUPNAGAR,
  SANGRUR,
  TARN_TARAN
];