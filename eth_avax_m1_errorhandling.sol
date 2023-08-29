// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract ErrorHandling
{
    function divide(uint _numerator, uint _denominator) public pure returns (uint)
    {
        require(_denominator != 0, "Division by Zero not possible");
        return _numerator/_denominator ;
    }

    function EnterRollNumber(uint _roll) public pure returns (uint)
    {
        if (_roll == 0)
        {
            revert("Value of roll number cannot be 0");
        }

        return _roll;

    }

    uint256[10] private  myArray = [34,5,4,65,23,54,6745,35,45,31];

    function getElement(uint256 index) public view returns (uint256) 
    {
        assert(index < myArray.length);
        return myArray[index];
    }
}
