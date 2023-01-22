import { LocationType } from "@prisma/client";
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
    id: "cld0t0hqr00019kk57eg10b84",
    name: "The Village Shops at Los Ranchos",
    website: "https://www.shoplosranchos.com/",
    phone: "505-990-9597",
    type: LocationType.COMPLEX,
  },
  {
    id: "cld0sdajt00009kztgzn3n5if",
    name: `Vernon's Speakeasy`,
    website: "https://www.yougottapassword.com/",
    phone: "505-341-0831",
    type: LocationType.RESTAURANT,
  },
  {
    id: "cld0t0hqr00039kk5wk6zho5j",
    name: "Cafe 6855",
    website: "https://www.cafe6855.com/",
    phone: "505-890-9150",
    type: LocationType.RESTAURANT,
  },
];

export default locations;
