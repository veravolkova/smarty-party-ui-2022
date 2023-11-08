const getCurrentYear = () => {
  return new Date().getFullYear();
};

const isOwner = (gift, user) => {
  return gift.users.find((u) => u.id === user.id);
};

const isSoleOwner = (gift) => {
  return gift.users.length === 1;
};

const editingAllowed = (gift, user) => {
  if (user.role === "admin" || (isOwner(gift, user) && isSoleOwner(gift))) {
    return true;
  }
  return false;
};

export default {
  getCurrentYear,
  isOwner,
  isSoleOwner,
  editingAllowed,
};
