import { CodexEntry, CharacterDossier } from '../types';

export const CODEX_ENTRIES: CodexEntry[] = [
  {
    id: 'giza_pyramids',
    title: 'The Great Pyramids of Giza',
    subtitle: 'Wonders of the Old Kingdom',
    category: 'HISTORICAL SITE',
    year: 'c. 2560 BCE',
    location: 'Giza Plateau, Egypt',
    shortDesc: 'Monumental limestone tombs constructed as eternal resting places for Pharaohs Khufu, Khafre, and Menkaure.',
    longDesc: [
      'The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. Built over a twenty-year period during the reign of the king Khufu, it represents the absolute zenith of Old Kingdom architectural ingenuity.',
      'To the Brotherhood, these giant structures are more than mere tombs; they are reservoirs of precursor knowledge. Secret pathways, hidden chambers, and relics of the First Civilization lie buried deep beneath the sand layers, guarded by ancient riddles and mechanical traps.',
      'Explorers climbing to the highest summit are rewarded with the ultimate synchronization point, gazing across the vast expanses of the Libyan Desert and the fertile delta of the Nile.'
    ],
    coordinates: '29.9792° N, 31.1342° E'
  },
  {
    id: 'mummification',
    title: 'The Ritual of Mummification',
    subtitle: 'The Journey into the Duat',
    category: 'RITUAL',
    year: 'Practiced since 2600 BCE',
    location: 'Temples of Wabet, Memphis',
    shortDesc: 'The sacred and meticulous process of preserving the physical body to prepare the soul for the trial of Anubis.',
    longDesc: [
      'Mummification was an essential religious rite designed to preserve the body so that the Ka (dual soul) and Ba (personality) could recognize their physical vessel in the afterlife.',
      'The process lasted seventy days, overseen by embalmers wearing the jackal mask of Anubis. Organs were carefully extracted and stored in sacred Canopic jars, while the brain was discarded, and the heart—viewed as the seat of intellect—was left intact to be weighed on the scales of Ma\'at.',
      'In the shadows of this ritual, dark cults like the Order of the Ancients used embalming chambers to harvest biological samples, searching for genetic codes linked to the creators of the Apple of Eden.'
    ],
    coordinates: '29.8489° N, 31.2520° E'
  },
  {
    id: 'order_of_ancients',
    title: 'Order of the Ancients',
    subtitle: 'The Shadow Overseers',
    category: 'FACTION',
    year: 'Founded c. 1334 BCE',
    location: 'Nile Delta & Mediterranean Rim',
    shortDesc: 'A secretive, powerful cabal seeking absolute order and peace through subjugation and the retrieval of ancient relics.',
    longDesc: [
      'Formed during the reign of Smenkhkare, the Order of the Ancients operates in the shadows of the Ptolemaic Dynasty. They control King Ptolemy XIII as a puppet monarch, exploiting Egypt\'s wheat wealth and enslaving its population to excavate the ruins of the First Civilization.',
      'Driven by an ideology of rigid authoritarianism, they believe that humanity represents a fundamentally chaotic force that must be tightly governed by a chosen elite using the divine power of ancient artifacts.',
      'Their web of influence stretches from Alexandria to Cyrene, marked by masked elite agents operating under code names such as "The Heron", "The Snake", "The Crocodile", and "The Jackal".'
    ],
    coordinates: '31.2001° N, 29.9187° E'
  },
  {
    id: 'brotherhood',
    title: 'The Hidden Ones',
    subtitle: 'Birth of the Brotherhood',
    category: 'FACTION',
    year: '47 BCE',
    location: 'Memphis, Egypt',
    shortDesc: 'The precursor organization to the Assassin Brotherhood, established to oppose tyranny and defend individual freewill.',
    longDesc: [
      'The Hidden Ones were founded by Bayek of Siwa and his wife Aya in response to the betrayal of Cleopatra and the tyrannical grasp of the Order of the Ancients.',
      'Guided by the early tenets of discretion, protection of the innocent, and preservation of freewill, they chose to operate entirely in the shadows. The iconic leap of faith became their ultimate initiation rite, testifying to their fearlessness in the face of death.',
      'Their insignia—originally derived from the eagle skull impression pressed onto wet sand—symbolizes freedom, vision, and the swift descent of justice from high ridges.'
    ],
    coordinates: '30.0444° N, 31.2357° E'
  }
];

export const CHARACTER_DOSSIERS: CharacterDossier[] = [
  {
    id: 'bayek',
    name: 'Bayek of Siwa',
    role: 'The Last Medjay',
    actor: 'Abubakar Salim',
    bio: 'The last active Medjay of Egypt. Driven by personal tragedy, he dedicated his life to hunting the conspirators who brought ruin to his homeland, eventually laying the foundation for what would become the Assassin Brotherhood.',
    allegiance: 'The Hidden Ones',
    weapons: ['Khopesh (Egyptian Sickle Sword)', 'Medjay Shield', 'Predator Bow', 'The First Hidden Blade'],
    quote: '"I am not a father anymore. I am not a husband. I am not a Medjay. I am a Hidden One. I walk in the dark to serve the light."'
  },
  {
    id: 'aya',
    name: 'Aya of Alexandria (Amunet)',
    role: 'Agent of Cleopatra / Brotherhood Scholar',
    actor: 'Alix Wilton Regan',
    bio: 'A highly skilled scholar-warrior of mixed Greek and Egyptian heritage. Reared in Alexandria, she aligned with Cleopatra to secure Egypt\'s future, but after realizing Cleopatra\'s corrupt ambitions, she founded the Roman Bureau under the name Amunet.',
    allegiance: 'The Hidden Ones / Cleopatra (formerly)',
    weapons: ['Dual Ceremonial Daggers', 'Recurve Bow', 'Assassination Poisons'],
    quote: '"My love for you was a fire that burned Egypt to the ground. Today, we must rise as protectors of those who have no voice."'
  },
  {
    id: 'senu',
    name: 'Senu',
    role: 'The Bonelli\'s Eagle',
    actor: 'Simulated Eagle Vocalizations',
    bio: 'Bayek\'s loyal avian companion. Sharing a unique empathetic bond, Senu acts as Bayek\'s eyes in the sky, scouting military garrisons, highlight targets, revealing secret cavern entrances, and distracting hostiles during intense open conflicts.',
    allegiance: 'Loyal Companion of the Medjay',
    weapons: ['Razor Talons', 'Supersonic Eagle Cry', 'Aerial Scouting Vision'],
    quote: '"*A majestic, high-altitude call echoing across the dunes of Giza, signaling the presence of prey or targets.*"'
  }
];
