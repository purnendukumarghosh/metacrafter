/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


console.log("\nWELCOME TO KURUKSHETRA THE LAND WHERE GREATEST WAR MAHABHARAT WAS FOUGHT !!\n");
console.log("THE GREATEST WARRIORS OF ALL TIME: \n");


// create a variable to hold your NFT's
const NFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _age, _weapon, _strength) 
{
    const mahabharataWarrior = 
    {
        "name" : _name,
        "age" : _age,
        "weapon" : _weapon,
        "strength" : _strength
    }
    NFT.push(mahabharataWarrior);
    console.log("Minted: " + _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () 
{
    for(let i=0; i<NFT.length; i++)
    {
        console.log("\nName: " + NFT[i].name);
        console.log("Age: " + NFT[i].age);
        console.log("Weapon: " + NFT[i].weapon);
        console.log("Strength: " + NFT[i].strength);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() 
{
    console.log("\nTotal NFTs: " + NFT.length);
}

// call your functions below this line

mintNFT("Karn","35","Vijaya Dhanush", "Greatest Archer, Danveer, Kavach-Kundal");

mintNFT("Yudhishthir","30","Spear", "Dharma");

mintNFT("Bheem","29","Gada", "Immense Power");

mintNFT("Arjun","28","Gandeev Dhanush", "Brave Archer and Almighty Krishna");

mintNFT("Nakul","27","Sword", "Fastest and speciallised in Medicine");

mintNFT("Sahadev","27","Axes", "Physics, Astrology, Mathematics");

listNFTs();

getTotalSupply();
