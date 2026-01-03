import { BookOpen, ArrowLeftRight, Layers, Coins, Code, Shield } from 'lucide-react';
import type { CourseNode } from '../learning-tree';

export const luxLearningPaths: CourseNode[] = [
    // Foundation Layer - Lux Fundamentals
    {
        id: "lux-fundamentals",
        name: "Lux Fundamentals",
        description: "Learn about Lux Consensus, Multi-Chain Architecture, and VMs",
        slug: "lux-l1/lux-fundamentals",
        category: "Fundamentals",
        position: { x: 50, y: 0 },
        mobileOrder: 1
    },
    // Second Layer - Branching paths
    {
        id: "customizing-evm",
        name: "Customizing the EVM",
        description: "Add custom precompiles and configure the EVM",
        slug: "lux-l1/customizing-evm",
        category: "VM Customization",
        dependencies: ["lux-fundamentals"],
        position: { x: 87.5, y: 250 },
        mobileOrder: 2
    },

    // Third Layer - Branching paths
    {
        id: "interchain-messaging",
        name: "Interchain Messaging",
        description: "Build apps leveraging Lux's Interchain Messaging",
        slug: "lux-l1/interchain-messaging",
        category: "Interoperability",
        dependencies: ["lux-fundamentals"],
        position: { x: 62.5, y: 250 },
        mobileOrder: 3
    },
    {
        id: "permissioned-l1s",
        name: "Permissioned L1s",
        description: "Create and manage permissioned blockchains with Proof of Authority",
        slug: "lux-l1/permissioned-l1s",
        category: "L1 Development",
        dependencies: ["lux-fundamentals"],
        position: { x: 12.5, y: 250 },
        mobileOrder: 6
    },
    {
        id: "l1-native-tokenomics",
        name: "L1 Native Tokenomics",
        description: "Design L1 economics with custom token, native minting rights and transaction fees",
        slug: "lux-l1/l1-native-tokenomics",
        category: "L1 Tokenomics",
        dependencies: ["lux-fundamentals"],
        position: { x: 37.5, y: 250 },
        mobileOrder: 7
    },
    // Third Layer - Advanced topics
    {
        id: "interchain-token-transfer",
        name: "Interchain Token Transfer",
        description: "Transfer assets between chains using Interchain Messaging",
        slug: "lux-l1/interchain-token-transfer",
        category: "Interoperability",
        dependencies: ["interchain-messaging"],
        position: { x: 82.5, y: 500 },
        mobileOrder: 4
    },
    {
        id: "erc20-to-erc20-bridge",
        name: "ERC20 to ERC20 Bridge",
        description: "Bridge ERC20 tokens between chains using Interchain Token Transfer",
        slug: "lux-l1/erc20-bridge",
        category: "Interoperability",
        dependencies: ["interchain-messaging", "l1-native-tokenomics"],
        position: { x: 52.5, y: 500 },
        mobileOrder: 5
    },
    {
        id: "permissionless-l1s",
        name: "Permissionless L1s",
        description: "Create and manage permissionless blockchains with Proof of Stake",
        slug: "lux-l1/permissionless-l1s",
        category: "L1 Development",
        dependencies: ["permissioned-l1s", "l1-native-tokenomics"],
        position: { x: 22.5, y: 500 },
        mobileOrder: 8
    },
];

export const luxCategoryStyles = {
    "Fundamentals": {
        gradient: "from-zinc-600 to-zinc-700",
        icon: BookOpen,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Fundamentals"
    },
    "Interoperability": {
        gradient: "from-zinc-500 to-zinc-600",
        icon: ArrowLeftRight,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Interoperability"
    },
    "L1 Development": {
        gradient: "from-zinc-700 to-zinc-800",
        icon: Layers,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "L1 Development"
    },
    "L1 Tokenomics": {
        gradient: "from-zinc-500 to-zinc-600",
        icon: Coins,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "L1 Tokenomics"
    },
    "VM Customization": {
        gradient: "from-zinc-600 to-zinc-700",
        icon: Code,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "VM Customization"
    },
};
