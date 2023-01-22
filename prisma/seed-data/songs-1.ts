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
    title: "24k Magic",
    artist: {
      connect: {
        name: "Bruno Mars",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "ABCDEFU",
    artist: {
      connect: { name: "Gayle" },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Africa",
    artist: {
      connect: { name: "Toto" },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "After the Love Has Gone",
    artist: {
      connect: {
        name: "Earth Wind and Fire",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Ain't No Mountain High Enough",
    artist: {
      connect: {
        name: "Marvin Gaye",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ain't No Sunshine",
    artist: {
      connect: {
        name: "Bill Withers",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Ain't Too Proud to Beg",
    artist: {
      connect: {
        name: "The Temptations",
      },
    },
  },
  {
    title: "Alison",
    artist: {
      connect: {
        name: "Elvis Costello",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All About That Bass",
    artist: {
      connect: {
        name: "Meghan Trainor",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2014,
  },
  {
    title: "All Apologies",
    artist: {
      connect: {
        name: "Nirvana",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All I Wanna Do",
    artist: {
      connect: {
        name: "Sheryl Crow",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All in Love is Fair",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "All My Life",
    artist: {
      connect: {
        name: "K-Ci & JoJo",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "All My Loving",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "All Night Long",
    artist: {
      connect: {
        name: "Lionel Richie",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1983,
  },
  {
    title: "All of Me",
    artist: {
      connect: {
        name: "John Legend",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "All the Small Things",
    artist: {
      connect: {
        name: "Blink 182",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "All The Things You Are",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Almost Lover",
    artist: {
      connect: {
        name: "A Fine Frenzy",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Alone Together",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Always on my Mind",
    artist: {
      connect: {
        name: "Elvis, Willie Nelson",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Amazed",
    artist: {
      connect: {
        name: "Lonestar",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1999,
  },
  {
    title: "American Pie",
    artist: {
      connect: {
        name: "Don McLean",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "And So It Goes",
    artist: {
      connect: {
        name: "Billy Joel",
      },
    },
  },
  {
    title: "Angel",
    artist: {
      connect: {
        name: "Shaggy",
      },
    },
  },
  {
    title: "Angel",
    artist: {
      connect: {
        name: "Sarah McLachlan",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Animals",
    artist: {
      connect: {
        name: "Maroon 5",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Another Brick in the Wall",
    artist: {
      connect: {
        name: "Pink Floyd",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Another One Bites the Dust",
    artist: {
      connect: { name: "Queen" },
    },
  },
  {
    title: "April in Paris",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Arabesque 1",
    artist: {
      connect: {
        name: "Debussy",
      },
    },
  },
  {
    title: "Arabesques 2",
    artist: {
      connect: {
        name: "Debussy",
      },
    },
  },
  {
    title: "Arms of a Woman",
    artist: {
      connect: {
        name: "Amos Lee",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "As Time Goes By",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "At Last",
    artist: {
      connect: {
        name: "Etta James",
      },
    },
  },
  {
    title: "Autumn in New York",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Autumn Leaves",
    artist: {
      connect: {
        name: "Joseph Kosma, Various Artists",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Babe, I'm Gonna Leave You",
    artist: {
      connect: {
        name: "Led Zeppelin",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Back at One",
    artist: {
      connect: {
        name: "Bryan McKnight",
      },
    },
  },
  {
    title: "Back to Black",
    artist: {
      connect: {
        name: "Amy Winehouse",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 2011,
  },
  {
    title: "Bad Guy",
    artist: {
      connect: {
        name: "Billie Eilish",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Bad Habits",
    artist: {
      connect: {
        name: "Ed Sheeran",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bailamos",
    artist: {
      connect: {
        name: "Enrique Iglesias",
      },
    },
  },
  {
    title: "Band on the Run",
    artist: {
      connect: {
        name: "Paul McCartney, The Wings",
      },
    },
  },
  {
    title: "Basket Case",
    artist: {
      connect: {
        name: "Greenday",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1995,
  },
  {
    title: "Be Without You",
    artist: {
      connect: {
        name: "Mary J. Blige",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 2007,
  },
  {
    title: "Beat It",
    artist: {
      connect: {
        name: "Michael Jackson",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
    year: 1982,
  },
  {
    title: "Beautiful",
    artist: {
      connect: {
        name: "Christina Aguilera",
      },
    },
  },
  {
    title: "Beauty and the Beast",
    artist: {
      connect: {
        name: "Beauty & The Beast, Disney",
      },
    },
    year: 1994,
  },
  {
    title: "Before He Cheats",
    artist: {
      connect: {
        name: "Carrie Underwood",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
    year: 2004,
  },
  {
    title: "Bennie and the Jets",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Besame Mucho",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
  },
  {
    title: "Best of You",
    artist: {
      connect: {
        name: "Foo Fighters",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Billie Jean",
    artist: {
      connect: {
        name: "Michael Jackson",
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MINOR,
    year: 1982,
  },
  {
    title: "Bittersweet Symphony",
    artist: {
      connect: {
        name: "The Vervepipe",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Black Hole Sun",
    artist: {
      connect: {
        name: "Soundgarden",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1993,
  },
  {
    title: "Black Water",
    artist: {
      connect: {
        name: "The Doobie Brothers",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 2007,
  },
  {
    title: "Blackbird",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bleeding Love",
    artist: {
      connect: {
        name: "Leona Lewis",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
    year: 2005,
  },
  {
    title: "Bless the Broken Road",
    artist: {
      connect: {
        name: "Rascall Flatts",
      },
    },
  },
  {
    title: "Blue Bossa",
    artist: {
      connect: {
        name: "Joe Henderson",
      },
    },
  },
  {
    title: "Blue Eyes",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
  },
  {
    title: "Body and Soul",
    artist: {
      connect: {
        name: "Edward Heyman, Various Artists",
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bohemian Rhapsody",
    artist: {
      connect: { name: "Queen" },
    },
  },
  {
    title: "Bold as Love",
    artist: {
      connect: {
        name: "Jimi Hendrix, John Mayer",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Boot Scootin' Boogie",
    artist: {
      connect: {
        name: "Brooks & Dunn",
      },
    },
  },
  {
    title: "Born This Way",
    artist: {
      connect: {
        name: "Lady Gaga",
      },
    },
  },
  {
    title: "Born to Run",
    artist: {
      connect: {
        name: "Bruce Springsteen",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1975,
  },
  {
    title: "Boulevard of Broken Dreams",
    artist: {
      connect: {
        name: "Greenday",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Boys of Summer",
    artist: {
      connect: {
        name: "Don Henley",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Brandy",
    artist: {
      connect: {
        name: "The Looking Glass",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Brave",
    artist: {
      connect: {
        name: "Sara Bareilles",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Break my Heart Again",
    artist: {
      connect: {
        name: "Finneas",
      },
    },
  },
  {
    title: "Breakaway",
    artist: {
      connect: {
        name: "Kelly Clarkson",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2004,
  },
  {
    title: "Breakeven",
    artist: {
      connect: {
        name: "The Script",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
    year: 2013,
  },
  {
    title: "Bridge Over Troubled Water",
    artist: {
      connect: {
        name: "Simon & Garfunkel",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Brown Eyed Girl",
    artist: {
      connect: {
        name: "Van Morrison",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Bye Bye Blackbird",
    artist: {
      connect: {
        name: "Miles Davis",
      },
    },
  },
  {
    title: "Bye Bye Bye [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "N*Sync",
      },
    },
  },
  {
    title: "California Dreamin'",
    artist: {
      connect: {
        name: "Mamas and the Papas",
      },
    },
  },
  {
    title: "Californication",
    artist: {
      connect: {
        name: "Red Hot Chili Peppers",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Call Me",
    artist: {
      connect: {
        name: "Blondie",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 1980,
  },
  {
    title: "Can You Feel the Love Tonight",
    artist: {
      connect: {
        name: "Disney, Elton John, The Lion King",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Can't Fight This Feeling Any More",
    artist: {
      connect: {
        name: "REO Speedwagon",
      },
    },
  },
  {
    title: "Can't Help Falling In Love",
    artist: {
      connect: {
        name: "Elvis, Various Artists",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Can't Stop This Feeling",
    artist: {
      connect: {
        name: "Justin Timberlake",
      },
    },
  },
  {
    title: "Can't Take My Eyes Off You",
    artist: {
      connect: {
        name: "Frankie Valli",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Careless Whisper",
    artist: {
      connect: {
        name: "George Michael",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 1984,
  },
  {
    title: "Caronlina in My Mind",
    artist: {
      connect: {
        name: "James Taylor",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Champagne Supernova",
    artist: {
      connect: { name: "Oasis" },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Change the World",
    artist: {
      connect: {
        name: "Eric Clapton, Phenomenon",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Chasing Cars",
    artist: {
      connect: {
        name: "Snow Patrol",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Cheap Thrills",
    artist: {
      connect: { name: "Sia" },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Chicken Fried",
    artist: {
      connect: {
        name: "Zac Brown Band",
      },
    },
  },
  {
    title: "Circle Of Life",
    artist: {
      connect: {
        name: "Elton John, Lion King",
      },
    },
  },
  {
    title: "Clocks",
    artist: {
      connect: {
        name: "Coldplay",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Cold, Cold Heart",
    artist: {
      connect: {
        name: "Norah Jones",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Colors of the Wind",
    artist: {
      connect: {
        name: "Pocahontas",
      },
    },
  },
  {
    title: "Come as you Are",
    artist: {
      connect: {
        name: "Nirvana",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Come Away With Me",
    artist: {
      connect: {
        name: "Norah Jones",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Come Fly With Me",
    artist: {
      connect: {
        name: "Frank Sinatra, Various Artists",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Come on Eileen",
    artist: {
      connect: {
        name: "Dixie Midnight Runners",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1982,
  },
  {
    title: "Come Together",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
  },
  {
    title: "Comedown",
    artist: {
      connect: { name: "Bush" },
    },
  },
  {
    title: "Comfortably Numb",
    artist: {
      connect: {
        name: "Pink Floyd",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1979,
  },
  {
    title: "Complicated [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Avril Lavigne",
      },
    },
  },
  {
    title: "Crazy",
    artist: {
      connect: {
        name: "Gnarls Barkley",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Creep",
    artist: {
      connect: {
        name: "Radiohead",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1994,
  },
  {
    title: "Cruise",
    artist: {
      connect: {
        name: "Florida Georgia Line",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Dancin' in the Moonlight",
    artist: {
      connect: {
        name: "King Harvest, Toploader",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Dani California",
    artist: {
      connect: {
        name: "Red Hot Chili Peppers",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Defying Gravity",
    artist: {
      connect: {
        name: "Stephen Schwartz, Wicked",
      },
    },
  },
  {
    title: "Desafinado",
    artist: {
      connect: {
        name: "Antonio Carlos Jobim",
      },
    },
  },
  {
    title: "Desperado",
    artist: {
      connect: {
        name: "The Eagles",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1973,
  },
  {
    title: "Do I Wanna Know",
    artist: {
      connect: {
        name: "Arctic Monkeys",
      },
    },
  },
  {
    title: "Don't Know Why",
    artist: {
      connect: {
        name: "Norah Jones",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Don't Let Me Down",
    artist: {
      connect: {
        name: "The Beatles",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Don't Let The Sun Go Down On Me",
    artist: {
      connect: {
        name: "Elton John",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1974,
  },
  {
    title: "Don't Speak",
    artist: {
      connect: {
        name: "No Doubt",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Don't Stop Believin'",
    artist: {
      connect: {
        name: "Journey",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1981,
  },
  {
    title: "Don't Stop Me Now",
    artist: {
      connect: { name: "Queen" },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Don't Worry About A Thing",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Dream a Little Dream of Me",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Dream On",
    artist: {
      connect: {
        name: "Aerosmith",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Dreaming with a Broken Heart",
    artist: {
      connect: {
        name: "John Mayer",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Dreams",
    artist: {
      connect: {
        name: "Fleetwood Mac",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Drift Away",
    artist: {
      connect: {
        name: "Dobie Gray",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Drive [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Incubus",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Driver's License",
    artist: {
      connect: {
        name: "Olivia Rodrigo",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Drops of Jupiter",
    artist: {
      connect: { name: "Train" },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Dust in the Wind",
    artist: {
      connect: {
        name: "Kansas",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Earned It",
    artist: {
      connect: {
        name: "The Weeknd",
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Easy",
    artist: {
      connect: {
        name: "Commodores",
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Easy on Me",
    artist: {
      connect: { name: "Adele" },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Either Way",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "End of the Road",
    artist: {
      connect: {
        name: "Boyz 2 Men",
      },
    },
  },
  {
    title: "Endless Love",
    artist: {
      connect: {
        name: "Lionel Richie",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Everlong",
    artist: {
      connect: {
        name: "Foo Fighters",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Every Morning",
    artist: {
      connect: {
        name: "Sugar Ray",
      },
    },
  },
  {
    title: "Every Rose Has It's Thorn",
    artist: {
      connect: {
        name: "Poison",
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MAJOR,
    year: 1988,
  },
  {
    title: "Eye of the Tiger",
    artist: {
      connect: {
        name: "Survivor",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Faithfully",
    artist: {
      connect: {
        name: "Journey",
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Fallin'",
    artist: {
      connect: {
        name: "Alicia Keys",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Falling Slowly",
    artist: {
      connect: {
        name: "Once, Theme",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2006,
  },
  {
    title: "Feel Good Inc.",
    artist: {
      connect: {
        name: "Gorillaz",
      },
    },
  },
  {
    title: "Feeling Good",
    artist: {
      connect: {
        name: "Nina Simone, Various Artists",
      },
    },
  },
  {
    title: "Fifty Ways to Leave Your Lover",
    artist: {
      connect: {
        name: "Paul Simon",
      },
    },
  },
  {
    title: "Fire Away",
    artist: {
      connect: {
        name: "Chris Stapleton",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Fireflies [[ 2000s Book ]]",
    artist: {
      connect: {
        name: "Owl City",
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "First Time Ever I Saw Your Face",
    artist: {
      connect: {
        name: "Roberta Flack",
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Float On",
    artist: {
      connect: {
        name: "Modest Mouse",
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Fly Like an Eagle",
    artist: {
      connect: {
        name: "Steve Miller Band",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1989,
  },
  {
    title: "Fly Me to the Moon",
    artist: {
      connect: {
        name: "Various Artists",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Follow Your Arrow",
    artist: {
      connect: {
        name: "Kasey Musgraves",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Folsom Prison Blues",
    artist: {
      connect: {
        name: "Johnny Cash",
      },
    },
  },
  {
    title: "For Once in My Life",
    artist: {
      connect: {
        name: "Stevie Wonder",
      },
    },
  },
  {
    title: "Free Bird",
    artist: {
      connect: {
        name: "Lynyrd Skynyrd",
      },
    },
  },
  {
    title: "Free Fallin'",
    artist: {
      connect: {
        name: "Tom Petty",
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Friends in Low Places",
    artist: {
      connect: {
        name: "Garth Brooks",
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Fuck You",
    artist: {
      connect: {
        name: "CeeLo Green",
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Funny Honey",
    artist: {
      connect: {
        name: "Chicago",
      },
    },
  },
];

export default songs;
