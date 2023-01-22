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
    title: "Let It Go",
    artist: {
      connect: {
        name: "Disney, Frozen",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Let's Get it On",
    artist: {
      connect: {
        name: "Marvin Gaye",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Let's Stay Together",
    artist: {
      connect: {
        name: "Al Green",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Lights",
    artist: {
      connect: {
        name: "Journey",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1978,
  },
  {
    title: "Like a Stone",
    artist: {
      connect: {
        name: "Audioslave",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Like a Virgin",
    artist: {
      connect: {
        name: "Madonna",
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lips of an Angel [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Hinder",
      },
    },
  },
  {
    title: "Listen to the Music",
    artist: {
      connect: {
        name: "The Doobie Brothers",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1976,
  },
  {
    title: "Little Talks",
    artist: {
      connect: {
        name: "Of Mice and Men",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Live Like You Were Dying",
    artist: {
      connect: {
        name: "Tim McGraw",
      },
    },
  },
  {
    title: "Livin' la Vida Loca",
    artist: {
      connect: {
        name: "Ricky Martin",
      },
    },
  },
  {
    title: "Livin' on a Prayer",
    artist: {
      connect: {
        name: "Bon Jovi",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 1986,
  },
  {
    title: "Living for the City",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
  },
  {
    title: "Locked Out Of Heaven",
    artist: {
      connect: {
        name: "Bruno Mars",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lola",
    artist: {
      connect: {
        name: "The Kinks",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love Me Like You Do",
    artist: {
      connect: {
        name: "Ellie Goulding",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love Me Tender",
    artist: {
      connect: {
        name: "Elvis, Various Artists",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love on the Brain",
    artist: {
      connect: {
        name: "Rihanna",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love on Top",
    artist: {
      connect: {
        name: "Beyonce",
      },
    },
  },
  {
    title: "Love Song",
    artist: {
      connect: {
        name: "Sara Bareilles",
      },
    },
  },
  {
    title: "Love theme From Romeo Juliet",
    artist: {
      connect: {
        name: "Henri Mancini, Romeo Juliet",
      },
    },
  },
  {
    title: "Love Yourself",
    artist: {
      connect: {
        name: "Justin Beiber",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lovely Day",
    artist: {
      connect: {
        name: "Bill Withers",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lullaby of Birdland",
    artist: {
      connect: {
        name: "Billie Holliday, Various Artists",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Make You Feel My Love",
    artist: {
      connect: { name: "Adele" },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Man, I Feel Like a Woman",
    artist: {
      connect: {
        name: "Shania Twain",
      },
    },
  },
  {
    title: "Margaritaville",
    artist: {
      connect: {
        name: "Jimmy Buffet",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1977,
  },
  {
    title: "Marry Me",
    artist: {
      connect: { name: "Train" },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Marry You",
    artist: {
      connect: {
        name: "Bruno Mars",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Mary Jane's Last Dance",
    artist: {
      connect: {
        name: "Tom Petty",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Maybe I'm Amazed",
    artist: {
      connect: {
        name: "Paul McCartney",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Me and Mrs. Jones",
    artist: {
      connect: {
        name: "Billy Paul",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Midnight Train to Georgia",
    artist: {
      connect: {
        name: "Gladys Knight",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Misery Business",
    artist: {
      connect: {
        name: "Paramore",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Miss You",
    artist: {
      connect: {
        name: "Blink 182",
      },
    },
  },
  {
    title: "Misty",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Money",
    artist: {
      connect: {
        name: "Pink Floyd",
      },
    },
  },
  {
    title: "Moon River",
    artist: {
      connect: {
        name: "Breakfast at Tiffany's, Henri Mancini",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Moondance",
    artist: {
      connect: {
        name: "Van Morrison",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1970,
  },
  {
    title: "Movin' Out",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
  },
  {
    title: "Mr Brightside",
    artist: {
      connect: {
        name: "The Killers",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Mrs. Robinson",
    artist: {
      connect: {
        name: "Simon & Garfunkel",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1978,
  },
  {
    title: "My Cherie Amour",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "My Funny Valentine",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "My Heart Will Go On",
    artist: {
      connect: {
        name: "Celine Dion, Theme",
      },
    },
  },
  {
    title: "My Immortal",
    artist: {
      connect: {
        name: "Evanescence",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2007,
  },
  {
    title: "My Life",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
  },
  {
    title: "My Way",
    artist: {
      connect: {
        name: "Frank Sinatra",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Need You Now",
    artist: {
      connect: {
        name: "Lady Antebellum",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2010,
  },
  {
    title: "New York State of Mind",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "New York, New York",
    artist: {
      connect: {
        name: "Frank Sinatra",
      },
    },
    year: 1977,
  },
  {
    title: "No One",
    artist: {
      connect: {
        name: "Alicia Keys",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "No Scrubs",
    artist: {
      connect: { name: "TLC" },
    },
  },
  {
    title: "No Woman, No Cry",
    artist: {
      connect: {
        name: "Bob Marley",
      },
    },
  },
  {
    title: "Nobody's Lonely Tonight",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Oh! Darling",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
  },
  {
    title: "On Green Dolpin Street",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
  },
  {
    title: "One Headlight",
    artist: {
      connect: {
        name: "The Wallflowers",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1999,
  },
  {
    title: "One Note Samba",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
  },
  {
    title: "One of These Nights",
    artist: {
      connect: {
        name: "The Eagles",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 1975,
  },
  {
    title: "Only the Good Die Young",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
  },
  {
    title: "Over the Rainbow",
    artist: {
      connect: {
        name: "Harold Arlen, Various Artists",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1995,
  },
  {
    title: "P.Y.T.",
    artist: {
      connect: {
        name: "Michael Jackson",
      },
    },
  },
  {
    title: "Paint It Black",
    artist: {
      connect: {
        name: "Rolling Stones",
      },
    },
  },
  {
    title: "Peaceful Easy Feeling",
    artist: {
      connect: {
        name: "The Eagles",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "People are Strange",
    artist: {
      connect: {
        name: "The Doors",
      },
    },
  },
  {
    title: "Perfect",
    artist: {
      connect: {
        name: "Ed Sheeran",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Photograph",
    artist: {
      connect: {
        name: "Ed Sheeran",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Photograph",
    artist: {
      connect: {
        name: "Nickelback",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Piano Man",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
  },
  {
    title: "Proud Mary",
    artist: {
      connect: {
        name: "Credence Clearwater Revival",
      },
    },
  },
  {
    title: "Purple Rain",
    artist: {
      connect: {
        name: "Prince",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Radioactive",
    artist: {
      connect: {
        name: "Imagine Dragons",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Raspberry Beret",
    artist: {
      connect: {
        name: "Prince",
      },
    },
  },
  {
    title: "Reach Out, I'll Be There",
    artist: {
      connect: {
        name: "The Four Tops",
      },
    },
  },
  {
    title: "Rhiannon",
    artist: {
      connect: {
        name: "Fleetwood Mac",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ring of Fire",
    artist: {
      connect: {
        name: "Johnny Cash",
      },
    },
  },
  {
    title: "Rock With You",
    artist: {
      connect: {
        name: "Michael Jackson",
      },
    },
  },
  {
    title: "Rocket Man",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
    year: 1973,
  },
  {
    title: "Rolling in the Deep",
    artist: {
      connect: { name: "Adele" },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Rosanna",
    artist: {
      connect: { name: "Toto" },
    },
  },
  {
    title: "Roses",
    artist: {
      connect: {
        name: "Outkast",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Santeria",
    artist: {
      connect: {
        name: "Sublime",
      },
    },
  },
  {
    title: "Savior",
    artist: {
      connect: {
        name: "Rise Against",
      },
    },
  },
  {
    title: "Say It Ain't So",
    artist: {
      connect: {
        name: "Weezer",
      },
    },
  },
  {
    title: "Say My Name",
    artist: {
      connect: {
        name: "Destiny's Child",
      },
    },
  },
  {
    title: "Say Something",
    artist: {
      connect: {
        name: "A Great Big World",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Scenes from an Italian Restaurant",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
  },
  {
    title: "Seasons in the Sun",
    artist: {
      connect: {
        name: "Nirvana, Terry Jacks",
      },
    },
  },
  {
    title: "Second Chance",
    artist: {
      connect: {
        name: "Shinedown",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Send the Pain Below",
    artist: {
      connect: {
        name: "Chevelle",
      },
    },
  },
  {
    title: "Separate Ways",
    artist: {
      connect: {
        name: "Journey",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "September",
    artist: {
      connect: {
        name: "Earth Wind and Fire",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Seven Nation Army",
    artist: {
      connect: {
        name: "The White Stripes",
      },
    },
  },
  {
    title: "Sex and Candy",
    artist: {
      connect: {
        name: "Marcy Playground",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 2000,
  },
  {
    title: "Shallow",
    artist: {
      connect: {
        name: "Bradley Cooper, Lady Gaga",
      },
    },
  },
  {
    title: "She Talks to Angels",
    artist: {
      connect: {
        name: "The Black Crowes",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1991,
  },
  {
    title: "She Used to Be Mine",
    artist: {
      connect: {
        name: "Sara Bareilles, The Waitress",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "She Will Be Loved [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Maroon 5",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "She's Always a Woman",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "She's Got a Way",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Signed, Sealed, Delievered",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
  },
  {
    title: "Simple Man",
    artist: {
      connect: {
        name: "Lynyrd Skynyrd",
      },
    },
  },
  {
    title: "Sir Duke",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
  },
  {
    title: "Sister Christian",
    artist: {
      connect: {
        name: "Night Ranger",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1983,
  },
  {
    title: "Slow Dancing in a Burning Room",
    artist: {
      connect: {
        name: "John Mayer",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Smokin' Out the Window",
    artist: {
      connect: {
        name: "Silk Sonic",
      },
    },
  },
  {
    title: "Smooth",
    artist: {
      connect: {
        name: "Carlos Santanna, Rob Thomas",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1991,
  },
  {
    title: "Snow (Hey Oh)",
    artist: {
      connect: {
        name: "Red Hot Chili Peppers",
      },
    },
  },
  {
    title: "Some Nights",
    artist: {
      connect: { name: "Fun" },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2012,
  },
  {
    title: "Somebody to Love",
    artist: {
      connect: { name: "Queen" },
    },
  },
  {
    title: "Someone Like You",
    artist: {
      connect: { name: "Adele" },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2012,
  },
  {
    title: "Someone You Loved",
    artist: {
      connect: {
        name: "Lewis Capaldi",
      },
    },
  },
  {
    title: "Something",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Sorry",
    artist: {
      connect: {
        name: "Justin Beiber",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 2008,
  },
  {
    title: "Sound of Silence",
    artist: {
      connect: {
        name: "Simon & Garfunkel",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 1971,
  },
  {
    title: "Spain",
    artist: {
      connect: {
        name: "Chick Corea",
      },
    },
  },
  {
    title: "Stairway to Heaven",
    artist: {
      connect: {
        name: "Led Zeppelin",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1972,
  },
  {
    title: "Starlight",
    artist: {
      connect: { name: "Muse" },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 2005,
  },
  {
    title: "Stay",
    artist: {
      connect: {
        name: "Justin Beiber, Kid LAROI",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Stay",
    artist: {
      connect: {
        name: "Rihanna",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Stay With Me",
    artist: {
      connect: {
        name: "Sam Smith",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Stayin' Alive",
    artist: {
      connect: {
        name: "The BeeGees",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 1977,
  },
  {
    title: "Stormy Weather",
    artist: {
      connect: {
        name: "Harold Arlen, Various Artists",
      },
    },
  },
  {
    title: "Summer Breeze",
    artist: {
      connect: {
        name: "Seals & Croft",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 1971,
  },
  {
    title: "Summertime",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
  },
  {
    title: "Sunday Morning",
    artist: {
      connect: {
        name: "Maroon 5",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Superstition",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Surface Pressure",
    artist: {
      connect: {
        name: "Encanto",
      },
    },
  },
];

export default songs;
