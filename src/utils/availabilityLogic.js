import common from "./common";

const applyLogic = (gift, currentUser) => {
  const owner = common.isOwner(gift, currentUser);
  const soleOwner = common.isSoleOwner(gift);
  let giftToChange = {};
  let giftUsers = {};

  try {
    //if a user wants to release a gift and s/he is the only one in users array
    if (gift.reserved && owner && soleOwner) {
      giftToChange = {
        ...gift,
        reserved: false,
        users: [],
      };

      return giftToChange;
    }

    // if a user wants to release a gift and s/he is not the only one in users array
    if (gift.reserved && owner && !soleOwner) {
      giftUsers = gift.users.filter((u) => u.id !== owner.id).map((u) => u.id);

      giftToChange = {
        ...gift,
        reserved: true,
        users: giftUsers,
      };
      return giftToChange;
    }

    // if a user wants to reserve a gift no matter if it is already reserved or not
    else if (!owner) {
      giftUsers = gift.users.map((u) => u.id).concat(currentUser.id);

      giftToChange = {
        ...gift,
        reserved: true,
        users: giftUsers,
      };
      return giftToChange;
    }

    return null;
  } catch (exception) {
    console.log(exception);
    return null;
  }
};

export default {
  applyLogic,
};