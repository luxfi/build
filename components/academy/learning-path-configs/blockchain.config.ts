import { BookOpen, Code, Shield } from 'lucide-react';
import type { CourseNode } from '../learning-tree';

export const blockchainLearningPaths: CourseNode[] = [
    // Foundation Layer
    {
        id: "blockchain-fundamentals",
        name: "Blockchain Fundamentals",
        description: "Start here to learn about blockchain and solidity basics",
        slug: "blockchain/blockchain-fundamentals",
        category: "Fundamentals",
        position: { x: 50, y: 0 },
        mobileOrder: 1
    },
    // Second Layer - Intro to Solidity
    {
        id: "intro-to-solidity",
        name: "Intro to Solidity",
        description: "Start here to learn about Solidity basics with Foundry",
        slug: "blockchain/solidity-foundry",
        category: "Development",
        dependencies: ["blockchain-fundamentals"],
        position: { x: 50, y: 250 },
        mobileOrder: 2
    },
    // Third Layer - NFT Deployment and Encrypted ERC
    {
        id: "nft-deployment",
        name: "NFT Deployment",
        description: "Learn how to create and deploy your own NFT collection",
        slug: "blockchain/nft-deployment",
        category: "Development",
        dependencies: ["intro-to-solidity"],
        position: { x: 20, y: 500 },
        mobileOrder: 3
    },
    {
        id: "x402-payment-infrastructure",
        name: "x402 Payments",
        description: "Instant & permissionless HTTP-native payments on Lux",
        slug: "blockchain/x402-payment-infrastructure",
        category: "Development",
        dependencies: ["intro-to-solidity"],
        position: { x: 50, y: 500 },
        mobileOrder: 4
    },
    {
        id: "encrypted-erc",
        name: "Encrypted ERC",
        description: "Learn about eERC tokens to add privacy to your applications",
        slug: "blockchain/encrypted-erc",
        category: "Privacy",
        dependencies: ["intro-to-solidity"],
        position: { x: 80, y: 500 },
        mobileOrder: 4
    },
];

export const blockchainCategoryStyles = {
    "Fundamentals": {
        gradient: "from-zinc-600 to-zinc-700",
        icon: BookOpen,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Fundamentals"
    },
    "Development": {
        gradient: "from-zinc-500 to-zinc-600",
        icon: Code,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Development"
    },
    "Privacy": {
        gradient: "from-zinc-700 to-zinc-800",
        icon: Shield,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Privacy"
    },
};

