export const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://pokeapi.co/api/v2';

export const SERVICE_ENDPOINTS = {
  pokemon: {
    list: '/pokemon',
    view: '/pokemon/:id',
  },
};
