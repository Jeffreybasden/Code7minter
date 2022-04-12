import MarketplaceConfigInterface from './MarketplaceConfigInterface';

export const openSea: MarketplaceConfigInterface = {
  name: 'TofuNFt',
  generateCollectionUrl: (marketplaceIdentifier: string, isMainnet: boolean) => 'https://' + (isMainnet ? 'www' : 'testnets') + '.tofunft.com/discover/items?contracts=' + marketplaceIdentifier,
}
