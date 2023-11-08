const NAV_LINKS = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/gifts",
    name: "gifts",
  },
  {
    path: "/users",
    name: "guests",
  },
];

const RADIO_BUTTON_LABELS = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Reserved",
    label: "Reserved By Me",
  },
  {
    value: "Available",
    label: "Available",
  },
];

const STORAGE_KEY = "loggedGiftAppUser";

export default {
  RADIO_BUTTON_LABELS,
  STORAGE_KEY,
  NAV_LINKS,
};
