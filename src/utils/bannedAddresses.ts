// utils/bannedAddresses.ts
export const BANNED_ADDRESSES = [
  "0xc86b7b4a1e31ab7854b08539c5f006f5c266d1f1", 
  "0x669c4a3d5673ab1c7fe0411bc7fbd122327c5394",
  "0x3fda9d29c7a15804b06573983059ee2228106cf2",
  "0x760721192290Ee4c22f70AEd5553EbedEb8B8593",
  "0x55EEe450651Fac9A57a1E60f9FB823ff6546fE8d",
  "0xe88c7d090914B400E3D9B1c0e45C89eD5250a05E"
].map(addr => addr.toLowerCase()); 

export const isAddressBanned = (address: string | undefined) => {
  if (!address) return false;
  return BANNED_ADDRESSES.includes(address.toLowerCase());
};
