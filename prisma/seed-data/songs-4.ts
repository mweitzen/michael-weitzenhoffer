import { MusicalRoot, MusicalMode } from "@prisma/client";
/*
 *
 *
 *
 * SONGS
 *
 *
 *
 */
const songs = [
  {
    title: "Sweet Caroline",
    artist: {
      connect: {
        name: "Neil Diamond",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 1973,
  },
  {
    title: "Sweet Child o Mine",
    artist: {
      connect: {
        name: "Guns n' Roses",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Sweet Pea",
    artist: {
      connect: {
        name: "Amos Lee",
      },
    },
  },
  {
    title: "Swing Life Away",
    artist: {
      connect: {
        name: "Rise Against",
      },
    },
  },
  {
    title: "Take It Easy",
    artist: {
      connect: {
        name: "The Eagles",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Take it to the Limit",
    artist: {
      connect: {
        name: "The Eagles",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 1972,
  },
  {
    title: "Take Me Home, Country Roads",
    artist: {
      connect: {
        name: "John Denver",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 1971,
  },
  {
    title: "Take Me Out",
    artist: {
      connect: {
        name: "Franz Ferdinand",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 2003,
  },
  {
    title: "Take Me to Church",
    artist: {
      connect: {
        name: "Hozier",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Take on Me",
    artist: {
      connect: { name: "A-ha" },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "Tears in Heaven",
    artist: {
      connect: {
        name: "Eric Clapton",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Tennessee Whiskey",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "That's My Kind of Night",
    artist: {
      connect: {
        name: "Luke Bryan",
      },
    },
  },
  {
    title: "That's What I Like",
    artist: {
      connect: {
        name: "Bruno Mars",
      },
    },
  },
  {
    title: "That's What I Want",
    artist: {
      connect: {
        name: "Lil Nas X",
      },
    },
  },
  {
    title: "The A Team",
    artist: {
      connect: {
        name: "Ed Sheeran",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2014,
  },
  {
    title: "The Chain",
    artist: {
      connect: {
        name: "Fleetwood Mac",
      },
    },
  },
  {
    title: "The Diary of Jane",
    artist: {
      connect: {
        name: "Breaking Benjamin",
      },
    },
  },
  {
    title: "The Gambler",
    artist: {
      connect: {
        name: "Kenny Rogers",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Girl From Impanema",
    artist: {
      connect: {
        name: "Antonio Carlos Jobim, Various Artists",
      },
    },
  },
  {
    title: "The Joker",
    artist: {
      connect: {
        name: "Steve Miller Band",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Kill",
    artist: {
      connect: {
        name: "30 Seconds to Mars",
      },
    },
  },
  {
    title: "The Lion Sleeps Tonight",
    artist: {
      connect: {
        name: "The Lion King",
      },
    },
  },
  {
    title: "The Reason",
    artist: {
      connect: {
        name: "Hoobastank",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1996,
  },
  {
    title: "The Red",
    artist: {
      connect: {
        name: "Chevelle",
      },
    },
  },
  {
    title: "The Scientist",
    artist: {
      connect: {
        name: "Coldplay",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "The Time of My Life",
    artist: {
      connect: {
        name: "Dirty Dancing",
      },
    },
  },
  {
    title: "The Way",
    artist: {
      connect: {
        name: "Fastball",
      },
    },
  },
  {
    title: "The Way You Look Tonight",
    artist: {
      connect: {
        name: "Jerome Kern",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Way You Make Me Feel",
    artist: {
      connect: {
        name: "Michael Jackson",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Weight",
    artist: {
      connect: {
        name: "The Band",
      },
    },
  },
  {
    title: "There are Worse Things I Could Do",
    artist: {
      connect: {
        name: "Grease, Stocker Channing",
      },
    },
  },
  {
    title: "Thinking Out Loud",
    artist: {
      connect: {
        name: "Ed Sheeran",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 2009,
  },
  {
    title: "This Love",
    artist: {
      connect: {
        name: "Maroon 5",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 1994,
  },
  {
    title: "This Masquerade",
    artist: {
      connect: {
        name: "Leon Russell, George Benson",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 1972,
  },
  {
    title: "Three Little Birds",
    artist: {
      connect: {
        name: "Bob Marley",
      },
    },
  },
  {
    title: "Through Glass",
    artist: {
      connect: {
        name: "Stone Sour",
      },
    },
  },
  {
    title: "Time After Time",
    artist: {
      connect: {
        name: "Cyndi Lauper",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Tiny Dancer",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
  },
  {
    title: "Toes",
    artist: {
      connect: {
        name: "Zac Brown Band",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Too Close",
    artist: {
      connect: {
        name: "Alex Clare",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Total Eclipse of the Heart",
    artist: {
      connect: {
        name: "Bonnie Tyler",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Traveller",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
  },
  {
    title: "Treasure",
    artist: {
      connect: {
        name: "Bruno Mars",
      },
    },
  },
  {
    title: "Tupelo Honey",
    artist: {
      connect: {
        name: "Van Morrison",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1975,
  },
  {
    title: "Turn Me On",
    artist: {
      connect: {
        name: "Norah Jones",
      },
    },
  },
  {
    title: "Un-Break My Heart",
    artist: {
      connect: {
        name: "Toni Braxton",
      },
    },
  },
  {
    title: "Under the Bridge",
    artist: {
      connect: {
        name: "Red Hot Chili Peppers",
      },
    },
  },
  {
    title: "Unfaithful",
    artist: {
      connect: {
        name: "Rihanna",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Unwell",
    artist: {
      connect: {
        name: "Matchbox 20",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2005,
  },
  {
    title: "Unwritten [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Natasha Bedingfield",
      },
    },
  },
  {
    title: "Up To No Good Livin'",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Up Where We Belong",
    artist: {
      connect: {
        name: "Joe Cocker",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Uptown Funk",
    artist: {
      connect: {
        name: "Bruno Mars, Mark Ronson",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 2010,
  },
  {
    title: "Use Somebody",
    artist: {
      connect: {
        name: "Kings of Leon",
      },
    },
  },
  {
    title: "Valerie",
    artist: {
      connect: {
        name: "Amy Winehouse",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Vienna",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Vindicated",
    artist: {
      connect: {
        name: "Dashboard Confessional",
      },
    },
  },
  {
    title: "Viva la Vida",
    artist: {
      connect: {
        name: "Coldplay",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Wagon Wheel",
    artist: {
      connect: {
        name: "Darius Rucker, Old Crow Medicine Band",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Waiting on the World to Change",
    artist: {
      connect: {
        name: "John Mayer",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "We Are the Champions",
    artist: {
      connect: { name: "Queen" },
    },
  },
  {
    title: "We Are Young",
    artist: {
      connect: { name: "Fun" },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "We Don't Talk About Bruno",
    artist: {
      connect: {
        name: "Encanto",
      },
    },
  },
  {
    title: "What a Fool Believes",
    artist: {
      connect: {
        name: "The Doobie Brothers",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1964,
  },
  {
    title: "What a Girl Wants",
    artist: {
      connect: {
        name: "Christina Aguilera",
      },
    },
  },
  {
    title: "What Goes Around... Comes Around",
    artist: {
      connect: {
        name: "Justin Timberlake",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2006,
  },
  {
    title: "What I Got",
    artist: {
      connect: {
        name: "Sublime",
      },
    },
  },
  {
    title: "What Kind of Fool Am I",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "What's Going On",
    artist: {
      connect: {
        name: "Marvin Gaye",
      },
    },
  },
  {
    title: "What's Love Got to Do With It",
    artist: {
      connect: {
        name: "Tina Turner",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "When Doves Cry",
    artist: {
      connect: {
        name: "Prince",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "When I Fall in Love",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "When I Was Your Man",
    artist: {
      connect: {
        name: "Bruno Mars",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "When I'm Gone",
    artist: {
      connect: {
        name: "3 Doors Down",
      },
    },
  },
  {
    title: "When the Party's Over",
    artist: {
      connect: {
        name: "Billie Eilish",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "When We Were Young",
    artist: {
      connect: { name: "Adele" },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Whiskey and You",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "White Flag",
    artist: {
      connect: { name: "Dido" },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Who Says",
    artist: {
      connect: {
        name: "John Mayer",
      },
    },
  },
  {
    title: "Wish You Were Here",
    artist: {
      connect: {
        name: "Pink Floyd",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1975,
  },
  {
    title: "With A Little Help From My Friends",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Wonderful Tonight",
    artist: {
      connect: {
        name: "Eric Clapton",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Wonderwall",
    artist: {
      connect: { name: "Oasis" },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
    year: 2009,
  },
  {
    title: "Yesterday",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Are So Beautiful",
    artist: {
      connect: {
        name: "Joe Cocker, Bill Preston",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Don't Know How it Feels",
    artist: {
      connect: {
        name: "Tom Petty",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Make Me Feel Like a Natural Woman",
    artist: {
      connect: {
        name: "Aretha Franklin, Carole King",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Should Probably Leave",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You'll Be In My Heart",
    artist: {
      connect: {
        name: "Disney, Phil Collins, Tarzan",
      },
    },
  },
  {
    title: "You're The Inspiration",
    artist: {
      connect: {
        name: "Chicago",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You've Got a Friend in Me",
    artist: {
      connect: {
        name: "Randy Newman, Toy Story, Disney",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "You've Got a Friend",
    artist: {
      connect: {
        name: "Carole King, James Taylor",
      },
    },
  },
  {
    title: "Your Love",
    artist: {
      connect: {
        name: "The Outfields",
      },
    },
  },
  {
    title: "Your Song",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
  },
];
export default songs;
