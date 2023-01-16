const routes = {
  common: {
    index: {
      name: "Home",
      path: "/",
    },
    privacy: {
      name: "Privacy",
      path: "/privacy",
    },
    login: {
      name: "Login",
      path: "/login",
    },
  },
  special: {
    app: {
      name: "Interact Live",
      path: "/app",
    },
  },
  public: [
    {
      name: "Upcoming Events",
      path: "/events/upcoming",
    },
    {
      name: "Repertoire",
      path: "/songs",
    },
    {
      name: "Listen",
      path: "/listen",
    },
    {
      name: "About Michael",
      path: "/about",
    },
    {
      name: "Tip Online",
      path: "/tip",
    },
  ],
  admin: [],
};

export default routes;
