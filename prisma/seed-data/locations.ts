/*
 *
 *
 *
 * LOCATIONS
 *
 *
 *
 */
const locations = [
  {
    id: "cld0sdajt00009kztgzn3n5if",
    name: `Vernon's Speakeasy`,
    website: "https://www.yougottapassword.com/",
    phone: "505-341-0831",
    address: {
      id: "cld0sdaju00019kztn5uby9fa",
      streetNumber: "6855",
      street: {
        name: "4th St NW",
        neighborhood: {
          name: "Los Ranchos",
          city: "Albuquerque",
        },
        city: {
          name: "Albuquerque",
          county: {
            name: "Bernalillo",
            state: "New Mexico",
          },
        },
      },
      zipcode: { code: 87107 },
    },
    stages: [
      {
        name: `Black Diamond Lounge`,
        type: "ROOM",
      },
      {
        name: `Chamber`,
        type: "ROOM",
      },
    ],
    type: "RESTAURANT",
    insideOf: {
      id: "cld0t0hqr00019kk57eg10b84",
      name: "The Village Shops at Los Ranchos",
      website: "https://www.shoplosranchos.com/",
      phone: "505-990-9597",
      address: {
        streetNumber: "6855",
        street: {
          name: "4th St NW",
          neighborhood: {
            name: "Los Ranchos",
            city: "Albuquerque",
          },
          city: {
            name: "Albuquerque",
            county: {
              name: "Bernalillo",
              state: "New Mexico",
            },
          },
        },
        zipcode: { code: 87107 },
      },
      type: "COMPLEX",
    },
  },
  {
    id: "cld0t0hqr00039kk5wk6zho5j",
    name: "Cafe 6855",
    website: "https://www.cafe6855.com/",
    phone: "505-890-9150",
    address: {
      streetNumber: "6855",
      street: {
        name: "4th St NW",
        neighborhood: {
          name: "Los Ranchos",
          city: "Albuquerque",
        },
        city: {
          name: "Albuquerque",
          county: {
            name: "Bernalillo",
            state: "New Mexico",
          },
        },
      },
      zipcode: { code: 87107 },
    },
    stages: [
      {
        name: "Brunch",
        type: "ROOM",
      },
    ],
    type: "RESTAURANT",
    insideOf: {
      id: "cld0t0hqr00019kk57eg10b84",
      name: "The Village Shops at Los Ranchos",
      address: {
        streetNumber: "6855",
        street: {
          name: "4th St NW",
          neighborhood: {
            name: "Los Ranchos",
            city: "Albuquerque",
          },
          city: {
            name: "Albuquerque",
            county: {
              name: "Bernalillo",
              state: "New Mexico",
            },
          },
        },
        zipcode: { code: 87107 },
      },
      type: "COMPLEX",
    },
  },
];

export default locations;
