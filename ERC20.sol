// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract TokenHALLO is ERC20, Ownable{

   constructor(uint256 value) ERC20("HALLO", "HAL"){
       _mint(msg.sender, value*10**18);
   }

   function mintFromContract(address _to, uint _amount) public onlyOwner {
       _mint(_to, _amount*10**18);
   }


}
