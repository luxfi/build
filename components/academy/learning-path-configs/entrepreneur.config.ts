import { BookOpen, Users, Lightbulb, Coins } from 'lucide-react';
import type { CourseNode } from '../learning-tree';

export const entrepreneurLearningPaths: CourseNode[] = [
    // Foundation Layer
    {
        id: "lux-foundation",
        name: "Level 1: Foundations of a Web3 Venture",
        description: "Establishing essential blockchain and business fundamentals.",
        slug: "entrepreneur/foundations-web3-venture",
        category: "Fundamentals",
        position: { x: 50, y: 0 },
        mobileOrder: 1
    },

    // Second Layer  
    {
        id: "lux-gtm",
        name: "Level 2: Go-To-Market Strategist",
        description: "Master go-to-market strategies for Web3 products and services.",
        slug: "entrepreneur/go-to-market",
        category: "Business Strategy",
        dependencies: ["lux-foundation"],
        position: { x: 30, y: 250 },
        mobileOrder: 2
    },
    {
        id: "lux-web3-community-architect",
        name: "Level 3: Web3 Community Architect",
        description: "Learn to build and manage thriving Web3 communities.",
        slug: "entrepreneur/web3-community-architect",
        category: "Community",
        dependencies: ["lux-foundation"],
        position: { x: 70, y: 250 },
        mobileOrder: 3
    },

    // Third Layer
    {
        id: "lux-fundraising",
        name: "Level 4: Fundraising & Finance Pro",
        description: "Master fundraising strategies and financial management in Web3.",
        slug: "entrepreneur/fundraising-finance",
        category: "Finance",
        dependencies: ["lux-web3-community-architect", "lux-gtm"],
        position: { x: 50, y: 500 },
        mobileOrder: 4
    }
];

export const entrepreneurCategoryStyles = {
    "Fundamentals": {
        gradient: "from-zinc-600 to-zinc-700",
        icon: BookOpen,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Fundamentals"
    },
    "Community": {
        gradient: "from-zinc-500 to-zinc-600",
        icon: Users,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Community"
    },
    "Business Strategy": {
        gradient: "from-zinc-700 to-zinc-800",
        icon: Lightbulb,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Business Strategy"
    },
    "Finance": {
        gradient: "from-zinc-500 to-zinc-600",
        icon: Coins,
        lightBg: "bg-zinc-50",
        darkBg: "dark:bg-zinc-900",
        label: "Finance"
    }
};
