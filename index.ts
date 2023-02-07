import convertDecimalToBinary from "./convert-decimal-to-binary";

enum PermissionsEnum {
  READ = 1, //0x0000000000000001 (1 << 0)
  WRITE = 2, //0x0000000000000001 (1 << 1)
  UPDATE = 4, //0x0000000000000001 (1 << 2)
  DELETE = 8, //0x0000000000000001 (1 << 3)
  ALL = 16, //0x0000000000000001 (1 << 4)
}

const Roles = {
  USER: PermissionsEnum.READ,
  MODERATOR:
    PermissionsEnum.READ |
    PermissionsEnum.WRITE |
    PermissionsEnum.UPDATE |
    PermissionsEnum.DELETE,
  ADMINISTRATOR: PermissionsEnum.ALL,
};

const hasPermission = (user: PermissionsEnum, permission: PermissionsEnum) => {
  if (user == Roles.ADMINISTRATOR) {
    return true;
  }

  console.log(`user permission: ${convertDecimalToBinary(user)}`);
  console.log(`permission: ${convertDecimalToBinary(permission)}`);

  return !!(user & permission);
};

console.log(hasPermission(Roles.MODERATOR, PermissionsEnum.WRITE));

/* NOTE: manage role permissions
  Roles.USER |= PermissionsEnum.WRITE; // add permission
  Roles.USER ^= PermissionsEnum.UPDATE; // toggle permission
  Roles.USER &= ~PermissionsEnum.WRITE; // remove permission 
*/
