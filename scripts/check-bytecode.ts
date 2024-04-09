import {
  BigNumber,
  Contract
} from "ethers"
import { ethers } from "hardhat"

const coinName: string = "ExampleERC20"
const coinAddr: string = "0x52C84043CD9c865236f11d9Fc9F56aa003c1f922"
const walletAddress: string = ""

const main = async (): Promise<any> => {
  const bytecode = await ethers.provider.getCode(coinAddr);
  console.log("bytecode for address: ", bytecode);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })