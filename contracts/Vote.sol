// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Vote {
    IERC721 public nftContract;
    ERC20 public rewardToken;

    struct Proposal {
        string description;
        uint256 votingPowerFor;
        uint256 votingPowerAgainst;
        bool executed;
        mapping(uint256 => bool) votedForNFTs;
    }

    mapping(uint256 => uint256) public nftVotingPower;
    Proposal[] public proposals;

    constructor(address _nftContract, address _rewardToken) {
        nftContract = IERC721(_nftContract);
        rewardToken = ERC20(_rewardToken);
    }

    function createProposal(string memory _description) external {
        proposals.push(Proposal({
            description: _description,
            votingPowerFor: 0,
            votingPowerAgainst: 0,
            executed: false
        }));
    }

    function castVote(uint256 proposalId, bool inFavor) external {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Proposal already executed");

        uint256 nftId = nftContract.tokenOfOwnerByIndex(msg.sender, 0);
        require(!proposal.votedForNFTs[nftId], "NFT has already voted");

        uint256 votingPower = nftVotingPower[nftId];
        proposal.votedForNFTs[nftId] = true;

        if (inFavor) {
            proposal.votingPowerFor += votingPower;
        } else {
            proposal.votingPowerAgainst += votingPower;
        }
    }

    function executeProposal(uint256 proposalId) external {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Proposal already executed");

        if (proposal.votingPowerFor > proposal.votingPowerAgainst) {
            proposal.executed = true;
            uint256 rewardAmount = 100 * 10 ** rewardToken.decimals();
            for (uint256 i = 0; i < proposals.length; i++) {
                if (proposals[i].votedForNFTs[i]) {
                    rewardToken.mint(msg.sender, rewardAmount * nftVotingPower[i]);
                }
            }
        }
    }
}