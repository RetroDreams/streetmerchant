import {Store} from './store';

export const Nuphy: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '$',
  labels: {
    inStock: {
        container: '.add-to-cart:not(:disabled)',
        text: ['add to cart'],
    },
  },
  links: [
    {
      brand: 'nuphy',
      cartUrl:
        'https://nuphy.com/collections/keyboards/products/air60',
      model: 'nuphytest',
      series: 'nuphytest',
      url: 'https://nuphy.com/collections/keyboards/products/air60',
    },
    {
      brand: 'nuphy',
      cartUrl:
        'https://nuphy.com/collections/keycaps/products/nutype-f1-keycaps?variant=33147055669357',
      model: 'nuphyf1blackcaps',
      series: 'nuphyf1caps',
      url: 'https://nuphy.com/collections/keycaps/products/nutype-f1-keycaps?variant=33147055669357',
    },
    {
      brand: 'nuphy',
      cartUrl:
        'https://nuphy.com/collections/keycaps/products/nutype-f1-keycaps?variant=33147055702125',
      model: 'nuphyf1whitecaps',
      series: 'nuphyf1caps',
      url: 'https://nuphy.com/collections/keycaps/products/nutype-f1-keycaps?variant=33147055702125',
    },
    {
      brand: 'nuphy',
      cartUrl:
        'https://nuphy.com/collections/keycaps/products/nutype-f1-aw20-late-summer-night-ver-keycaps?variant=33128193425517',
      model: 'nuphyf1sunnycaps',
      series: 'nuphyf1caps',
      url: 'https://nuphy.com/collections/keycaps/products/nutype-f1-aw20-late-summer-night-ver-keycaps?variant=33128193425517',
    },
    {
      brand: 'nuphy',
      cartUrl:
        'https://nuphy.com/collections/keycaps/products/nutype-f1-aw20-late-summer-night-ver-keycaps?variant=33128193327213',
      model: 'nuphyf1twilightcaps',
      series: 'nuphyf1caps',
      url: 'https://nuphy.com/collections/keycaps/products/nutype-f1-aw20-late-summer-night-ver-keycaps?variant=33128193327213',
    },
    {
      brand: 'nuphy',
      cartUrl:
        'https://nuphy.com/collections/keycaps/products/nutype-f1-aw20-late-summer-night-ver-keycaps?variant=33128193228909',
      model: 'nuphyf1midnightcaps',
      series: 'nuphyf1caps',
      url: 'https://nuphy.com/collections/keycaps/products/nutype-f1-aw20-late-summer-night-ver-keycaps?variant=33128193228909',
    },
  ],
  name: 'nuphy',
};
