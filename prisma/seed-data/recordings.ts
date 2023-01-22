const recordings = [
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--as-it-was.wav",
    storageId: "17baccdf-f1b8-41e7-aa49-c126c39ee046",
    storageFileName: "sample--as-it-was.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Harry Styles",
    recordingTitle: "As It Was",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--classic-standards.wav",
    storageId: "9f1e8ac0-4fe3-4c88-8429-64622ba4139e",
    storageFileName: "sample--classic-standards.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Various Artists",
    recordingTitle: "Classic Standards",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--everlong.wav",
    storageId: "26b5b398-ffcc-4fa1-95f0-aad10dea415b",
    storageFileName: "sample--everlong.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Foo Fighters",
    recordingTitle: "Everlong",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--heart-shaped-box.wav",
    storageId: "433ae54f-157a-42dc-8628-ac02ad1f7b16",
    storageFileName: "sample--heart-shaped-box.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Nirvana",
    recordingTitle: "Heart Shaped Box",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--hey-jude.wav",
    storageId: "805e5f95-4fb1-43e4-90ca-3d39d08935f4",
    storageFileName: "sample--hey-jude.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "The Beatles",
    recordingTitle: "Hey Jude",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--how-deep-is-your-love.wav",
    storageId: "5736ef06-10a8-4bdb-92be-81a321da14aa",
    storageFileName: "sample--how-deep-is-your-love.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "The BeeGees",
    recordingTitle: "How Deep is Your Love",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--late-night-talking.wav",
    storageId: "e0f73e8a-9525-4dfd-b167-8fed9dd03168",
    storageFileName: "sample--late-night-talking.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Harry Styles",
    recordingTitle: "Late Night Talking",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--my-cherie-amour.wav",
    storageId: "7b62bbee-1b6d-4a26-8bc1-a5fb454cbdce",
    storageFileName: "sample--my-cherie-amour.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Stevie Wonder",
    recordingTitle: "My Cherie Amour",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--purple-rain.wav",
    storageId: "3204aeef-e0a0-4024-97f0-cef7ea7c55e7",
    storageFileName: "sample--purple-rain.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Prince",
    recordingTitle: "Purple Rain",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--pyt.wav",
    storageId: "2a37123d-c83d-4e37-a58e-bd030e88f5f3",
    storageFileName: "sample--pyt.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Michael Jackson, Quincy Jones",
    recordingTitle: "P.Y.T.",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--rhiannon.wav",
    storageId: "94785abe-253f-4d20-a060-e87d2cf7c9eb",
    storageFileName: "sample--rhiannon.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Fleetwood Mac",
    recordingTitle: "Rhiannon",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--something.wav",
    storageId: "d98d73f5-2158-40c8-8195-33dec3b4d68d",
    storageFileName: "sample--something.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "The Beatles",
    recordingTitle: "Something",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--unfaithful.wav",
    storageId: "d3ba2779-7483-4881-8e17-b12433f7634f",
    storageFileName: "sample--unfaithful.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Rihanna",
    recordingTitle: "Unfaithful",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--when-i-was-your-man.wav",
    storageId: "44704c7d-6bf6-44f8-b00e-13bcc4e3f09e",
    storageFileName: "sample--when-i-was-your-man.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Bruno Mars",
    recordingTitle: "When I Was Your Man",
  },
  {
    storageUrl:
      "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--when-the-partys-over.wav",
    storageId: "82fcca20-3bd0-4898-a99b-bb21cd2880f9",
    storageFileName: "sample--when-the-partys-over.wav",
    userId: "cld6ouipv00009ks8nmzjxzc4",
    recordingArtist: "Billie Eilish",
    recordingTitle: "When the Party's Over",
  },
];

export default recordings;
