// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IERC20 {
   function transfer(address to, uint256 amount) external;
}


contract AirDrop {


   function airdrop(IERC20 _contractAddress, address[] memory _airAddress, uint256[] memory _amount) public {
       for (uint8 i=0; i<_airAddress.length; i++) {
           _contractAddress.transfer(_airAddress[i], _amount[i]*10**18);
       }
   }
}
