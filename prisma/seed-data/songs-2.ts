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
      connectOrCreate: {
        where: { name: "Disney, Frozen" },
        create: { name: "Disney, Frozen" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Let's Get it On",
    artist: {
      connectOrCreate: {
        where: { name: "Marvin Gaye" },
        create: { name: "Marvin Gaye" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Let's Stay Together",
    artist: {
      connectOrCreate: {
        where: { name: "Al Green" },
        create: { name: "Al Green" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Lights",
    artist: {
      connectOrCreate: {
        where: { name: "Journey" },
        create: { name: "Journey" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1978,
  },
  {
    title: "Like a Stone",
    artist: {
      connectOrCreate: {
        where: { name: "Audioslave" },
        create: { name: "Audioslave" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Like a Virgin",
    artist: {
      connectOrCreate: {
        where: { name: "Madonna" },
        create: { name: "Madonna" },
      },
    },
    root: MusicalRoot.G_FLAT_F_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lips of an Angel [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Hinder" },
        create: { name: "Hinder" },
      },
    },
  },
  {
    title: "Listen to the Music",
    artist: {
      connectOrCreate: {
        where: { name: "The Doobie Brothers" },
        create: { name: "The Doobie Brothers" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1976,
  },
  {
    title: "Little Talks",
    artist: {
      connectOrCreate: {
        where: { name: "Of Mice and Men" },
        create: { name: "Of Mice and Men" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Live Like You Were Dying",
    artist: {
      connectOrCreate: {
        where: { name: "Tim McGraw" },
        create: { name: "Tim McGraw" },
      },
    },
  },
  {
    title: "Livin' la Vida Loca",
    artist: {
      connectOrCreate: {
        where: { name: "Ricky Martin" },
        create: { name: "Ricky Martin" },
      },
    },
  },
  {
    title: "Livin' on a Prayer",
    artist: {
      connectOrCreate: {
        where: { name: "Bon Jovi" },
        create: { name: "Bon Jovi" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 1986,
  },
  {
    title: "Living for the City",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
  },
  {
    title: "Locked Out Of Heaven",
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
    title: "Lola",
    artist: {
      connectOrCreate: {
        where: { name: "The Kinks" },
        create: { name: "The Kinks" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love Me Like You Do",
    artist: {
      connectOrCreate: {
        where: { name: "Ellie Goulding" },
        create: { name: "Ellie Goulding" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love Me Tender",
    artist: {
      connectOrCreate: {
        where: { name: "Elvis, Various Artists" },
        create: { name: "Elvis, Various Artists" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love on the Brain",
    artist: {
      connectOrCreate: {
        where: { name: "Rihanna" },
        create: { name: "Rihanna" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Love on Top",
    artist: {
      connectOrCreate: {
        where: { name: "Beyonce" },
        create: { name: "Beyonce" },
      },
    },
  },
  {
    title: "Love Song",
    artist: {
      connectOrCreate: {
        where: { name: "Sara Bareilles" },
        create: { name: "Sara Bareilles" },
      },
    },
  },
  {
    title: "Love theme From Romeo Juliet",
    artist: {
      connectOrCreate: {
        where: { name: "Henri Mancini, Romeo Juliet" },
        create: { name: "Henri Mancini, Romeo Juliet" },
      },
    },
  },
  {
    title: "Love Yourself",
    artist: {
      connectOrCreate: {
        where: { name: "Justin Beiber" },
        create: { name: "Justin Beiber" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lovely Day",
    artist: {
      connectOrCreate: {
        where: { name: "Bill Withers" },
        create: { name: "Bill Withers" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Lullaby of Birdland",
    artist: {
      connectOrCreate: {
        where: { name: "Billie Holliday, Various Artists" },
        create: { name: "Billie Holliday, Various Artists" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Make You Feel My Love",
    artist: {
      connectOrCreate: { where: { name: "Adele" }, create: { name: "Adele" } },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Man, I Feel Like a Woman",
    artist: {
      connectOrCreate: {
        where: { name: "Shania Twain" },
        create: { name: "Shania Twain" },
      },
    },
  },
  {
    title: "Margaritaville",
    artist: {
      connectOrCreate: {
        where: { name: "Jimmy Buffet" },
        create: { name: "Jimmy Buffet" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
    year: 1977,
  },
  {
    title: "Marry Me",
    artist: {
      connectOrCreate: { where: { name: "Train" }, create: { name: "Train" } },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Marry You",
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
    title: "Mary Jane's Last Dance",
    artist: {
      connectOrCreate: {
        where: { name: "Tom Petty" },
        create: { name: "Tom Petty" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Maybe I'm Amazed",
    artist: {
      connectOrCreate: {
        where: { name: "Paul McCartney" },
        create: { name: "Paul McCartney" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Me and Mrs. Jones",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Paul" },
        create: { name: "Billy Paul" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Midnight Train to Georgia",
    artist: {
      connectOrCreate: {
        where: { name: "Gladys Knight" },
        create: { name: "Gladys Knight" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Misery Business",
    artist: {
      connectOrCreate: {
        where: { name: "Paramore" },
        create: { name: "Paramore" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Miss You",
    artist: {
      connectOrCreate: {
        where: { name: "Blink 182" },
        create: { name: "Blink 182" },
      },
    },
  },
  {
    title: "Misty",
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
    title: "Money",
    artist: {
      connectOrCreate: {
        where: { name: "Pink Floyd" },
        create: { name: "Pink Floyd" },
      },
    },
  },
  {
    title: "Moon River",
    artist: {
      connectOrCreate: {
        where: { name: "Breakfast at Tiffany's, Henri Mancini" },
        create: { name: "Breakfast at Tiffany's, Henri Mancini" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Moondance",
    artist: {
      connectOrCreate: {
        where: { name: "Van Morrison" },
        create: { name: "Van Morrison" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1970,
  },
  {
    title: "Movin' Out",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
  },
  {
    title: "Mr Brightside",
    artist: {
      connectOrCreate: {
        where: { name: "The Killers" },
        create: { name: "The Killers" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Mrs. Robinson",
    artist: {
      connectOrCreate: {
        where: { name: "Simon & Garfunkel" },
        create: { name: "Simon & Garfunkel" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
    year: 1978,
  },
  {
    title: "My Cherie Amour",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "My Funny Valentine",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "My Heart Will Go On",
    artist: {
      connectOrCreate: {
        where: { name: "Celine Dion, Theme" },
        create: { name: "Celine Dion, Theme" },
      },
    },
  },
  {
    title: "My Immortal",
    artist: {
      connectOrCreate: {
        where: { name: "Evanescence" },
        create: { name: "Evanescence" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2007,
  },
  {
    title: "My Life",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
  },
  {
    title: "My Way",
    artist: {
      connectOrCreate: {
        where: { name: "Frank Sinatra" },
        create: { name: "Frank Sinatra" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Need You Now",
    artist: {
      connectOrCreate: {
        where: { name: "Lady Antebellum" },
        create: { name: "Lady Antebellum" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2010,
  },
  {
    title: "New York State of Mind",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "New York, New York",
    artist: {
      connectOrCreate: {
        where: { name: "Frank Sinatra" },
        create: { name: "Frank Sinatra" },
      },
    },
    year: 1977,
  },
  {
    title: "No One",
    artist: {
      connectOrCreate: {
        where: { name: "Alicia Keys" },
        create: { name: "Alicia Keys" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "No Scrubs",
    artist: {
      connectOrCreate: { where: { name: "TLC" }, create: { name: "TLC" } },
    },
  },
  {
    title: "No Woman, No Cry",
    artist: {
      connectOrCreate: {
        where: { name: "Bob Marley" },
        create: { name: "Bob Marley" },
      },
    },
  },
  {
    title: "Nobody's Lonely Tonight",
    artist: {
      connectOrCreate: {
        where: { name: "Chris Stapleton" },
        create: { name: "Chris Stapleton" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Oh! Darling",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
  },
  {
    title: "On Green Dolpin Street",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
  },
  {
    title: "One Headlight",
    artist: {
      connectOrCreate: {
        where: { name: "The Wallflowers" },
        create: { name: "The Wallflowers" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
    year: 1999,
  },
  {
    title: "One Note Samba",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
  },
  {
    title: "One of These Nights",
    artist: {
      connectOrCreate: {
        where: { name: "The Eagles" },
        create: { name: "The Eagles" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 1975,
  },
  {
    title: "Only the Good Die Young",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
  },
  {
    title: "Over the Rainbow",
    artist: {
      connectOrCreate: {
        where: { name: "Harold Arlen, Various Artists" },
        create: { name: "Harold Arlen, Various Artists" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1995,
  },
  {
    title: "P.Y.T.",
    artist: {
      connectOrCreate: {
        where: { name: "Michael Jackson" },
        create: { name: "Michael Jackson" },
      },
    },
  },
  {
    title: "Paint It Black",
    artist: {
      connectOrCreate: {
        where: { name: "Rolling Stones" },
        create: { name: "Rolling Stones" },
      },
    },
  },
  {
    title: "Peaceful Easy Feeling",
    artist: {
      connectOrCreate: {
        where: { name: "The Eagles" },
        create: { name: "The Eagles" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "People are Strange",
    artist: {
      connectOrCreate: {
        where: { name: "The Doors" },
        create: { name: "The Doors" },
      },
    },
  },
  {
    title: "Perfect",
    artist: {
      connectOrCreate: {
        where: { name: "Ed Sheeran" },
        create: { name: "Ed Sheeran" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Photograph",
    artist: {
      connectOrCreate: {
        where: { name: "Ed Sheeran" },
        create: { name: "Ed Sheeran" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Photograph",
    artist: {
      connectOrCreate: {
        where: { name: "Nickelback" },
        create: { name: "Nickelback" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Piano Man",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
  },
  {
    title: "Proud Mary",
    artist: {
      connectOrCreate: {
        where: { name: "Credence Clearwater Revival" },
        create: { name: "Credence Clearwater Revival" },
      },
    },
  },
  {
    title: "Purple Rain",
    artist: {
      connectOrCreate: {
        where: { name: "Prince" },
        create: { name: "Prince" },
      },
    },
    root: MusicalRoot.B_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Radioactive",
    artist: {
      connectOrCreate: {
        where: { name: "Imagine Dragons" },
        create: { name: "Imagine Dragons" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Raspberry Beret",
    artist: {
      connectOrCreate: {
        where: { name: "Prince" },
        create: { name: "Prince" },
      },
    },
  },
  {
    title: "Reach Out, I'll Be There",
    artist: {
      connectOrCreate: {
        where: { name: "The Four Tops" },
        create: { name: "The Four Tops" },
      },
    },
  },
  {
    title: "Rhiannon",
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
    title: "Ring of Fire",
    artist: {
      connectOrCreate: {
        where: { name: "Johnny Cash" },
        create: { name: "Johnny Cash" },
      },
    },
  },
  {
    title: "Rock With You",
    artist: {
      connectOrCreate: {
        where: { name: "Michael Jackson" },
        create: { name: "Michael Jackson" },
      },
    },
  },
  {
    title: "Rocket Man",
    artist: {
      connectOrCreate: {
        where: { name: "Elton John" },
        create: { name: "Elton John" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MINOR,
    year: 1973,
  },
  {
    title: "Rolling in the Deep",
    artist: {
      connectOrCreate: { where: { name: "Adele" }, create: { name: "Adele" } },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2013,
  },
  {
    title: "Rosanna",
    artist: {
      connectOrCreate: { where: { name: "Toto" }, create: { name: "Toto" } },
    },
  },
  {
    title: "Roses",
    artist: {
      connectOrCreate: {
        where: { name: "Outkast" },
        create: { name: "Outkast" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Santeria",
    artist: {
      connectOrCreate: {
        where: { name: "Sublime" },
        create: { name: "Sublime" },
      },
    },
  },
  {
    title: "Savior",
    artist: {
      connectOrCreate: {
        where: { name: "Rise Against" },
        create: { name: "Rise Against" },
      },
    },
  },
  {
    title: "Say It Ain't So",
    artist: {
      connectOrCreate: {
        where: { name: "Weezer" },
        create: { name: "Weezer" },
      },
    },
  },
  {
    title: "Say My Name",
    artist: {
      connectOrCreate: {
        where: { name: "Destiny's Child" },
        create: { name: "Destiny's Child" },
      },
    },
  },
  {
    title: "Say Something",
    artist: {
      connectOrCreate: {
        where: { name: "A Great Big World" },
        create: { name: "A Great Big World" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Scenes from an Italian Restaurant",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
  },
  {
    title: "Seasons in the Sun",
    artist: {
      connectOrCreate: {
        where: { name: "Nirvana, Terry Jacks" },
        create: { name: "Nirvana, Terry Jacks" },
      },
    },
  },
  {
    title: "Second Chance",
    artist: {
      connectOrCreate: {
        where: { name: "Shinedown" },
        create: { name: "Shinedown" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
    year: 2005,
  },
  {
    title: "Send the Pain Below",
    artist: {
      connectOrCreate: {
        where: { name: "Chevelle" },
        create: { name: "Chevelle" },
      },
    },
  },
  {
    title: "Separate Ways",
    artist: {
      connectOrCreate: {
        where: { name: "Journey" },
        create: { name: "Journey" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
  },
  {
    title: "September",
    artist: {
      connectOrCreate: {
        where: { name: "Earth Wind and Fire" },
        create: { name: "Earth Wind and Fire" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Seven Nation Army",
    artist: {
      connectOrCreate: {
        where: { name: "The White Stripes" },
        create: { name: "The White Stripes" },
      },
    },
  },
  {
    title: "Sex and Candy",
    artist: {
      connectOrCreate: {
        where: { name: "Marcy Playground" },
        create: { name: "Marcy Playground" },
      },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 2000,
  },
  {
    title: "Shallow",
    artist: {
      connectOrCreate: {
        where: { name: "Bradley Cooper, Lady Gaga" },
        create: { name: "Bradley Cooper, Lady Gaga" },
      },
    },
  },
  {
    title: "She Talks to Angels",
    artist: {
      connectOrCreate: {
        where: { name: "The Black Crowes" },
        create: { name: "The Black Crowes" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MAJOR,
    year: 1991,
  },
  {
    title: "She Used to Be Mine",
    artist: {
      connectOrCreate: {
        where: { name: "Sara Bareilles, The Waitress" },
        create: { name: "Sara Bareilles, The Waitress" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "She Will Be Loved [[ 2000s Book ]]",
    artist: {
      connectOrCreate: {
        where: { name: "Maroon 5" },
        create: { name: "Maroon 5" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MINOR,
  },
  {
    title: "She's Always a Woman",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
    root: MusicalRoot.E_FLAT,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "She's Got a Way",
    artist: {
      connectOrCreate: {
        where: { name: "Billy Joel" },
        create: { name: "Billy Joel" },
      },
    },
    root: MusicalRoot.G,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Signed, Sealed, Delievered",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
  },
  {
    title: "Simple Man",
    artist: {
      connectOrCreate: {
        where: { name: "Lynyrd Skynyrd" },
        create: { name: "Lynyrd Skynyrd" },
      },
    },
  },
  {
    title: "Sir Duke",
    artist: {
      connectOrCreate: {
        where: { name: "Stevie Wonder" },
        create: { name: "Stevie Wonder" },
      },
    },
  },
  {
    title: "Sister Christian",
    artist: {
      connectOrCreate: {
        where: { name: "Night Ranger" },
        create: { name: "Night Ranger" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 1983,
  },
  {
    title: "Slow Dancing in a Burning Room",
    artist: {
      connectOrCreate: {
        where: { name: "John Mayer" },
        create: { name: "John Mayer" },
      },
    },
    root: MusicalRoot.D_FLAT_C_SHARP,
    mode: MusicalMode.MINOR,
  },
  {
    title: "Smokin' Out the Window",
    artist: {
      connectOrCreate: {
        where: { name: "Silk Sonic" },
        create: { name: "Silk Sonic" },
      },
    },
  },
  {
    title: "Smooth",
    artist: {
      connectOrCreate: {
        where: { name: "Carlos Santanna, Rob Thomas" },
        create: { name: "Carlos Santanna, Rob Thomas" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1991,
  },
  {
    title: "Snow (Hey Oh)",
    artist: {
      connectOrCreate: {
        where: { name: "Red Hot Chili Peppers" },
        create: { name: "Red Hot Chili Peppers" },
      },
    },
  },
  {
    title: "Some Nights",
    artist: {
      connectOrCreate: { where: { name: "Fun" }, create: { name: "Fun" } },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
    year: 2012,
  },
  {
    title: "Somebody to Love",
    artist: {
      connectOrCreate: { where: { name: "Queen" }, create: { name: "Queen" } },
    },
  },
  {
    title: "Someone Like You",
    artist: {
      connectOrCreate: { where: { name: "Adele" }, create: { name: "Adele" } },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MAJOR,
    year: 2012,
  },
  {
    title: "Someone You Loved",
    artist: {
      connectOrCreate: {
        where: { name: "Lewis Capaldi" },
        create: { name: "Lewis Capaldi" },
      },
    },
  },
  {
    title: "Something",
    artist: {
      connectOrCreate: {
        where: { name: "The Beatles" },
        create: { name: "The Beatles" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Sorry",
    artist: {
      connectOrCreate: {
        where: { name: "Justin Beiber" },
        create: { name: "Justin Beiber" },
      },
    },
    root: MusicalRoot.A_FLAT_G_SHARP,
    mode: MusicalMode.MAJOR,
    year: 2008,
  },
  {
    title: "Sound of Silence",
    artist: {
      connectOrCreate: {
        where: { name: "Simon & Garfunkel" },
        create: { name: "Simon & Garfunkel" },
      },
    },
    root: MusicalRoot.D,
    mode: MusicalMode.MINOR,
    year: 1971,
  },
  {
    title: "Spain",
    artist: {
      connectOrCreate: {
        where: { name: "Chick Corea" },
        create: { name: "Chick Corea" },
      },
    },
  },
  {
    title: "Stairway to Heaven",
    artist: {
      connectOrCreate: {
        where: { name: "Led Zeppelin" },
        create: { name: "Led Zeppelin" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 1972,
  },
  {
    title: "Starlight",
    artist: {
      connectOrCreate: { where: { name: "Muse" }, create: { name: "Muse" } },
    },
    root: MusicalRoot.B,
    mode: MusicalMode.MAJOR,
    year: 2005,
  },
  {
    title: "Stay",
    artist: {
      connectOrCreate: {
        where: { name: "Justin Beiber, Kid LAROI" },
        create: { name: "Justin Beiber, Kid LAROI" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Stay",
    artist: {
      connectOrCreate: {
        where: { name: "Rihanna" },
        create: { name: "Rihanna" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Stay With Me",
    artist: {
      connectOrCreate: {
        where: { name: "Sam Smith" },
        create: { name: "Sam Smith" },
      },
    },
    root: MusicalRoot.A,
    mode: MusicalMode.MINOR,
    year: 2014,
  },
  {
    title: "Stayin' Alive",
    artist: {
      connectOrCreate: {
        where: { name: "The BeeGees" },
        create: { name: "The BeeGees" },
      },
    },
    root: MusicalRoot.F,
    mode: MusicalMode.MINOR,
    year: 1977,
  },
  {
    title: "Stormy Weather",
    artist: {
      connectOrCreate: {
        where: { name: "Harold Arlen, Various Artists" },
        create: { name: "Harold Arlen, Various Artists" },
      },
    },
  },
  {
    title: "Summer Breeze",
    artist: {
      connectOrCreate: {
        where: { name: "Seals & Croft" },
        create: { name: "Seals & Croft" },
      },
    },
    root: MusicalRoot.E,
    mode: MusicalMode.MINOR,
    year: 1971,
  },
  {
    title: "Summertime",
    artist: {
      connectOrCreate: {
        where: { name: "Various Artists" },
        create: { name: "Various Artists" },
      },
    },
  },
  {
    title: "Sunday Morning",
    artist: {
      connectOrCreate: {
        where: { name: "Maroon 5" },
        create: { name: "Maroon 5" },
      },
    },
    root: MusicalRoot.C,
    mode: MusicalMode.MAJOR,
  },
  {
    title: "Superstition",
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
    title: "Surface Pressure",
    artist: {
      connectOrCreate: {
        where: { name: "Encanto" },
        create: { name: "Encanto" },
      },
    },
  },
];

export default songs;
