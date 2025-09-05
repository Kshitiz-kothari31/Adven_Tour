import React, { useState, useEffect } from "react";
import { MapPin, Calendar, Clock, Users, Camera, ChevronDown, Mountain } from "lucide-react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import './trek.css'

// --- Data (trek details) ---
export const trekData = {
  dayarBugyal: {
    id: 'dayar-bugyal',
    hero: {
      category: 'Epic Mountain Journey',
      title: 'Dayara Bugyal Trek',
      description:
        "The Dayara Bugyal trek is a serene journey through alpine meadows, offering panoramic Himalayan views and a taste of Uttarakhand's folklore.",
      backgroundImage:
        'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=format&fit=crop&w=1600&q=80',
      location: 'Uttarakhand, India',
      bestTime: 'April - June',
      duration: '6 Days',
      alt: 'Dayara Bugyal alpine meadow with mountains',
    },
    folklore: {
      title: 'Sagas and Folklore',
      subtitle: 'Sacred Heritage',
      description:
        'Dayara Bugyal was historically a retreat for sages meditating in the alpine meadows, believed to bring them closer to spiritual enlightenment.',
      image:
        'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=format&fit=crop&w=800&q=80',
      alt: 'Ancient folklore and serene meadow',
      legends: [
        {
          title: 'Lord Shiva Resting',
          description:
            'Legends say Lord Shiva meditated here; the peaceful aura reflects his spiritual presence.',
          color: 'green',
        },
        {
          title: "The Pandavas' Path",
          description:
            'It is believed that the Pandavas passed through these meadows during their exile, performing rituals.',
          color: 'blue',
        },
      ],
    },
    days: [
      {
        day: 'Day 1 to 3',
        title: 'Base Camp to Alpine Meadows',
        description:
          'Trek through rhododendron forests and rolling meadows to reach the alpine camp, enjoying stunning views.',
        image:
          'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Hikers walking through alpine meadows',
        stats: { altitude: '3,605m', distance: '12km', duration: '6-8 hours' },
      },
      {
        day: 'Day 4 to 6',
        title: 'Summit Views and Sacred Grounds',
        description:
          'Ascend to the highest meadows, witness snow-capped peaks, and camp under starlit skies.',
        image:
          'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Snow-capped peaks with evening sky',
        stats: { altitude: '3,858m', distance: '8km', duration: '4-6 hours' },
      },
    ],
    highlights: [
      {
        image:
          'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Vast alpine meadow with horizon view',
        title: 'Alpine Meadows',
        description: 'Vast green carpets stretching to the horizon',
      },
      {
        image:
          'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Snowy Himalayan peaks',
        title: 'Snow-Capped Peaks',
        description: 'Majestic Himalayan giants watching over',
      },
      {
        image:
          'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Night camping under starlit sky',
        title: 'Starlit Camping',
        description: 'Nights under the clearest mountain skies',
      },
    ],
  },

  goumukhTrek: {
    id: 'goumukh-trek',
    hero: {
      category: 'Glacial Source',
      title: 'Gaumukh Trek',
      description:
        'Journey to the source of the sacred Ganges, experiencing spirituality amidst the Himalayas.',
      backgroundImage:
        'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=format&fit=crop&w=1600&q=80',
      location: 'Uttarakhand, India',
      bestTime: 'May - October',
      duration: '8 Days',
      alt: 'Gangotri glacier and Himalayan peaks',
    },
    folklore: {
      title: 'Sacred Origins',
      subtitle: 'Source of Ganga',
      description:
        'Gaumukh, the snout of the Gangotri Glacier, marks the origin of the Bhagirathi River, later forming the holy Ganges.',
      image:
        'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=format&fit=crop&w=800&q=80',
      alt: 'Goumukh glacier flowing into river',
      legends: [
        {
          title: 'Goddess Ganga Descent',
          description:
            'King Bhagirath meditated here to bring Goddess Ganga to earth to cleanse ancestral sins.',
          color: 'blue',
        },
        {
          title: "Lord Shiva's Locks",
          description:
            'Shiva caught Ganga in his matted locks, slowing her flow, giving rise to the Bhagirathi River.',
          color: 'purple',
        },
      ],
    },
    days: [
      {
        day: 'Day 1 to 3',
        title: 'Gangotri to Bhojwassa',
        description:
          'Trek along the Bhagirathi River through lush forests to reach Bhojwassa campsite.',
        image:
          'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Trekking path along river to Bhojwassa',
        stats: { altitude: '3,800m', distance: '14km', duration: '6-7 hours' },
      },
      {
        day: 'Day 4 to 7',
        title: 'Gaumukh Glacier and Return',
        description:
          'Reach the sacred glacier, witness the Ganges’ origin, and experience divine energy.',
        image:
          'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Gaumukh glacier and river source',
        stats: { altitude: '4,200m', distance: '18km', duration: '7-8 hours' },
      },
    ],
    highlights: [
      {
        image:
          'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Gangotri glacier panorama',
        title: 'Gangotri Glacier',
        description: 'Massive glacier feeding the holy Ganges River',
      },
      {
        image:
          'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Bhagirathi peaks in sunlight',
        title: 'Bhagirathi Peaks',
        description: 'Towering Himalayan peaks surrounding the valley',
      },
      {
        image:
          'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Holy river flowing from glacier',
        title: 'Sacred Waters',
        description: 'Witness the origin of India’s holiest river',
      },
    ],
  },

  hiddenWaterfall: {
    id: 'hidden-waterfall',
    hero: {
      category: 'Secret Cascades',
      title: 'Hidden Waterfall Trek',
      description:
        'Discover secluded waterfalls hidden deep within lush forests, where nature’s beauty remains untouched and pristine.',
      backgroundImage:
        'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=format&fit=crop&w=1600&q=80',
      location: 'Himachal Pradesh, India',
      bestTime: 'March - November',
      duration: '3-4 Days',
      alt: 'Hidden waterfall in dense forest',
    },
    folklore: {
      title: 'Whispering Falls',
      subtitle: 'Nature’s Secrets',
      description:
        'Local legends speak of waterfalls appearing only to those with pure intentions, hiding ancient secrets in their mist.',
      image:
        'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=format&fit=crop&w=800&q=80',
      alt: 'Mystical waterfall in forest',
      legends: [
        {
          title: 'Healing Waters',
          description:
            'Tribal stories speak of waterfalls with medicinal properties for those who find them.',
          color: 'blue',
        },
        {
          title: 'Spirit Guardians',
          description:
            'Forest spirits are said to protect these hidden waterfalls, revealing them only to worthy travelers.',
          color: 'green',
        },
      ],
    },
    days: [
      {
        day: 'Day 1 to 2',
        title: 'Forest Exploration',
        description:
          'Venture deep into untouched forests, following the sound of rushing water to discover hidden cascades.',
        image:
          'https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Exploring forest trail towards waterfall',
        stats: { altitude: '1,800m', distance: '8km', duration: '4-5 hours' },
      },
      {
        day: 'Day 3 to 4',
        title: 'Waterfall Discovery',
        description:
          'Reach the magnificent hidden waterfalls, swim in their pristine pools, and camp nearby.',
        image:
          'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Hidden waterfall with natural pool',
        stats: { altitude: '2,100m', distance: '6km', duration: '3-4 hours' },
      },
    ],
    highlights: [
      {
        image:
          'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Secluded waterfall in wilderness',
        title: 'Secluded Waterfalls',
        description: 'Discover hidden cascades untouched by crowds',
      },
      {
        image:
          'https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Crystal clear natural pool beneath waterfall',
        title: 'Natural Pools',
        description: 'Swim in crystal-clear pools beneath the falls',
      },
      {
        image:
          'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Lush forest surrounding waterfall',
        title: 'Lush Forests',
        description: 'Explore dense, untouched wilderness',
      },
    ],
  },

  kedarKatha: {
    id: 'kedar-katha',
    hero: {
      category: 'Winter Wonderland',
      title: 'Kedar Katha Trek',
      description:
        'Experience the magic of snow-covered peaks and pristine winter landscapes in this spectacular Himalayan adventure.',
      backgroundImage:
        'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=format&fit=crop&w=1600&q=80',
      location: 'Uttarakhand, India',
      bestTime: 'December - April',
      duration: '5-6 Days',
      alt: 'Snow-covered Himalayan peaks',
    },
    folklore: {
      title: 'Winter Legends',
      subtitle: 'Snow Stories',
      description:
        'Kedar Katha is known as the "Throne of Lord Shiva" where ancient tales speak of divine presence in the snow-covered peaks.',
      image:
        'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=format&fit=crop&w=800&q=80',
      alt: 'Legendary snow-capped peaks',
      legends: [
        {
          title: 'The Snow Temple',
          description:
            'A hidden temple made entirely of snow appears only to the pure of heart during winter months.',
          color: 'blue',
        },
        {
          title: 'Guardian Spirits',
          description:
            'Mountain spirits protect trekkers who respect the sacred peaks and follow ancient customs.',
          color: 'purple',
        },
      ],
    },
    days: [
      {
        day: 'Day 1 to 2',
        title: 'Snow Line Crossing',
        description:
          'Cross the snow line, entering a pristine world of white landscapes and crystal-clear mountain air.',
        image:
          'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Hikers crossing snow line',
        stats: { altitude: '2,800m', distance: '8km', duration: '4-5 hours' },
      },
      {
        day: 'Day 3 to 5',
        title: 'Summit Push and Descent',
        description:
          'Reach the summit with 360-degree views of snow-capped Himalayan peaks stretching across the horizon.',
        image:
          'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Summit view of snowy mountains',
        stats: { altitude: '3,810m', distance: '10km', duration: '6-7 hours' },
      },
    ],
    highlights: [
      {
        image:
          'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Frozen Himalayan lake',
        title: 'Frozen Lakes',
        description: 'Icy blue lakes glistening under winter sun',
      },
      {
        image:
          'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Snowy forest trail',
        title: 'Snow Trails',
        description: 'Magical forest trails blanketed in snow',
      },
      {
        image:
          'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Sunrise over snowy peaks',
        title: 'Summit Sunrise',
        description: 'Golden sun rising over snowy peaks',
      },
    ],
  },

  tungNathTrek: {
    id: 'tung-nath-trek',
    hero: {
      category: 'Highest Shiva Temple',
      title: 'Tung Nath Trek',
      description:
        'Trek to the highest Shiva temple in the world, surrounded by breathtaking Himalayan peaks and ancient spiritual energy.',
      backgroundImage:
        'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=format&fit=crop&w=1600&q=80',
      location: 'Uttarakhand, India',
      bestTime: 'April - November',
      duration: '4-5 Days',
      alt: 'Tung Nath Himalayan temple trek',
    },
    folklore: {
      title: 'Divine Connections',
      subtitle: 'Sacred Sanctuary',
      description:
        'Tung Nath is part of the Panch Kedar pilgrimage sites, where the arms of Lord Shiva are believed to have appeared.',
      image:
        'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Tungnath/Divine_connection.jpg',
      alt: 'Tung Nath temple with mountains',
      legends: [
        {
          title: "Lord Shiva's Arms",
          description:
            'Legend says Lord Shiva’s arms appeared here after Pandavas sought forgiveness for the Kurukshetra war.',
          color: 'blue',
        },
        {
          title: 'Eternal Flame',
          description:
            'The temple houses an eternal flame, said to have been burning for centuries, protected by mountain gods.',
          color: 'orange',
        },
      ],
    },
    days: [
      {
        day: 'Day 1 to 2',
        title: 'To Chopta Base',
        description:
          'Journey through rhododendron forests and meadows to reach the base camp at Chopta.',
        image:
          'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Tungnath/chopta_base.webp',
        alt: 'Chopta base camp in Himalayan meadows',
        stats: { altitude: '2,680m', distance: '10km', duration: '5-6 hours' },
      },
      {
        day: 'Day 3 to 4',
        title: 'Temple Ascent',
        description:
          'Ascend to the ancient Tung Nath temple, offering prayers and panoramic Himalayan views.',
        image:
          'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Tungnath/temple_ascent.webp',
        alt: 'Ascent to Tung Nath temple with mountain view',
        stats: { altitude: '3,680m', distance: '4km', duration: '3-4 hours' },
      },
    ],
    highlights: [
      {
        image:
          'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Ancient Tung Nath temple',
        title: 'Ancient Temple',
        description: "World's highest Shiva temple with centuries-old history",
      },
      {
        image:
          'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Panoramic Himalayan views',
        title: 'Panoramic Views',
        description: '360-degree views of majestic Himalayan peaks',
      },
      {
        image:
          'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=format&fit=crop&w=600&q=80',
        alt: 'Sacred spiritual energy at temple',
        title: 'Spiritual Energy',
        description: 'Experience the sacred atmosphere of this holy site',
      },
    ],
  },
};

// --- Trek Selector (dropdown) ---
const TrekSelector = ({ currentTrek, onTrekChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const trekOptions = [
    { id: "dayarBugyal", name: "Dayara Bugyal Trek", category: "Epic Mountain Journey", path: "/trek/dayarabuyal" },
    { id: "goumukhTrek", name: "Goumukh Trek", category: "Glacial Source", path: "/trek/gaumukh" },
    { id: "hiddenWaterfall", name: "Hidden Waterfall Trek", category: "Secret Cascades", path: "/trek/hiddenWaterfall" },
    { id: "kedarKatha", name: "Kedar Katha Trek", category: "Winter Wonderland", path: "/trek/kedarKatha" },
    { id: "tungNathTrek", name: "Tung Nath Trek", category: "Highest Shiva Temple", path: "/trek/tungnath" },
  ];
  
  useEffect(() => {
    // whenever URL changes, update currentTrek in parent
    const pageTrekId = location.pathname.split("/").pop();
    const match = trekOptions.find(trek => trek.path.includes(pageTrekId));
    if (match && match.id !== currentTrek) {
      onTrekChange(match.id);
    }
  }, [location.pathname]);

  const handleSelect = (trek) => {
    onTrekChange(trek.id);
    navigate(trek.path);
    setIsOpen(false);
  };
  
  const currentTrekInfo = trekOptions.find(trek => trek.id === currentTrek);

  return (
    <div className="fixed top-20 left-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center cursor-pointer gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 hover:bg-white transition-all duration-300 hover:scale-102 active:scale-98"
        >
          <Mountain className="h-5 w-5 text-green-600" />
          <div className="text-left">
            <div className="font-semibold text-gray-900 text-sm">{currentTrekInfo?.name}</div>
            <div className="text-xs text-gray-500">{currentTrekInfo?.category}</div>
          </div>
          <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-80 animate-fade-in">
            {trekOptions.map((trek) => (
              <button
                key={trek.id}
                onClick={() => handleSelect(trek)}
                className={`w-full text-left px-6 py-4 hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 hover:translate-x-1 ${
                  trek.id === currentTrek ? 'bg-green-50 border-green-100' : ''
                }`}
              >
                <div className="font-semibold text-gray-900">{trek.name}</div>
                <div className="text-sm text-gray-500">{trek.category}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

// --- Trek Blog (renders trek details) ---
const TrekBlog = ({ trekData }) => {
  const navigate = useNavigate();

  const getColorClasses = (color) => {
    const colorMap = {
      green: 'border-green-500',
      blue: 'border-blue-500',
      purple: 'border-purple-500',
      orange: 'border-orange-500',
      pink: 'border-pink-500',
      red: 'border-red-500',
      indigo: 'border-indigo-500',
      violet: 'border-violet-500',
      cyan: 'border-cyan-500',
      teal: 'border-teal-500',
      amber: 'border-amber-500'
    };
    return colorMap[color] || 'border-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-800 text-white py-20 px-6 overflow-hidden animate-fade-in"
        style={{
          backgroundImage: `url(${trekData.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-emerald-800/70 to-teal-800/80"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-slide-in-left">
            <Mountain className="h-8 w-8 text-green-300" />
            <span className="text-green-200 font-semibold text-lg tracking-wide">{trekData.hero.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-up">
            {trekData.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl leading-relaxed mb-8 animate-slide-in-up delay-100">
            {trekData.hero.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm animate-slide-in-up delay-200">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-4 w-4" />
              <span>{trekData.hero.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="h-4 w-4" />
              <span>Best: {trekData.hero.bestTime}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="h-4 w-4" />
              <span>{trekData.hero.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Folklore Section */}
        <section className="mb-24 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image on Left */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={trekData.folklore.image}
                  alt={`${trekData.hero.title} folklore`}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                    <Camera className="h-4 w-4" />
                    <span className="text-sm">{trekData.folklore.subtitle}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text on Right */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-green-700 mb-6">
                <Users className="w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  {trekData.folklore.subtitle}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {trekData.folklore.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {trekData.folklore.description}
              </p>
              
              <div className="space-y-6">
                {trekData.folklore.legends.map((legend, index) => (
                  <div key={index} className={`border-l-4 ${getColorClasses(legend.color)} pl-6 animate-fade-in delay-${index * 100}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{legend.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {legend.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Day-by-Day Trek Sections */}
        <section className="space-y-20">
          {trekData.days.map((day, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in delay-${index * 100} ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-3 text-blue-700 mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">{day.day}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {day.title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {day.description}
                </p>

                {/* Trek Stats */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="bg-green-100 rounded-xl px-4 py-3">
                    <div className="text-green-800 font-bold text-lg">{day.stats.altitude}</div>
                    <div className="text-green-600 text-sm">Altitude</div>
                  </div>
                  <div className="bg-blue-100 rounded-xl px-4 py-3">
                    <div className="text-blue-800 font-bold text-lg">{day.stats.distance}</div>
                    <div className="text-blue-600 text-sm">Distance</div>
                  </div>
                  <div className="bg-amber-100 rounded-xl px-4 py-3">
                    <div className="text-amber-800 font-bold text-lg">{day.stats.duration}</div>
                    <div className="text-amber-600 text-sm">Duration</div>
                  </div>
                </div>
              </div>
              
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={day.image}
                    alt={`${day.title} trek view`}
                    className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Image Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6 animate-slide-in-up delay-500">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Mountain className="h-5 w-5" />
                          <span className="font-semibold">{day.day}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{day.stats.altitude}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden md:block animate-pop-in">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Epic Views</div>
                      <div className="text-gray-500 text-sm">360° Panorama</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Trek Highlights Grid */}
        <section className="mt-24">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trek Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the magic of {trekData.hero.title} through these unforgettable moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trekData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{highlight.description}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Your Mountain Adventure?
              </h2>
              
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join thousands of trekkers who have discovered the magic of {trekData.hero.title}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/7078287331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white cursor-pointer text-green-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center hover:scale-105 hover:-translate-y-1 active:scale-98"
                >
                  Plan Your Trek
                </a>              
                <button
                  onClick={() => navigate("/gallery")}
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-98"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- Parent Component (everything in one) ---
const TrekPage = () => {
  const { trekId } = useParams(); // comes from URL (/trek/:trekId)
  const [currentTrek, setCurrentTrek] = useState(trekId || "dayarBugyal");

  // sync state with URL whenever it changes
  useEffect(() => {
    if (trekId) {
      setCurrentTrek(trekId);
    }
  }, [trekId]);

  const trekInfo = trekData[currentTrek];

  if (!trekInfo) {
    return <div className="p-10 text-red-500">⚠️ Trek not found</div>;
  }

  return (
    <div className="relative">
      <TrekSelector currentTrek={currentTrek} onTrekChange={setCurrentTrek} />
      <TrekBlog trekData={trekInfo} />
    </div>
  );
};

export default TrekPage;