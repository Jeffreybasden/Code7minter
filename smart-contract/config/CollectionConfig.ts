import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  
  contractName: 'Code7NFTs',
  tokenName: 'Code7NFTs',
  tokenSymbol: 'CD7',
  hiddenMetadataUri:'ipfs://__CID__/hidden.json',
  maxSupply: 777,
  whitelistSale: {
    price: 77,
    maxMintAmountPerTx: 7,
  },
  preSale: {
    price: 50,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 77,
    maxMintAmountPerTx: 10,
  },
  contractAddress:'0xd8c1aF0A1E464a8C30D1a4311096eb6D085e2f8a',
  marketplaceIdentifier: '19263&network=250',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
