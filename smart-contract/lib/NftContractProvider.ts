// The name below ("Section") should match the name of your Solidity contract.
// It can be updated using the following command:
// yarn rename-contract NEW_CONTRACT_NAME
// Please DO NOT change it manually!
import { Section as ContractType } from '../typechain/index';
import { IERC20 as usdcContractType } from '../typechain/IERC20';

import { ethers } from 'hardhat';
import CollectionConfig from './../config/CollectionConfig';

export  class NftContractProvider {
  public static async getContract(): Promise<ContractType> {
    // Check configuration
    if (null === CollectionConfig.contractAddress) {
      throw '\x1b[31merror\x1b[0m ' + 'Please add the contract address to the configuration before running this command.';
    }

    if (await ethers.provider.getCode(CollectionConfig.contractAddress) === '0x') {
      throw '\x1b[31merror\x1b[0m ' + `Can't find a contract deployed to the target address: ${CollectionConfig.contractAddress}`;
    }
    
    return await ethers.getContractAt(CollectionConfig.contractName, CollectionConfig.contractAddress) as ContractType;
  }
  public static async getusdcContract(): Promise<usdcContractType> {
    // Check configuration
    return await ethers.getContractAt('Section', '0xa1300b62fBe63e4E3D224d999F79a64CbE75E4B9') as usdcContractType;
   
  }
};
export type usdcContract  = usdcContractType;
export type NftContractType = ContractType;
    

    



