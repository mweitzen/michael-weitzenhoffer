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
//     artist: {connectOrCreate: {where: {name: artist,
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
      connectOrCreate: {
        where: { name: "Christina Aguilera" },
        create: { name: "Christina Aguilera" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2004,
  },
  {
    title: "Georgia",
    artist: {
      connectOrCreate: {
        where: { name: "Hoagy Carmichael, Various Artists, Ray Charles" },
        create: { name: "Hoagy Carmichael, Various Artists, Ray Charles" },
      },
    },
  },
  {
    title: "Get Back",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
  },
  {
    title: "Get Lucky",
    artist: {
      connectOrCreate: {
        where: { name: "Daft Punk, Pharell" },
        create: { name: "Daft Punk, Pharell" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ghost",
    artist: {
      connectOrCreate: {
        where: { name: "Justin Beiber" },
        create: { name: "Justin Beiber" },
      },
    },
  },
  {
    title: "Girl",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Girls Just Wanna Have Fun",
    artist: {
      connectOrCreate: {
        where: { name: "Cyndi Lauper" },
        create: { name: "Cyndi Lauper" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1979,
  },
  {
    title: "Give Me One Reason",
    artist: {
      connectOrCreate: {
        where: { name: "Tracy Chapman" },
        create: { name: "Tracy Chapman" },
      },
    },
  },
  {
    title: "Glycerine",
    artist: {
      connectOrCreate: { where: { name: "Bush" }, create: { name: "Bush" } },
    },
  },
  {
    title: "Good 4 U",
    artist: {
      connectOrCreate: {
        where: { name: "Olivia Rodrigo" },
        create: { name: "Olivia Rodrigo" },
      },
    },
  },
  {
    title: "Good Riddance",
    artist: {
      connectOrCreate: {
        where: { name: "Greenday" },
        create: { name: "Greenday" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1988,
  },
  {
    title: "Goodbye Stranger",
    artist: {
      connectOrCreate: {
        where: { name: "Supertramp" },
        create: { name: "Supertramp" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Goodbye Yellow Brick Road",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 1978,
  },
  {
    title: "Gravity",
    artist: {
      connectOrCreate: {
        where: { name: "John Mayer" },
        create: { name: "John Mayer" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Gravity",
    artist: {
      connectOrCreate: {
        where: { name: "Sara Bareilles" },
        create: { name: "Sara Bareilles" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Gymnopedies-1",
    artist: {
      connectOrCreate: {
        where: { name: "Erik Satie" },
        create: { name: "Erik Satie" },
      },
    },
  },
  {
    title: "Gymnopedies-2",
    artist: {
      connectOrCreate: {
        where: { name: "Erik Satie" },
        create: { name: "Erik Satie" },
      },
    },
  },
  {
    title: "Gymnopedies-3",
    artist: {
      connectOrCreate: {
        where: { name: "Erik Satie" },
        create: { name: "Erik Satie" },
      },
    },
  },
  {
    title: "Hallelujah",
    artist: {
      connectOrCreate: {
        where: { name: "Jeff Buckley" },
        create: { name: "Jeff Buckley" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Halo",
    artist: {
      connectOrCreate: {
        where: { name: "Beyonce" },
        create: { name: "Beyonce" },
      },
    },
  },
  {
    title: "Hands Down",
    artist: {
      connectOrCreate: {
        where: { name: "Dashboard Confessional" },
        create: { name: "Dashboard Confessional" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Happy",
    artist: {
      connectOrCreate: {
        where: { name: "Pharell" },
        create: { name: "Pharell" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Hard to Handle",
    artist: {
      connectOrCreate: {
        where: { name: "Otis Redding" },
        create: { name: "Otis Redding" },
      },
    },
  },
  {
    title: "Hard to Say I'm Sorry",
    artist: {
      connectOrCreate: {
        where: { name: "Chicago" },
        create: { name: "Chicago" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Havana",
    artist: {
      connectOrCreate: {
        where: { name: "Camila Cabello" },
        create: { name: "Camila Cabello" },
      },
    },
  },
  {
    title: "Have You Ever See the Rain",
    artist: {
      connectOrCreate: {
        where: { name: "Credence Clearwater Revival" },
        create: { name: "Credence Clearwater Revival" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Heart-Shaped Box",
    artist: {
      connectOrCreate: {
        where: { name: "Nirvana" },
        create: { name: "Nirvana" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Heartache Tonight",
    artist: {
      connectOrCreate: {
        where: { name: "The Eagles" },
        create: { name: "The Eagles" },
      },
    },
  },
  {
    title: "Heat Waves",
    artist: {
      connectOrCreate: {
        where: { name: "Glass Animals" },
        create: { name: "Glass Animals" },
      },
    },
  },
  {
    title: "Hello",
    artist: {
      connectOrCreate: { where: { name: "Adele" }, create: { name: "Adele" } },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Hello",
    artist: {
      connectOrCreate: {
        where: { name: "Lionel Richie" },
        create: { name: "Lionel Richie" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Here Comes the Sun",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Here Without You [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "3 Doors Down" },
        create: { name: "3 Doors Down" },
      },
    },
  },
  {
    title: "Hey Jude",
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
    title: "Hey, Soul Sister",
    artist: {
      connectOrCreate: { where: { name: "Train" }, create: { name: "Train" } },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 2006,
  },
  {
    title: "Hey There Delilah",
    artist: {
      connectOrCreate: {
        where: { name: "Plain White T's" },
        create: { name: "Plain White T's" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Hey Ya",
    artist: {
      connectOrCreate: {
        where: { name: "Outkast" },
        create: { name: "Outkast" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 2015,
  },
  {
    title: "High and Dry",
    artist: {
      connectOrCreate: {
        where: { name: "Radiohead" },
        create: { name: "Radiohead" },
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
    year: 1993,
  },
  {
    title: "Higher Ground",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
  },
  {
    title: "Ho Hey",
    artist: {
      connectOrCreate: {
        where: { name: "The Lumineers" },
        create: { name: "The Lumineers" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2009,
  },
  {
    title: "Hold The Line",
    artist: {
      connectOrCreate: { where: { name: "Toto" }, create: { name: "Toto" } },
    },
  },
  {
    title: "Honesty",
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
    title: "Hooked on a Feeling",
    artist: {
      connectOrCreate: {
        where: { name: "Blue Swede" },
        create: { name: "Blue Swede" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Hotel California",
    artist: {
      connectOrCreate: {
        where: { name: "The Eagles" },
        create: { name: "The Eagles" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 1976,
  },
  {
    title: "House of the Rising Sun",
    artist: {
      connectOrCreate: {
        where: { name: "The Animals" },
        create: { name: "The Animals" },
      },
    },
  },
  {
    title: "How Deep Is Your Love",
    artist: {
      connectOrCreate: {
        where: { name: "The BeeGees" },
        create: { name: "The BeeGees" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1977,
  },
  {
    title: "How Far I'll Go",
    artist: {
      connectOrCreate: {
        where: { name: "Disney, Moana" },
        create: { name: "Disney, Moana" },
      },
    },
  },
  {
    title: "How to Save a Life",
    artist: {
      connectOrCreate: {
        where: { name: "The Fray" },
        create: { name: "The Fray" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I am the Highway",
    artist: {
      connectOrCreate: {
        where: { name: "Audioslave" },
        create: { name: "Audioslave" },
      },
    },
  },
  {
    title: "I Believe I Can Fly",
    artist: {
      connectOrCreate: {
        where: { name: "R Kelly" },
        create: { name: "R Kelly" },
      },
    },
  },
  {
    title: "I Can See Clearly Now",
    artist: {
      connectOrCreate: {
        where: { name: "Johnny Nash" },
        create: { name: "Johnny Nash" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1997,
  },
  {
    title: "I Can't Make You Love Me",
    artist: {
      connectOrCreate: {
        where: { name: "Bonnie Raitt" },
        create: { name: "Bonnie Raitt" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I Don't Trust Myself",
    artist: {
      connectOrCreate: {
        where: { name: "John Mayer" },
        create: { name: "John Mayer" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I Don't Wanna Miss A Thing",
    artist: {
      connectOrCreate: {
        where: { name: "Aerosmith" },
        create: { name: "Aerosmith" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1972,
  },
  {
    title: "I Feel The Earth Move",
    artist: {
      connectOrCreate: {
        where: { name: "Carole King" },
        create: { name: "Carole King" },
      },
    },
  },
  {
    title: "I Guess That's Why They Call it the Blues",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
  },
  {
    title: "I Heard It Through The Grapevine",
    artist: {
      connectOrCreate: {
        where: { name: "Marvin Gaye" },
        create: { name: "Marvin Gaye" },
      },
    },
  },
  {
    title: "I Know the End",
    artist: {
      connectOrCreate: {
        where: { name: "Phoebe Bridgers" },
        create: { name: "Phoebe Bridgers" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I Love Rock n Roll",
    artist: {
      connectOrCreate: {
        where: { name: "Joan Jett" },
        create: { name: "Joan Jett" },
      },
    },
  },
  {
    title: "I Put a Spell On You",
    artist: {
      connectOrCreate: {
        where: { name: "Screamin Jay Hawkins" },
        create: { name: "Screamin Jay Hawkins" },
      },
    },
  },
  {
    title: "I Say A Little Prayer",
    artist: {
      connectOrCreate: {
        where: { name: "Aretha Franklin" },
        create: { name: "Aretha Franklin" },
      },
    },
  },
  {
    title: "I Try",
    artist: {
      connectOrCreate: {
        where: { name: "Macy Gray" },
        create: { name: "Macy Gray" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I Wanna Dance With Somebody",
    artist: {
      connectOrCreate: {
        where: { name: "Whitney Houston" },
        create: { name: "Whitney Houston" },
      },
    },
  },
  {
    title: "I Want It That Way",
    artist: {
      connectOrCreate: {
        where: { name: "Backstreet Boys" },
        create: { name: "Backstreet Boys" },
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I Want You Back",
    artist: {
      connectOrCreate: {
        where: { name: "Jackson 5" },
        create: { name: "Jackson 5" },
      },
    },
  },
  {
    title: "I Will Follow You Into The Dark",
    artist: {
      connectOrCreate: {
        where: { name: "Death Cab for Cutie" },
        create: { name: "Death Cab for Cutie" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I Will Survive",
    artist: {
      connectOrCreate: {
        where: { name: "Gloria Gayner" },
        create: { name: "Gloria Gayner" },
      },
    },
  },
  {
    title: "I Wish",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "I'll Make Love To You",
    artist: {
      connectOrCreate: {
        where: { name: "Boyz 2 Men" },
        create: { name: "Boyz 2 Men" },
      },
    },
  },
  {
    title: "I'm Not The Only One",
    artist: {
      connectOrCreate: {
        where: { name: "Sam Smith" },
        create: { name: "Sam Smith" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I'm Still Standing",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
  },
  {
    title: "I'm Yours [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Jason Mraz" },
        create: { name: "Jason Mraz" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "I've Had the Time of My Life",
    artist: {
      connectOrCreate: {
        where: { name: "Dirty Dancing" },
        create: { name: "Dirty Dancing" },
      },
    },
  },
  {
    title: "If I Ain't Got You",
    artist: {
      connectOrCreate: {
        where: { name: "Alicia Keys" },
        create: { name: "Alicia Keys" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "If You Leave Me Now",
    artist: {
      connectOrCreate: {
        where: { name: "Chicago" },
        create: { name: "Chicago" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "If You're Gone [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Matchbox 20" },
        create: { name: "Matchbox 20" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Imagine",
    artist: {
      connectOrCreate: {
        where: { name: "John Lennon" },
        create: { name: "John Lennon" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "In The End",
    artist: {
      connectOrCreate: {
        where: { name: "Linkin Park" },
        create: { name: "Linkin Park" },
      },
    },
  },
  {
    title: "Interstate Love Song",
    artist: {
      connectOrCreate: {
        where: { name: "Stone Temple Pilots" },
        create: { name: "Stone Temple Pilots" },
      },
    },
  },
  {
    title: "Into the Mystic",
    artist: {
      connectOrCreate: {
        where: { name: "Van Morrison" },
        create: { name: "Van Morrison" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Iris",
    artist: {
      connectOrCreate: {
        where: { name: "Goo Goo Dolls" },
        create: { name: "Goo Goo Dolls" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ironic",
    artist: {
      connectOrCreate: {
        where: { name: "Alanis Morrisette" },
        create: { name: "Alanis Morrisette" },
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Is This Love",
    artist: {
      connectOrCreate: {
        where: { name: "Bob Marley" },
        create: { name: "Bob Marley" },
      },
    },
  },
  {
    title: "Isn't She Lovely",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Issues",
    artist: {
      connectOrCreate: {
        where: { name: "Julia Michaels" },
        create: { name: "Julia Michaels" },
      },
    },
  },
  {
    title: "It's Been Awhile",
    artist: {
      connectOrCreate: {
        where: { name: "Staind" },
        create: { name: "Staind" },
      },
    },
  },
  {
    title: "It's Five o'Clock Somehwere",
    artist: {
      connectOrCreate: {
        where: { name: "Alan Jackson, Jimmy Buffet" },
        create: { name: "Alan Jackson, Jimmy Buffet" },
      },
    },
  },
  {
    title: "It's My Life",
    artist: {
      connectOrCreate: {
        where: { name: "Bon Jovi" },
        create: { name: "Bon Jovi" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "It's Still Rock 'n Roll to Me",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
  },
  {
    title: "It's Too Late",
    artist: {
      connectOrCreate: {
        where: { name: "Carole King" },
        create: { name: "Carole King" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "It's Your Love",
    artist: {
      connectOrCreate: {
        where: { name: "Faith Hill, Tim McGraw" },
        create: { name: "Faith Hill, Tim McGraw" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Jack and Diane",
    artist: {
      connectOrCreate: {
        where: { name: "John Mellencamp" },
        create: { name: "John Mellencamp" },
      },
    },
  },
  {
    title: "Jammin",
    artist: {
      connectOrCreate: {
        where: { name: "Bob Marley" },
        create: { name: "Bob Marley" },
      },
    },
  },
  {
    title: "Jar of Hearts",
    artist: {
      connectOrCreate: {
        where: { name: "Christina Perri" },
        create: { name: "Christina Perri" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2012,
  },
  {
    title: "Jessie's Girl",
    artist: {
      connectOrCreate: {
        where: { name: "Rick Springfield" },
        create: { name: "Rick Springfield" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1981,
  },
  {
    title: "Just a Kiss",
    artist: {
      connectOrCreate: {
        where: { name: "Lady Antebellum" },
        create: { name: "Lady Antebellum" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 2012,
  },
  {
    title: "Just Give Me a Reason",
    artist: {
      connectOrCreate: {
        where: { name: "Nate Ruess, Pink" },
        create: { name: "Nate Ruess, Pink" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 2011,
  },
  {
    title: "Just the Two of Us",
    artist: {
      connectOrCreate: {
        where: { name: "Bill Withers, Grover Washington, Jr" },
        create: { name: "Bill Withers, Grover Washington, Jr" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Just The Way You Are",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Just The Way You Are",
    artist: {
      connectOrCreate: {
        where: { name: "Bruno Mars" },
        create: { name: "Bruno Mars" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Karma Police",
    artist: {
      connectOrCreate: {
        where: { name: "Radiohead" },
        create: { name: "Radiohead" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1994,
  },
  {
    title: "Killer Queen",
    artist: {
      connectOrCreate: { where: { name: "Queen" }, create: { name: "Queen" } },
    },
  },
  {
    title: "Killing Me Softly",
    artist: {
      connectOrCreate: {
        where: { name: "Roberta Flack" },
        create: { name: "Roberta Flack" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 1973,
  },
  {
    title: "Kiss",
    artist: {
      connectOrCreate: {
        where: { name: "Prince" },
        create: { name: "Prince" },
      },
    },
  },
  {
    title: "Kiss From a Rose",
    artist: {
      connectOrCreate: { where: { name: "Seal" }, create: { name: "Seal" } },
    },
    root: MusicalRoot.G,
    year: 1997,
  },
  {
    title: "Kiss Me",
    artist: {
      connectOrCreate: {
        where: { name: "Sixpence None the Richer" },
        create: { name: "Sixpence None the Richer" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Kryptonite",
    artist: {
      connectOrCreate: {
        where: { name: "3 Doors Down" },
        create: { name: "3 Doors Down" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Kyoto",
    artist: {
      connectOrCreate: {
        where: { name: "Phoebe Bridgers" },
        create: { name: "Phoebe Bridgers" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "La Vie en Rose",
    artist: {
      connectOrCreate: {
        where: { name: "Edith Piaf, Various Artists" },
        create: { name: "Edith Piaf, Various Artists" },
      },
    },
  },
  {
    title: "Lady",
    artist: {
      connectOrCreate: {
        where: { name: "Lionel Richie" },
        create: { name: "Lionel Richie" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Landside",
    artist: {
      connectOrCreate: {
        where: { name: "Dixie Chicks, Stevie Nix" },
        create: { name: "Dixie Chicks, Stevie Nix" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lay Me Down",
    artist: {
      connectOrCreate: {
        where: { name: "Sam Smith" },
        create: { name: "Sam Smith" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Learn to Fly",
    artist: {
      connectOrCreate: {
        where: { name: "Foo Fighters" },
        create: { name: "Foo Fighters" },
      },
    },
  },
  {
    title: "Leave the Door Open",
    artist: {
      connectOrCreate: {
        where: { name: "Silk Sonic" },
        create: { name: "Silk Sonic" },
      },
    },
  },
  {
    title: "Let It Be",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
];

export default songs;
