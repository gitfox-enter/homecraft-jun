// Where everything is. One block = one metre; x runs east, z runs south
// (towards the pool and the default camera), y is up. The ground is y = 0.

export const ISLAND = { x0: -40, x1: 42, z0: -30, z1: 36 };

// Hotel lobby (front desk + lounge)
export const LOBBY = { x0: -12, x1: 12, z0: -10, z1: 6, height: 6 };

// Front desk
export const FRONT_DESK = { x0: -6, x1: 6, z0: -8, z1: -6 };

// Guest rooms wing
export const ROOMS = { x0: -14, x1: -2, z0: 8, z1: 20, height: 6 };

// Restaurant / Dining
export const RESTAURANT = { x0: 4, x1: 14, z0: 8, z1: 20, height: 5 };

// Gym / Fitness
export const GYM = { x0: -2, x1: 10, z0: 22, z1: 30, height: 5 };

// Pool
export const POOL = { x0: -12, x1: 2, z0: 24, z1: 34, water: -0.22, bed: -3 };

// Terrace (outdoor lounge)
export const TERRACE = { x0: -14, x1: 14, z0: 36, z1: 42 };

// Station points (where player can stand and interact)
export const STATIONS = [
  { id: 'lobby', name: '\u5927\u5802', en: 'Lobby', at: [0, 0], look: [0, -8] },
  { id: 'front-desk', name: '\u524d\u53f0', en: 'Front Desk', at: [0, -7], look: [0, -10] },
  { id: 'rooms', name: '\u5ba2\u623f', en: 'Guest Rooms', at: [-8, 14], look: [-6, 16] },
  { id: 'restaurant', name: '\u9910\u5385', en: 'Restaurant', at: [9, 14], look: [9, 16] },
  { id: 'gym', name: '\u5065\u8eab\u623f', en: 'Gym', at: [4, 26], look: [4, 28] },
  { id: 'pool', name: '\u6cf3\u6c60', en: 'Pool', at: [-5, 29], look: [-5, 31] },
  { id: 'about', name: '\u5173\u4e8e\u6211', en: 'About Me', at: [0, 12], look: [0, 10] },
  { id: 'works', name: '\u5de5\u4f5c\u53f0', en: 'Workbench', at: [0, 20], look: [0, 22] },
  { id: 'portal', name: '\u4f20\u9001\u95e8', en: 'Portal', icon: 'portal', at: [10, 38], look: [10, 40] },
  { id: 'mailbox', name: '\u7559\u8a00', en: 'Mailbox', icon: 'mail', at: [-10, 38], look: [-10, 40] },
];

export const SPAWN = { x: 0, z: 5, heading: Math.PI };

// Helper: check if (x, z) is inside a region
const inside = (r, x, z) => x >= r.x0 && x < r.x1 && z >= r.z0 && z < r.z1;

export function inLobby(x, z) { return inside(LOBBY, x, z); }
export function inRooms(x, z) { return inside(ROOMS, x, z); }
export function inRestaurant(x, z) { return inside(RESTAURANT, x, z); }
export function inGym(x, z) { return inside(GYM, x, z); }
export function inPool(x, z) { return inside(POOL, x, z); }

// Floor height under (x, z)
export function floorAt(x, z) { return 0; }

