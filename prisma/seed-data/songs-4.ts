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
      connectOrCreate: {
        where: { name: "Neil Diamond" },
        create: { name: "Neil Diamond" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 1973,
  },
  {
    title: "Sweet Child o Mine",
    artist: {
      connectOrCreate: {
        where: { name: "Guns n' Roses" },
        create: { name: "Guns n' Roses" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Sweet Pea",
    artist: {
      connectOrCreate: {
        where: { name: "Amos Lee" },
        create: { name: "Amos Lee" },
      },
    },
  },
  {
    title: "Swing Life Away",
    artist: {
      connectOrCreate: {
        where: { name: "Rise Against" },
        create: { name: "Rise Against" },
      },
    },
  },
  {
    title: "Take It Easy",
    artist: {
      connectOrCreate: {
        where: { name: "The Eagles" },
        create: { name: "The Eagles" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Take it to the Limit",
    artist: {
      connectOrCreate: {
        where: { name: "The Eagles" },
        create: { name: "The Eagles" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 1972,
  },
  {
    title: "Take Me Home, Country Roads",
    artist: {
      connectOrCreate: {
        where: { name: "John Denver" },
        create: { name: "John Denver" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 1971,
  },
  {
    title: "Take Me Out",
    artist: {
      connectOrCreate: {
        where: { name: "Franz Ferdinand" },
        create: { name: "Franz Ferdinand" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 2003,
  },
  {
    title: "Take Me to Church",
    artist: {
      connectOrCreate: {
        where: { name: "Hozier" },
        create: { name: "Hozier" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Take on Me",
    artist: {
      connectOrCreate: { where: { name: "A-ha" }, create: { name: "A-ha" } },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "Tears in Heaven",
    artist: {
      connectOrCreate: {
        where: { name: "Eric Clapton" },
        create: { name: "Eric Clapton" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Tennessee Whiskey",
    artist: {
      connectOrCreate: {
        where: { name: "Chris Stapleton" },
        create: { name: "Chris Stapleton" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "That's My Kind of Night",
    artist: {
      connectOrCreate: {
        where: { name: "Luke Bryan" },
        create: { name: "Luke Bryan" },
      },
    },
  },
  {
    title: "That's What I Like",
    artist: {
      connectOrCreate: {
        where: { name: "Bruno Mars" },
        create: { name: "Bruno Mars" },
      },
    },
  },
  {
    title: "That's What I Want",
    artist: {
      connectOrCreate: {
        where: { name: "Lil Nas X" },
        create: { name: "Lil Nas X" },
      },
    },
  },
  {
    title: "The A Team",
    artist: {
      connectOrCreate: {
        where: { name: "Ed Sheeran" },
        create: { name: "Ed Sheeran" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2014,
  },
  {
    title: "The Chain",
    artist: {
      connectOrCreate: {
        where: { name: "Fleetwood Mac" },
        create: { name: "Fleetwood Mac" },
      },
    },
  },
  {
    title: "The Diary of Jane",
    artist: {
      connectOrCreate: {
        where: { name: "Breaking Benjamin" },
        create: { name: "Breaking Benjamin" },
      },
    },
  },
  {
    title: "The Gambler",
    artist: {
      connectOrCreate: {
        where: { name: "Kenny Rogers" },
        create: { name: "Kenny Rogers" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Girl From Impanema",
    artist: {
      connectOrCreate: {
        where: { name: "Antonio Carlos Jobim, Various Artists" },
        create: { name: "Antonio Carlos Jobim, Various Artists" },
      },
    },
  },
  {
    title: "The Joker",
    artist: {
      connectOrCreate: {
        where: { name: "Steve Miller Band" },
        create: { name: "Steve Miller Band" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Kill",
    artist: {
      connectOrCreate: {
        where: { name: "30 Seconds to Mars" },
        create: { name: "30 Seconds to Mars" },
      },
    },
  },
  {
    title: "The Lion Sleeps Tonight",
    artist: {
      connectOrCreate: {
        where: { name: "The Lion King" },
        create: { name: "The Lion King" },
      },
    },
  },
  {
    title: "The Reason",
    artist: {
      connectOrCreate: {
        where: { name: "Hoobastank" },
        create: { name: "Hoobastank" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1996,
  },
  {
    title: "The Red",
    artist: {
      connectOrCreate: {
        where: { name: "Chevelle" },
        create: { name: "Chevelle" },
      },
    },
  },
  {
    title: "The Scientist",
    artist: {
      connectOrCreate: {
        where: { name: "Coldplay" },
        create: { name: "Coldplay" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "The Time of My Life",
    artist: {
      connectOrCreate: {
        where: { name: "Dirty Dancing" },
        create: { name: "Dirty Dancing" },
      },
    },
  },
  {
    title: "The Way",
    artist: {
      connectOrCreate: {
        where: { name: "Fastball" },
        create: { name: "Fastball" },
      },
    },
  },
  {
    title: "The Way You Look Tonight",
    artist: {
      connectOrCreate: {
        where: { name: "Jerome Kern" },
        create: { name: "Jerome Kern" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Way You Make Me Feel",
    artist: {
      connectOrCreate: {
        where: { name: "Michael Jackson" },
        create: { name: "Michael Jackson" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "The Weight",
    artist: {
      connectOrCreate: {
        where: { name: "The Band" },
        create: { name: "The Band" },
      },
    },
  },
  {
    title: "There are Worse Things I Could Do",
    artist: {
      connectOrCreate: {
        where: { name: "Grease, Stocker Channing" },
        create: { name: "Grease, Stocker Channing" },
      },
    },
  },
  {
    title: "Thinking Out Loud",
    artist: {
      connectOrCreate: {
        where: { name: "Ed Sheeran" },
        create: { name: "Ed Sheeran" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 2009,
  },
  {
    title: "This Love",
    artist: {
      connectOrCreate: {
        where: { name: "Maroon 5" },
        create: { name: "Maroon 5" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 1994,
  },
  {
    title: "This Masquerade",
    artist: {
      connectOrCreate: {
        where: { name: "Leon Russell, George Benson" },
        create: { name: "Leon Russell, George Benson" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 1972,
  },
  {
    title: "Three Little Birds",
    artist: {
      connectOrCreate: {
        where: { name: "Bob Marley" },
        create: { name: "Bob Marley" },
      },
    },
  },
  {
    title: "Through Glass",
    artist: {
      connectOrCreate: {
        where: { name: "Stone Sour" },
        create: { name: "Stone Sour" },
      },
    },
  },
  {
    title: "Time After Time",
    artist: {
      connectOrCreate: {
        where: { name: "Cyndi Lauper" },
        create: { name: "Cyndi Lauper" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Tiny Dancer",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
  },
  {
    title: "Toes",
    artist: {
      connectOrCreate: {
        where: { name: "Zac Brown Band" },
        create: { name: "Zac Brown Band" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Too Close",
    artist: {
      connectOrCreate: {
        where: { name: "Alex Clare" },
        create: { name: "Alex Clare" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Total Eclipse of the Heart",
    artist: {
      connectOrCreate: {
        where: { name: "Bonnie Tyler" },
        create: { name: "Bonnie Tyler" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Traveller",
    artist: {
      connectOrCreate: {
        where: { name: "Chris Stapleton" },
        create: { name: "Chris Stapleton" },
      },
    },
  },
  {
    title: "Treasure",
    artist: {
      connectOrCreate: {
        where: { name: "Bruno Mars" },
        create: { name: "Bruno Mars" },
      },
    },
  },
  {
    title: "Tupelo Honey",
    artist: {
      connectOrCreate: {
        where: { name: "Van Morrison" },
        create: { name: "Van Morrison" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1975,
  },
  {
    title: "Turn Me On",
    artist: {
      connectOrCreate: {
        where: { name: "Norah Jones" },
        create: { name: "Norah Jones" },
      },
    },
  },
  {
    title: "Un-Break My Heart",
    artist: {
      connectOrCreate: {
        where: { name: "Toni Braxton" },
        create: { name: "Toni Braxton" },
      },
    },
  },
  {
    title: "Under the Bridge",
    artist: {
      connectOrCreate: {
        where: { name: "Red Hot Chili Peppers" },
        create: { name: "Red Hot Chili Peppers" },
      },
    },
  },
  {
    title: "Unfaithful",
    artist: {
      connectOrCreate: {
        where: { name: "Rihanna" },
        create: { name: "Rihanna" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Unwell",
    artist: {
      connectOrCreate: {
        where: { name: "Matchbox 20" },
        create: { name: "Matchbox 20" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2005,
  },
  {
    title: "Unwritten [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Natasha Bedingfield" },
        create: { name: "Natasha Bedingfield" },
      },
    },
  },
  {
    title: "Up To No Good Livin'",
    artist: {
      connectOrCreate: {
        where: { name: "Chris Stapleton" },
        create: { name: "Chris Stapleton" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Up Where We Belong",
    artist: {
      connectOrCreate: {
        where: { name: "Joe Cocker" },
        create: { name: "Joe Cocker" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Uptown Funk",
    artist: {
      connectOrCreate: {
        where: { name: "Bruno Mars, Mark Ronson" },
        create: { name: "Bruno Mars, Mark Ronson" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 2010,
  },
  {
    title: "Use Somebody",
    artist: {
      connectOrCreate: {
        where: { name: "Kings of Leon" },
        create: { name: "Kings of Leon" },
      },
    },
  },
  {
    title: "Valerie",
    artist: {
      connectOrCreate: {
        where: { name: "Amy Winehouse" },
        create: { name: "Amy Winehouse" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Vienna",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Vindicated",
    artist: {
      connectOrCreate: {
        where: { name: "Dashboard Confessional" },
        create: { name: "Dashboard Confessional" },
      },
    },
  },
  {
    title: "Viva la Vida",
    artist: {
      connectOrCreate: {
        where: { name: "Coldplay" },
        create: { name: "Coldplay" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Wagon Wheel",
    artist: {
      connectOrCreate: {
        where: { name: "Darius Rucker, Old Crow Medicine Band" },
        create: { name: "Darius Rucker, Old Crow Medicine Band" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Waiting on the World to Change",
    artist: {
      connectOrCreate: {
        where: { name: "John Mayer" },
        create: { name: "John Mayer" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "We Are the Champions",
    artist: {
      connectOrCreate: { where: { name: "Queen" }, create: { name: "Queen" } },
    },
  },
  {
    title: "We Are Young",
    artist: {
      connectOrCreate: { where: { name: "Fun" }, create: { name: "Fun" } },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "We Don't Talk About Bruno",
    artist: {
      connectOrCreate: {
        where: { name: "Encanto" },
        create: { name: "Encanto" },
      },
    },
  },
  {
    title: "What a Fool Believes",
    artist: {
      connectOrCreate: {
        where: { name: "The Doobie Brothers" },
        create: { name: "The Doobie Brothers" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1964,
  },
  {
    title: "What a Girl Wants",
    artist: {
      connectOrCreate: {
        where: { name: "Christina Aguilera" },
        create: { name: "Christina Aguilera" },
      },
    },
  },
  {
    title: "What Goes Around... Comes Around",
    artist: {
      connectOrCreate: {
        where: { name: "Justin Timberlake" },
        create: { name: "Justin Timberlake" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2006,
  },
  {
    title: "What I Got",
    artist: {
      connectOrCreate: {
        where: { name: "Sublime" },
        create: { name: "Sublime" },
      },
    },
  },
  {
    title: "What Kind of Fool Am I",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "What's Going On",
    artist: {
      connectOrCreate: {
        where: { name: "Marvin Gaye" },
        create: { name: "Marvin Gaye" },
      },
    },
  },
  {
    title: "What's Love Got to Do With It",
    artist: {
      connectOrCreate: {
        where: { name: "Tina Turner" },
        create: { name: "Tina Turner" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "When Doves Cry",
    artist: {
      connectOrCreate: {
        where: { name: "Prince" },
        create: { name: "Prince" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "When I Fall in Love",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "When I Was Your Man",
    artist: {
      connectOrCreate: {
        where: { name: "Bruno Mars" },
        create: { name: "Bruno Mars" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "When I'm Gone",
    artist: {
      connectOrCreate: {
        where: { name: "3 Doors Down" },
        create: { name: "3 Doors Down" },
      },
    },
  },
  {
    title: "When the Party's Over",
    artist: {
      connectOrCreate: {
        where: { name: "Billie Eilish" },
        create: { name: "Billie Eilish" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "When We Were Young",
    artist: {
      connectOrCreate: { where: { name: "Adele" }, create: { name: "Adele" } },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Whiskey and You",
    artist: {
      connectOrCreate: {
        where: { name: "Chris Stapleton" },
        create: { name: "Chris Stapleton" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "White Flag",
    artist: {
      connectOrCreate: { where: { name: "Dido" }, create: { name: "Dido" } },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Who Says",
    artist: {
      connectOrCreate: {
        where: { name: "John Mayer" },
        create: { name: "John Mayer" },
      },
    },
  },
  {
    title: "Wish You Were Here",
    artist: {
      connectOrCreate: {
        where: { name: "Pink Floyd" },
        create: { name: "Pink Floyd" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1975,
  },
  {
    title: "With A Little Help From My Friends",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Wonderful Tonight",
    artist: {
      connectOrCreate: {
        where: { name: "Eric Clapton" },
        create: { name: "Eric Clapton" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Wonderwall",
    artist: {
      connectOrCreate: { where: { name: "Oasis" }, create: { name: "Oasis" } },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
    year: 2009,
  },
  {
    title: "Yesterday",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Are So Beautiful",
    artist: {
      connectOrCreate: {
        where: { name: "Joe Cocker, Bill Preston" },
        create: { name: "Joe Cocker, Bill Preston" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Don't Know How it Feels",
    artist: {
      connectOrCreate: {
        where: { name: "Tom Petty" },
        create: { name: "Tom Petty" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Make Me Feel Like a Natural Woman",
    artist: {
      connectOrCreate: {
        where: { name: "Aretha Franklin, Carole King" },
        create: { name: "Aretha Franklin, Carole King" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You Should Probably Leave",
    artist: {
      connectOrCreate: {
        where: { name: "Chris Stapleton" },
        create: { name: "Chris Stapleton" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You'll Be In My Heart",
    artist: {
      connectOrCreate: {
        where: { name: "Disney, Phil Collins, Tarzan" },
        create: { name: "Disney, Phil Collins, Tarzan" },
      },
    },
  },
  {
    title: "You're The Inspiration",
    artist: {
      connectOrCreate: {
        where: { name: "Chicago" },
        create: { name: "Chicago" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "You've Got a Friend in Me",
    artist: {
      connectOrCreate: {
        where: { name: "Randy Newman, Toy Story, Disney" },
        create: { name: "Randy Newman, Toy Story, Disney" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "You've Got a Friend",
    artist: {
      connectOrCreate: {
        where: { name: "Carole King, James Taylor" },
        create: { name: "Carole King, James Taylor" },
      },
    },
  },
  {
    title: "Your Love",
    artist: {
      connectOrCreate: {
        where: { name: "The Outfields" },
        create: { name: "The Outfields" },
      },
    },
  },
  {
    title: "Your Song",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
  },
];
export default songs;
