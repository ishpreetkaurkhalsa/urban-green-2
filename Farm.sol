// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Farm is ERC20 {
    uint dec = 1;
    uint counter = 1;

    constructor() ERC20("FARM", "FARM") {
        _mint(msg.sender, 1000000*dec);
    }

    // mapping(address => LeaseAgreement) public leaseAgreements;
    mapping(uint => LeaseAgreement) public landToContract;
    mapping(address => uint256) public stakeLand;

    event LeaseCreated(address, uint256, uint256, uint256, uint256, bool);
    event buyLandEvent(address, uint256);

    struct LeaseAgreement {
        uint256 landID;
        address Owner;
        address[] landOwners; // Address of the landowner
        uint256 duration; // Duration of the lease agreement (in months)
        uint256 startTime; // Start time of the lease agreement
        uint256 endTime; // End time of the lease agreement
        uint256 rentAmount; // Rent amount in wei
        bool isActive; // Flag indicating if the lease is active
        bool forSale;
    }

    //listing the land by the landowner
    function createLease(uint256 _duration, uint256 _rentAmount) external {
        require(_duration > 0, "Duration should be greater than zero");
        require(_rentAmount > 0, "Rent amount should be greater than zero");
        // require(leaseAgreements[msg.sender].isActive == false, "Landowner already has an active lease");
        address[] memory landOwners; // Fixed size array to hold one landowner
        // landOwners[0] = msg.sender;

        uint256 startTime = block.timestamp;
        uint256 endTime = startTime + _duration; //duration in seconds
    
        landToContract[counter] = LeaseAgreement({
            landID: counter,
            Owner: msg.sender,
            landOwners: landOwners,
            duration: _duration,
            startTime: startTime,
            endTime: endTime,
            rentAmount: _rentAmount,
            isActive: true,
            forSale: true
        });
        emit LeaseCreated(msg.sender, _duration, _rentAmount, startTime, endTime, landToContract[counter].forSale);
        counter++;
    }                                                                                                                                                       

    function buyLand(uint256 landID, uint256 sqUnits) public {
        // require(landToContract[landID].rentAmount == sqUnits, "Buy whole land");
        require(landToContract[landID].forSale == true);
        address Owner = landToContract[landID].Owner;
        transfer(Owner, sqUnits);
        // landToContract[landID].forSale = false;
        // landToContract[landID].landOwner = msg.sender;
        stakeLand[msg.sender] = sqUnits;
        emit buyLandEvent(msg.sender, sqUnits);
    }

    function putOnSale(uint256 landID) public {
        // require(landToContract[landID].landOwner == msg.sender);
        landToContract[landID].forSale = true;
    }
    
    function renewLand(uint256 landID, uint256 incPeriod) public {
        landToContract[landID].endTime += incPeriod;
    }
    
    function newSignUp() public {
        _mint(msg.sender, 500*dec);
    }

    // function rentLand(uint256 landID) public {
    //     address[] memory landOwns = landToContract[landID].landOwners;
    //     // uint rA = landToContract[landID].rentAmount;
    //     transfer(landOwns[0], stakeLand[landOwns[0]]);
    //     transfer(landOwns[1], stakeLand[landOwns[1]]);
    // }

}