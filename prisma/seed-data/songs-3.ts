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
// const songs = [
//   {
//     title: "String",
//     artist: {connect: {where: {name: artist,
//     year: "Int",
//     genre: "Genre",
//     root: musicalRoot,
//     mode: musicalMode,
//   },
// ];
const songs = [
  {
    title: "Genie in a Bottle",
    artist: {
      connect: {
        name: "Christina Aguilera",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2004,
  },
  {
    title: "Georgia",
    artist: {
      connect: {
        name: "Ray Charles",
      },
    },
  },
  {
    title: "Get Back",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
  },
  {
    title: "Get Lucky",
    artist: {
      connect: {
        name: "Daft Punk, Pharell",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ghost",
    artist: {
      connect: {
        name: "Justin Beiber",
      },
    },
  },
  {
    title: "Girl",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Girls Just Wanna Have Fun",
    artist: {
      connect: {
        name: "Cyndi Lauper",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1979,
  },
  {
    title: "Give Me One Reason",
    artist: {
      connect: {
        name: "Tracy Chapman",
      },
    },
  },
  {
    title: "Glycerine",
    artist: {
      connect: { name: "Bush" },
    },
  },
  {
    title: "Good 4 U",
    artist: {
      connect: {
        name: "Olivia Rodrigo",
      },
    },
  },
  {
    title: "Good Riddance",
    artist: {
      connect: {
        name: "Greenday",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1988,
  },
  {
    title: "Goodbye Stranger",
    artist: {
      connect: {
        name: "Supertramp",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Goodbye Yellow Brick Road",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 1978,
  },
  {
    title: "Gravity",
    artist: {
      connect: {
        name: "John Mayer",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Gravity",
    artist: {
      connect: {
        name: "Sara Bareilles",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Gymnopedies-1",
    artist: {
      connect: {
        name: "Erik Satie",
      },
    },
  },
  {
    title: "Gymnopedies-2",
    artist: {
      connect: {
        name: "Erik Satie",
      },
    },
  },
  {
    title: "Gymnopedies-3",
    artist: {
      connect: {
        name: "Erik Satie",
      },
    },
  },
  {
    title: "Hallelujah",
    artist: {
      connect: {
        name: "Jeff Buckley",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Halo",
    artist: {
      connect: {
        name: "Beyonce",
      },
    },
  },
  {
    title: "Hands Down",
    artist: {
      connect: {
        name: "Dashboard Confessional",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Happy",
    artist: {
      connect: {
        name: "Pharell",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Hard to Handle",
    artist: {
      connect: {
        name: "Otis Redding",
      },
    },
  },
  {
    title: "Hard to Say I'm Sorry",
    artist: {
      connect: {
        name: "Chicago",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Havana",
    artist: {
      connect: {
        name: "Camila Cabello",
      },
    },
  },
  {
    title: "Have You Ever See the Rain",
    artist: {
      connect: {
        name: "Credence Clearwater Revival",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Heart-Shaped Box",
    artist: {
      connect: {
        name: "Nirvana",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Heartache Tonight",
    artist: {
      connect: {
        name: "The Eagles",
      },
    },
  },
  {
    title: "Heat Waves",
    artist: {
      connect: {
        name: "Glass Animals",
      },
    },
  },
  {
    title: "Hello",
    artist: {
      connect: { name: "Adele" },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Hello",
    artist: {
      connect: {
        name: "Lionel Richie",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Here Comes the Sun",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Here Without You [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "3 Doors Down",
      },
    },
  },
  {
    title: "Hey Jude",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Hey, Soul Sister",
    artist: {
      connect: { name: "Train" },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 2006,
  },
  {
    title: "Hey There Delilah",
    artist: {
      connect: {
        name: "Plain White T's",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Hey Ya",
    artist: {
      connect: {
        name: "Outkast",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 2015,
  },
  {
    title: "High and Dry",
    artist: {
      connect: {
        name: "Radiohead",
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
    year: 1993,
  },
  {
    title: "Higher Ground",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
  },
  {
    title: "Ho Hey",
    artist: {
      connect: {
        name: "The Lumineers",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2009,
  },
  {
    title: "Hold The Line",
    artist: {
      connect: { name: "Toto" },
    },
  },
  {
    title: "Honesty",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Hooked on a Feeling",
    artist: {
      connect: {
        name: "Blue Swede",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Hotel California",
    artist: {
      connect: {
        name: "The Eagles",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 1976,
  },
  {
    title: "House of the Rising Sun",
    artist: {
      connect: {
        name: "The Animals",
      },
    },
  },
  {
    title: "How Deep Is Your Love",
    artist: {
      connect: {
        name: "The BeeGees",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1977,
  },
  {
    title: "How Far I'll Go",
    artist: {
      connect: {
        name: "Disney, Moana",
      },
    },
  },
  {
    title: "How to Save a Life",
    artist: {
      connect: {
        name: "The Fray",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I am the Highway",
    artist: {
      connect: {
        name: "Audioslave",
      },
    },
  },
  {
    title: "I Believe I Can Fly",
    artist: {
      connect: {
        name: "R Kelly",
      },
    },
  },
  {
    title: "I Can See Clearly Now",
    artist: {
      connect: {
        name: "Johnny Nash",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1997,
  },
  {
    title: "I Can't Make You Love Me",
    artist: {
      connect: {
        name: "Bonnie Raitt",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I Don't Trust Myself",
    artist: {
      connect: {
        name: "John Mayer",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I Don't Wanna Miss A Thing",
    artist: {
      connect: {
        name: "Aerosmith",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1972,
  },
  {
    title: "I Feel The Earth Move",
    artist: {
      connect: {
        name: "Carole King",
      },
    },
  },
  {
    title: "I Guess That's Why They Call it the Blues",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
  },
  {
    title: "I Heard It Through The Grapevine",
    artist: {
      connect: {
        name: "Marvin Gaye",
      },
    },
  },
  {
    title: "I Know the End",
    artist: {
      connect: {
        name: "Phoebe Bridgers",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I Love Rock n Roll",
    artist: {
      connect: {
        name: "Joan Jett",
      },
    },
  },
  {
    title: "I Put a Spell On You",
    artist: {
      connect: {
        name: "Screamin Jay Hawkins",
      },
    },
  },
  {
    title: "I Say A Little Prayer",
    artist: {
      connect: {
        name: "Aretha Franklin",
      },
    },
  },
  {
    title: "I Try",
    artist: {
      connect: {
        name: "Macy Gray",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I Wanna Dance With Somebody",
    artist: {
      connect: {
        name: "Whitney Houston",
      },
    },
  },
  {
    title: "I Want It That Way",
    artist: {
      connect: {
        name: "Backstreet Boys",
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I Want You Back",
    artist: {
      connect: {
        name: "Jackson 5",
      },
    },
  },
  {
    title: "I Will Follow You Into The Dark",
    artist: {
      connect: {
        name: "Death Cab for Cutie",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I Will Survive",
    artist: {
      connect: {
        name: "Gloria Gayner",
      },
    },
  },
  {
    title: "I Wish",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I'll Make Love To You",
    artist: {
      connect: {
        name: "Boyz 2 Men",
      },
    },
  },
  {
    title: "I'm Not The Only One",
    artist: {
      connect: {
        name: "Sam Smith",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I'm Still Standing",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
  },
  {
    title: "I'm Yours [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Jason Mraz",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I've Had the Time of My Life",
    artist: {
      connect: {
        name: "Dirty Dancing",
      },
    },
  },
  {
    title: "If I Ain't Got You",
    artist: {
      connect: {
        name: "Alicia Keys",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "If You Leave Me Now",
    artist: {
      connect: {
        name: "Chicago",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "If You're Gone [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Matchbox 20",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Imagine",
    artist: {
      connect: {
        name: "John Lennon",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "In The End",
    artist: {
      connect: {
        name: "Linkin Park",
      },
    },
  },
  {
    title: "Interstate Love Song",
    artist: {
      connect: {
        name: "Stone Temple Pilots",
      },
    },
  },
  {
    title: "Into the Mystic",
    artist: {
      connect: {
        name: "Van Morrison",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Iris",
    artist: {
      connect: {
        name: "Goo Goo Dolls",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ironic",
    artist: {
      connect: {
        name: "Alanis Morrisette",
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Is This Love",
    artist: {
      connect: {
        name: "Bob Marley",
      },
    },
  },
  {
    title: "Isn't She Lovely",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Issues",
    artist: {
      connect: {
        name: "Julia Michaels",
      },
    },
  },
  {
    title: "It's Been Awhile",
    artist: {
      connect: {
        name: "Staind",
      },
    },
  },
  {
    title: "It's Five o'Clock Somehwere",
    artist: {
      connect: {
        name: "Alan Jackson, Jimmy Buffet",
      },
    },
  },
  {
    title: "It's My Life",
    artist: {
      connect: {
        name: "Bon Jovi",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "It's Still Rock 'n Roll to Me",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
  },
  {
    title: "It's Too Late",
    artist: {
      connect: {
        name: "Carole King",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "It's Your Love",
    artist: {
      connect: {
        name: "Faith Hill, Tim McGraw",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Jack and Diane",
    artist: {
      connect: {
        name: "John Mellencamp",
      },
    },
  },
  {
    title: "Jammin",
    artist: {
      connect: {
        name: "Bob Marley",
      },
    },
  },
  {
    title: "Jar of Hearts",
    artist: {
      connect: {
        name: "Christina Perri",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2012,
  },
  {
    title: "Jessie's Girl",
    artist: {
      connect: {
        name: "Rick Springfield",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1981,
  },
  {
    title: "Just a Kiss",
    artist: {
      connect: {
        name: "Lady Antebellum",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 2012,
  },
  {
    title: "Just Give Me a Reason",
    artist: {
      connect: {
        name: "Nate Ruess, Pink",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 2011,
  },
  {
    title: "Just the Two of Us",
    artist: {
      connect: {
        name: "Bill Withers, Grover Washington, Jr",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Just The Way You Are",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Just The Way You Are",
    artist: {
      connect: {
        name: "Bruno Mars",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Karma Police",
    artist: {
      connect: {
        name: "Radiohead",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1994,
  },
  {
    title: "Killer Queen",
    artist: {
      connect: { name: "Queen" },
    },
  },
  {
    title: "Killing Me Softly",
    artist: {
      connect: {
        name: "Roberta Flack",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 1973,
  },
  {
    title: "Kiss",
    artist: {
      connect: {
        name: "Prince",
      },
    },
  },
  {
    title: "Kiss From a Rose",
    artist: {
      connect: { name: "Seal" },
    },
    root: MusicalRoot.G,
    year: 1997,
  },
  {
    title: "Kiss Me",
    artist: {
      connect: {
        name: "Sixpence None the Richer",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Kryptonite",
    artist: {
      connect: {
        name: "3 Doors Down",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Kyoto",
    artist: {
      connect: {
        name: "Phoebe Bridgers",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "La Vie en Rose",
    artist: {
      connect: {
        name: "Edith Piaf, Various Artists",
      },
    },
  },
  {
    title: "Lady",
    artist: {
      connect: {
        name: "Lionel Richie",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Landside",
    artist: {
      connect: {
        name: "Dixie Chicks, Stevie Nix",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lay Me Down",
    artist: {
      connect: {
        name: "Sam Smith",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Learn to Fly",
    artist: {
      connect: {
        name: "Foo Fighters",
      },
    },
  },
  {
    title: "Leave the Door Open",
    artist: {
      connect: {
        name: "Silk Sonic",
      },
    },
  },
  {
    title: "Let It Be",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
];

export default songs;
