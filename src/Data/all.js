import img from "../assets/lexchange.png";
import imgi from "../assets/smartFlip.png";

import imgii from "../assets/cryptdex.png";
import imgiii from "../assets/cryptbridge.png";

const alldata = () => {
 let data = {alldatas:[
    {
      key: 1,
      name: "Lexchange",
      logo: img,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Express", "Golang", "Postgress", "MongoDb"],
    },
    {
      key: 2,
      name: "SmartFlip",
      logo: imgi,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Express", "Solidity", "MongoDb"],
    },
    {
      key: 2,
      name: "CryptDex",
      logo: imgii,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Solidity"],
    },
    {
      key: 2,
      name: "CryptBridge",
      logo: imgiii,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Solidity", "Express", "MongoDb"],
    },
  ],

  bridgedata: [
    {
      key: 2,
      name: "CryptBridge",
      logo: imgiii,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Solidity", "Express", "MongoDb"],
    },
  ],

  defidata : [
    {
      key: 2,
      name: "CryptDex",
      logo: imgii,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Solidity"],
    },
  ],

  exchangedata : [
    {
      key: 1,
      name: "Lexchange",
      logo: img,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Express", "Golang", "Postgress", "MongoDb"],
    },
  ]
  ,marketplacedata : [],
  playtoearndata : [
    {
      key: 2,
      name: "SmartFlip",
      logo: imgi,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      stack: ["React", "Express", "Solidity", "MongoDb"],
    },
  ]
}

  return data
  
};

export default alldata;
