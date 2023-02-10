import Bundlr from "@bundlr-network/client";
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();

async function main() {
    const bundlr = new Bundlr.default(
        "https://devnet.bundlr.network", 
        "matic", 
        process.env.PRIVATE_KEY,
        {
            providerUrl: "https://matic-mumbai.chainstacklabs.com"
        }
    );    

    console.log(`Connected to node, wallet address ${bundlr.address}`);
    
    //    const fundTx = await bundlr.fund(1e18);
    //    console.log(`Fund successful, amount funded=${fundTx.quantity}`);

    //  const pathToFile = "./images/MongoPNG0.png";
    //  const uploadTx = await bundlr.uploadFile(pathToFile);
    //  console.log(`File uploaded URL= https://arweave.net/${uploadTx.id}`);

        const pathToFolder= "./images/";
        const uploadTx = await bundlr.uploadFolder(pathToFolder);
        console.log(`Folder uploaded manifest id=${uploadTx.id}`);

}

main();
