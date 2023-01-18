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
    title: "24k Magic",
    artist: {
      connectOrCreate: {
        where: { name: "Bruno Mars" },
        create: { name: "Bruno Mars" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "ABCDEFU",
    artist: {
      connectOrCreate: { where: { name: "Gayle" }, create: { name: "Gayle" } },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Africa",
    artist: {
      connectOrCreate: { where: { name: "Toto" }, create: { name: "Toto" } },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "After the Love Has Gone",
    artist: {
      connectOrCreate: {
        where: { name: "Earth Wind and Fire" },
        create: { name: "Earth Wind and Fire" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Ain't No Mountain High Enough",
    artist: {
      connectOrCreate: {
        where: { name: "Marvin Gaye" },
        create: { name: "Marvin Gaye" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ain't No Sunshine",
    artist: {
      connectOrCreate: {
        where: { name: "Bill Withers" },
        create: { name: "Bill Withers" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ain't Too Proud to Beg",
    artist: {
      connectOrCreate: {
        where: { name: "The Temptations" },
        create: { name: "The Temptations" },
      },
    },
  },
  {
    title: "Alison",
    artist: {
      connectOrCreate: {
        where: { name: "Elvis Costello" },
        create: { name: "Elvis Costello" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All About That Bass",
    artist: {
      connectOrCreate: {
        where: { name: "Meghan Trainor" },
        create: { name: "Meghan Trainor" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2014,
  },
  {
    title: "All Apologies",
    artist: {
      connectOrCreate: {
        where: { name: "Nirvana" },
        create: { name: "Nirvana" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All I Wanna Do",
    artist: {
      connectOrCreate: {
        where: { name: "Sheryl Crow" },
        create: { name: "Sheryl Crow" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All in Love is Fair",
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
    title: "All My Life",
    artist: {
      connectOrCreate: {
        where: { name: "K-Ci & JoJo" },
        create: { name: "K-Ci & JoJo" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "All My Loving",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "All Night Long",
    artist: {
      connectOrCreate: {
        where: { name: "Lionel Richie" },
        create: { name: "Lionel Richie" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1983,
  },
  {
    title: "All of Me",
    artist: {
      connectOrCreate: {
        where: { name: "John Legend" },
        create: { name: "John Legend" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "All the Small Things",
    artist: {
      connectOrCreate: {
        where: { name: "Blink 182" },
        create: { name: "Blink 182" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All The Things You Are",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Almost Lover",
    artist: {
      connectOrCreate: {
        where: { name: "A Fine Frenzy" },
        create: { name: "A Fine Frenzy" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Alone Together",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Always on my Mind",
    artist: {
      connectOrCreate: {
        where: { name: "Elvis, Willie Nelson" },
        create: { name: "Elvis, Willie Nelson" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Amazed",
    artist: {
      connectOrCreate: {
        where: { name: "Lonestar" },
        create: { name: "Lonestar" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1999,
  },
  {
    title: "American Pie",
    artist: {
      connectOrCreate: {
        where: { name: "Don McLean" },
        create: { name: "Don McLean" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "And So It Goes",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
  },
  {
    title: "Angel",
    artist: {
      connectOrCreate: {
        where: { name: "Shaggy" },
        create: { name: "Shaggy" },
      },
    },
  },
  {
    title: "Angel",
    artist: {
      connectOrCreate: {
        where: { name: "Sarah McLachlan" },
        create: { name: "Sarah McLachlan" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Animals",
    artist: {
      connectOrCreate: {
        where: { name: "Maroon 5" },
        create: { name: "Maroon 5" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Another Brick in the Wall",
    artist: {
      connectOrCreate: {
        where: { name: "Pink Floyd" },
        create: { name: "Pink Floyd" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Another One Bites the Dust",
    artist: {
      connectOrCreate: { where: { name: "Queen" }, create: { name: "Queen" } },
    },
  },
  {
    title: "April in Paris",
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
    title: "Arabesque 1",
    artist: {
      connectOrCreate: {
        where: { name: "Debussy" },
        create: { name: "Debussy" },
      },
    },
  },
  {
    title: "Arabesques 2",
    artist: {
      connectOrCreate: {
        where: { name: "Debussy" },
        create: { name: "Debussy" },
      },
    },
  },
  {
    title: "Arms of a Woman",
    artist: {
      connectOrCreate: {
        where: { name: "Amos Lee" },
        create: { name: "Amos Lee" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "As Time Goes By",
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
    title: "At Last",
    artist: {
      connectOrCreate: {
        where: { name: "Etta James" },
        create: { name: "Etta James" },
      },
    },
  },
  {
    title: "Autumn in New York",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Autumn Leaves",
    artist: {
      connectOrCreate: {
        where: { name: "Joseph Kosma, Various Artists" },
        create: { name: "Joseph Kosma, Various Artists" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Babe, I'm Gonna Leave You",
    artist: {
      connectOrCreate: {
        where: { name: "Led Zeppelin" },
        create: { name: "Led Zeppelin" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Back at One",
    artist: {
      connectOrCreate: {
        where: { name: "Bryan McKnight" },
        create: { name: "Bryan McKnight" },
      },
    },
  },
  {
    title: "Back to Black",
    artist: {
      connectOrCreate: {
        where: { name: "Amy Winehouse" },
        create: { name: "Amy Winehouse" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 2011,
  },
  {
    title: "Bad Guy",
    artist: {
      connectOrCreate: {
        where: { name: "Billie Eilish" },
        create: { name: "Billie Eilish" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Bad Habits",
    artist: {
      connectOrCreate: {
        where: { name: "Ed Sheeran" },
        create: { name: "Ed Sheeran" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bailamos",
    artist: {
      connectOrCreate: {
        where: { name: "Enrique Iglesias" },
        create: { name: "Enrique Iglesias" },
      },
    },
  },
  {
    title: "Band on the Run",
    artist: {
      connectOrCreate: {
        where: { name: "Paul McCartney, The Wings" },
        create: { name: "Paul McCartney, The Wings" },
      },
    },
  },
  {
    title: "Basket Case",
    artist: {
      connectOrCreate: {
        where: { name: "Greenday" },
        create: { name: "Greenday" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1995,
  },
  {
    title: "Be Without You",
    artist: {
      connectOrCreate: {
        where: { name: "Mary J. Blige" },
        create: { name: "Mary J. Blige" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 2007,
  },
  {
    title: "Beat It",
    artist: {
      connectOrCreate: {
        where: { name: "Michael Jackson" },
        create: { name: "Michael Jackson" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
    year: 1982,
  },
  {
    title: "Beautiful",
    artist: {
      connectOrCreate: {
        where: { name: "Christina Aguilera" },
        create: { name: "Christina Aguilera" },
      },
    },
  },
  {
    title: "Beauty and the Beast",
    artist: {
      connectOrCreate: {
        where: { name: "Beauty & The Beast, Disney" },
        create: { name: "Beauty & The Beast, Disney" },
      },
    },
    year: 1994,
  },
  {
    title: "Before He Cheats",
    artist: {
      connectOrCreate: {
        where: { name: "Carrie Underwood" },
        create: { name: "Carrie Underwood" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
    year: 2004,
  },
  {
    title: "Bennie and the Jets",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Besame Mucho",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
  },
  {
    title: "Best of You",
    artist: {
      connectOrCreate: {
        where: { name: "Foo Fighters" },
        create: { name: "Foo Fighters" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Billie Jean",
    artist: {
      connectOrCreate: {
        where: { name: "Michael Jackson" },
        create: { name: "Michael Jackson" },
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
    year: 1982,
  },
  {
    title: "Bittersweet Symphony",
    artist: {
      connectOrCreate: {
        where: { name: "The Vervepipe" },
        create: { name: "The Vervepipe" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Black Hole Sun",
    artist: {
      connectOrCreate: {
        where: { name: "Soundgarden" },
        create: { name: "Soundgarden" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1993,
  },
  {
    title: "Black Water",
    artist: {
      connectOrCreate: {
        where: { name: "The Doobie Brothers" },
        create: { name: "The Doobie Brothers" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 2007,
  },
  {
    title: "Blackbird",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bleeding Love",
    artist: {
      connectOrCreate: {
        where: { name: "Leona Lewis" },
        create: { name: "Leona Lewis" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 2005,
  },
  {
    title: "Bless the Broken Road",
    artist: {
      connectOrCreate: {
        where: { name: "Rascall Flatts" },
        create: { name: "Rascall Flatts" },
      },
    },
  },
  {
    title: "Blue Bossa",
    artist: {
      connectOrCreate: {
        where: { name: "Joe Henderson" },
        create: { name: "Joe Henderson" },
      },
    },
  },
  {
    title: "Blue Eyes",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
  },
  {
    title: "Body and Soul",
    artist: {
      connectOrCreate: {
        where: { name: "Edward Heyman, Various Artists" },
        create: { name: "Edward Heyman, Various Artists" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bohemian Rhapsody",
    artist: {
      connectOrCreate: { where: { name: "Queen" }, create: { name: "Queen" } },
    },
  },
  {
    title: "Bold as Love",
    artist: {
      connectOrCreate: {
        where: { name: "Jimi Hendrix, John Mayer" },
        create: { name: "Jimi Hendrix, John Mayer" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Boot Scootin' Boogie",
    artist: {
      connectOrCreate: {
        where: { name: "Brooks & Dunn" },
        create: { name: "Brooks & Dunn" },
      },
    },
  },
  {
    title: "Born This Way",
    artist: {
      connectOrCreate: {
        where: { name: "Lady Gaga" },
        create: { name: "Lady Gaga" },
      },
    },
  },
  {
    title: "Born to Run",
    artist: {
      connectOrCreate: {
        where: { name: "Bruce Springsteen" },
        create: { name: "Bruce Springsteen" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1975,
  },
  {
    title: "Boulevard of Broken Dreams",
    artist: {
      connectOrCreate: {
        where: { name: "Greenday" },
        create: { name: "Greenday" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Boys of Summer",
    artist: {
      connectOrCreate: {
        where: { name: "Don Henley" },
        create: { name: "Don Henley" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Brandy",
    artist: {
      connectOrCreate: {
        where: { name: "The Looking Glass" },
        create: { name: "The Looking Glass" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Brave",
    artist: {
      connectOrCreate: {
        where: { name: "Sara Bareilles" },
        create: { name: "Sara Bareilles" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Break my Heart Again",
    artist: {
      connectOrCreate: {
        where: { name: "Finneas" },
        create: { name: "Finneas" },
      },
    },
  },
  {
    title: "Breakaway",
    artist: {
      connectOrCreate: {
        where: { name: "Kelly Clarkson" },
        create: { name: "Kelly Clarkson" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2004,
  },
  {
    title: "Breakeven",
    artist: {
      connectOrCreate: {
        where: { name: "The Script" },
        create: { name: "The Script" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Bridge Over Troubled Water",
    artist: {
      connectOrCreate: {
        where: { name: "Simon & Garfunkel" },
        create: { name: "Simon & Garfunkel" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Brown Eyed Girl",
    artist: {
      connectOrCreate: {
        where: { name: "Van Morrison" },
        create: { name: "Van Morrison" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bye Bye Blackbird",
    artist: {
      connectOrCreate: {
        where: { name: "Miles Davis" },
        create: { name: "Miles Davis" },
      },
    },
  },
  {
    title: "Bye Bye Bye [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "N*Sync" },
        create: { name: "N*Sync" },
      },
    },
  },
  {
    title: "California Dreamin'",
    artist: {
      connectOrCreate: {
        where: { name: "Mamas and the Papas" },
        create: { name: "Mamas and the Papas" },
      },
    },
  },
  {
    title: "Californication",
    artist: {
      connectOrCreate: {
        where: { name: "Red Hot Chili Peppers" },
        create: { name: "Red Hot Chili Peppers" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Call Me",
    artist: {
      connectOrCreate: {
        where: { name: "Blondie" },
        create: { name: "Blondie" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 1980,
  },
  {
    title: "Can You Feel the Love Tonight",
    artist: {
      connectOrCreate: {
        where: { name: "Disney, Elton John, The Lion King" },
        create: { name: "Disney, Elton John, The Lion King" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Can't Fight This Feeling Any More",
    artist: {
      connectOrCreate: {
        where: { name: "REO Speedwagon" },
        create: { name: "REO Speedwagon" },
      },
    },
  },
  {
    title: "Can't Help Falling In Love",
    artist: {
      connectOrCreate: {
        where: { name: "Elvis, Various Artists" },
        create: { name: "Elvis, Various Artists" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Can't Stop This Feeling",
    artist: {
      connectOrCreate: {
        where: { name: "Justin Timberlake" },
        create: { name: "Justin Timberlake" },
      },
    },
  },
  {
    title: "Can't Take My Eyes Off You",
    artist: {
      connectOrCreate: {
        where: { name: "Frankie Valli" },
        create: { name: "Frankie Valli" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Careless Whisper",
    artist: {
      connectOrCreate: {
        where: { name: "George Michael" },
        create: { name: "George Michael" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "Caronlina in My Mind",
    artist: {
      connectOrCreate: {
        where: { name: "James Taylor" },
        create: { name: "James Taylor" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Champagne Supernova",
    artist: {
      connectOrCreate: { where: { name: "Oasis" }, create: { name: "Oasis" } },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Change the World",
    artist: {
      connectOrCreate: {
        where: { name: "Eric Clapton, Phenomenon" },
        create: { name: "Eric Clapton, Phenomenon" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Chasing Cars",
    artist: {
      connectOrCreate: {
        where: { name: "Snow Patrol" },
        create: { name: "Snow Patrol" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Cheap Thrills",
    artist: {
      connectOrCreate: { where: { name: "Sia" }, create: { name: "Sia" } },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Chicken Fried",
    artist: {
      connectOrCreate: {
        where: { name: "Zac Brown Band" },
        create: { name: "Zac Brown Band" },
      },
    },
  },
  {
    title: "Circle Of Life",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John, Lion King" },
        create: { name: "Elton John, Lion King" },
      },
    },
  },
  {
    title: "Clocks",
    artist: {
      connectOrCreate: {
        where: { name: "Coldplay" },
        create: { name: "Coldplay" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Cold, Cold Heart",
    artist: {
      connectOrCreate: {
        where: { name: "Norah Jones" },
        create: { name: "Norah Jones" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Colors of the Wind",
    artist: {
      connectOrCreate: {
        where: { name: "Pocahontas" },
        create: { name: "Pocahontas" },
      },
    },
  },
  {
    title: "Come as you Are",
    artist: {
      connectOrCreate: {
        where: { name: "Nirvana" },
        create: { name: "Nirvana" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Come Away With Me",
    artist: {
      connectOrCreate: {
        where: { name: "Norah Jones" },
        create: { name: "Norah Jones" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Come Fly With Me",
    artist: {
      connectOrCreate: {
        where: { name: "Frank Sinatra, Various Artists" },
        create: { name: "Frank Sinatra, Various Artists" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Come on Eileen",
    artist: {
      connectOrCreate: {
        where: { name: "Dixie Midnight Runners" },
        create: { name: "Dixie Midnight Runners" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1982,
  },
  {
    title: "Come Together",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
  },
  {
    title: "Comedown",
    artist: {
      connectOrCreate: { where: { name: "Bush" }, create: { name: "Bush" } },
    },
  },
  {
    title: "Comfortably Numb",
    artist: {
      connectOrCreate: {
        where: { name: "Pink Floyd" },
        create: { name: "Pink Floyd" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1979,
  },
  {
    title: "Complicated [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Avril Lavigne" },
        create: { name: "Avril Lavigne" },
      },
    },
  },
  {
    title: "Crazy",
    artist: {
      connectOrCreate: {
        where: { name: "Gnarls Barkley" },
        create: { name: "Gnarls Barkley" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Creep",
    artist: {
      connectOrCreate: {
        where: { name: "Radiohead" },
        create: { name: "Radiohead" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1994,
  },
  {
    title: "Cruise",
    artist: {
      connectOrCreate: {
        where: { name: "Florida Georgia Line" },
        create: { name: "Florida Georgia Line" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Dancin' in the Moonlight",
    artist: {
      connectOrCreate: {
        where: { name: "King Harvest, Toploader" },
        create: { name: "King Harvest, Toploader" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Dani California",
    artist: {
      connectOrCreate: {
        where: { name: "Red Hot Chili Peppers" },
        create: { name: "Red Hot Chili Peppers" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Defying Gravity",
    artist: {
      connectOrCreate: {
        where: { name: "Stephen Schwartz, Wicked" },
        create: { name: "Stephen Schwartz, Wicked" },
      },
    },
  },
  {
    title: "Desafinado",
    artist: {
      connectOrCreate: {
        where: { name: "Antonio Carlos Jobim" },
        create: { name: "Antonio Carlos Jobim" },
      },
    },
  },
  {
    title: "Desperado",
    artist: {
      connectOrCreate: {
        where: { name: "The Eagles" },
        create: { name: "The Eagles" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1973,
  },
  {
    title: "Do I Wanna Know",
    artist: {
      connectOrCreate: {
        where: { name: "Arctic Monkeys" },
        create: { name: "Arctic Monkeys" },
      },
    },
  },
  {
    title: "Don't Know Why",
    artist: {
      connectOrCreate: {
        where: { name: "Norah Jones" },
        create: { name: "Norah Jones" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Don't Let Me Down",
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
    title: "Don't Let The Sun Go Down On Me",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1974,
  },
  {
    title: "Don't Speak",
    artist: {
      connectOrCreate: {
        where: { name: "No Doubt" },
        create: { name: "No Doubt" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Don't Stop Believin'",
    artist: {
      connectOrCreate: {
        where: { name: "Journey" },
        create: { name: "Journey" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1981,
  },
  {
    title: "Don't Stop Me Now",
    artist: {
      connectOrCreate: { where: { name: "Queen" }, create: { name: "Queen" } },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Don't Worry About A Thing",
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
    title: "Dream a Little Dream of Me",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Dream On",
    artist: {
      connectOrCreate: {
        where: { name: "Aerosmith" },
        create: { name: "Aerosmith" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Dreaming with a Broken Heart",
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
    title: "Dreams",
    artist: {
      connectOrCreate: {
        where: { name: "Fleetwood Mac" },
        create: { name: "Fleetwood Mac" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Drift Away",
    artist: {
      connectOrCreate: {
        where: { name: "Dobie Gray" },
        create: { name: "Dobie Gray" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Drive [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Incubus" },
        create: { name: "Incubus" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Driver's License",
    artist: {
      connectOrCreate: {
        where: { name: "Olivia Rodrigo" },
        create: { name: "Olivia Rodrigo" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Drops of Jupiter",
    artist: {
      connectOrCreate: { where: { name: "Train" }, create: { name: "Train" } },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Dust in the Wind",
    artist: {
      connectOrCreate: {
        where: { name: "Kansas" },
        create: { name: "Kansas" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Earned It",
    artist: {
      connectOrCreate: {
        where: { name: "The Weeknd" },
        create: { name: "The Weeknd" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Easy",
    artist: {
      connectOrCreate: {
        where: { name: "Commodores" },
        create: { name: "Commodores" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Easy on Me",
    artist: {
      connectOrCreate: { where: { name: "Adele" }, create: { name: "Adele" } },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Either Way",
    artist: {
      connectOrCreate: {
        where: { name: "Chris Stapleton" },
        create: { name: "Chris Stapleton" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "End of the Road",
    artist: {
      connectOrCreate: {
        where: { name: "Boyz 2 Men" },
        create: { name: "Boyz 2 Men" },
      },
    },
  },
  {
    title: "Endless Love",
    artist: {
      connectOrCreate: {
        where: { name: "Lionel Richie" },
        create: { name: "Lionel Richie" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Everlong",
    artist: {
      connectOrCreate: {
        where: { name: "Foo Fighters" },
        create: { name: "Foo Fighters" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Every Morning",
    artist: {
      connectOrCreate: {
        where: { name: "Sugar Ray" },
        create: { name: "Sugar Ray" },
      },
    },
  },
  {
    title: "Every Rose Has It's Thorn",
    artist: {
      connectOrCreate: {
        where: { name: "Poison" },
        create: { name: "Poison" },
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1988,
  },
  {
    title: "Eye of the Tiger",
    artist: {
      connectOrCreate: {
        where: { name: "Survivor" },
        create: { name: "Survivor" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Faithfully",
    artist: {
      connectOrCreate: {
        where: { name: "Journey" },
        create: { name: "Journey" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Fallin'",
    artist: {
      connectOrCreate: {
        where: { name: "Alicia Keys" },
        create: { name: "Alicia Keys" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Falling Slowly",
    artist: {
      connectOrCreate: {
        where: { name: "Once, Theme" },
        create: { name: "Once, Theme" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2006,
  },
  {
    title: "Feel Good Inc.",
    artist: {
      connectOrCreate: {
        where: { name: "Gorillaz" },
        create: { name: "Gorillaz" },
      },
    },
  },
  {
    title: "Feeling Good",
    artist: {
      connectOrCreate: {
        where: { name: "Nina Simone, Various Artists" },
        create: { name: "Nina Simone, Various Artists" },
      },
    },
  },
  {
    title: "Fifty Ways to Leave Your Lover",
    artist: {
      connectOrCreate: {
        where: { name: "Paul Simon" },
        create: { name: "Paul Simon" },
      },
    },
  },
  {
    title: "Fire Away",
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
    title: "Fireflies [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Owl City" },
        create: { name: "Owl City" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "First Time Ever I Saw Your Face",
    artist: {
      connectOrCreate: {
        where: { name: "Roberta Flack" },
        create: { name: "Roberta Flack" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Float On",
    artist: {
      connectOrCreate: {
        where: { name: "Modest Mouse" },
        create: { name: "Modest Mouse" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Fly Like an Eagle",
    artist: {
      connectOrCreate: {
        where: { name: "Steve Miller Band" },
        create: { name: "Steve Miller Band" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1989,
  },
  {
    title: "Fly Me to the Moon",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Follow Your Arrow",
    artist: {
      connectOrCreate: {
        where: { name: "Kasey Musgraves" },
        create: { name: "Kasey Musgraves" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Folsom Prison Blues",
    artist: {
      connectOrCreate: {
        where: { name: "Johnny Cash" },
        create: { name: "Johnny Cash" },
      },
    },
  },
  {
    title: "For Once in My Life",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
  },
  {
    title: "Free Bird",
    artist: {
      connectOrCreate: {
        where: { name: "Lynyrd Skynyrd" },
        create: { name: "Lynyrd Skynyrd" },
      },
    },
  },
  {
    title: "Free Fallin'",
    artist: {
      connectOrCreate: {
        where: { name: "Tom Petty" },
        create: { name: "Tom Petty" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Friends in Low Places",
    artist: {
      connectOrCreate: {
        where: { name: "Garth Brooks" },
        create: { name: "Garth Brooks" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Fuck You",
    artist: {
      connectOrCreate: {
        where: { name: "CeeLo Green" },
        create: { name: "CeeLo Green" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Funny Honey",
    artist: {
      connectOrCreate: {
        where: { name: "Chicago" },
        create: { name: "Chicago" },
      },
    },
  },
];

export default songs;
