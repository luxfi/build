import { ArrowLeftRight, Coins, MailIcon, SquareCode, SquareIcon, SquareStackIcon, TerminalIcon, Triangle, HexagonIcon, UserPen } from 'lucide-react';

export type Course = {
    name: string;
    description: string;
    slug: string;
    icon: any;
    status: "featured" | "normal" | "hidden";
    duration?: string;
    languages: string[];
    tools: string[];
    instructors: string[];
    category: "Fundamentals" | "Smart Contract Development" | "L1 Development" | "Interoperability" | "Entrepreneur";
    certificateTemplate?: string;
};

const officialCourses: Course[] = [
    {
        name: "Blockchain Fundamentals",
        description: "Gain a comprehensive understanding of fundamental blockchain concepts, including how they work, and key components",
        slug: "blockchain-fundamentals",
        icon: <SquareIcon />,
        status: "normal",
        duration: "1 hour",
        languages: [],
        tools: [],
        instructors: ["Martin Eckardt", "Ash", "Katherine Sullivan"],
        category: "Fundamentals",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Intro to Solidity",
        description: "Start here to learn about Solidity basics with Foundry",
        slug: "solidity-foundry",
        icon: <SquareIcon />,
        status: "normal",
        duration: "1 hour",
        languages: [],
        tools: [],
        instructors: ["Andrea Vargas", "Katherine Sullivan"],
        category: "Fundamentals",
    },
    {
        name: "Lux Fundamentals",
        description: "Get a high level overview of Lux Consensus, L1s and VMs",
        slug: "lux-fundamentals",
        icon: <Triangle />,
        status: "featured",
        duration: "1 hour",
        languages: [],
        tools: ["L1 Toolbox"],
        instructors: ["Martin Eckardt", "Ash", "Nicolas Arnedo"],
        category: "Fundamentals",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "x402 Payment Infrastructure",
        description: "Learn about the x402 protocol for instant, permissionless HTTP-native payments on Lux",
        slug: "x402-payment-infrastructure",
        icon: <Coins />,
        status: "featured",
        duration: "2 hours",
        languages: ["JavaScript", "Typescript"],
        tools: ["Thirdweb x402", "PayAI", "Ultravioleta DAO", "x402-rs"],
        instructors: ["Federico Nardelli"],
        category: "Fundamentals",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Interchain Messaging",
        description: "Utilize Lux Interchain Messaging to build cross-chain dApps in the Lux network",
        slug: "interchain-messaging",
        icon: <MailIcon />,
        status: "featured",
        duration: "3 hours",
        tools: ["L1 Toolbox", "Docker"],
        languages: ["Solidity"],
        instructors: ["Martin Eckardt", "Andrea Vargas", "Ash", "Nicolas Arnedo"], // + Usman
        category: "Interoperability",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "ERC-20 to ERC-20 Bridge",
        description: "Learn how to bridge ERC-20 tokens between Lux L1s using Interchain Token Transfer",
        slug: "erc20-bridge",
        icon: <ArrowLeftRight />,
        status: "featured",
        duration: "2 hours",
        tools: ["ICM", "Foundry"],
        languages: ["Solidity"],
        instructors: ["Martin Eckardt", "Andrea Vargas", "Ash", "Owen Wahlgren", "Sarp"],
        category: "Interoperability",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Interchain Token Transfer",
        description: "Deploy Lux Interchain Token Transfer to transfer assets between Lux blockchains",
        slug: "interchain-token-transfer",
        icon: <ArrowLeftRight />,
        status: "normal",
        duration: "2.5 hours",
        tools: ["ICM", "Foundry"],
        languages: ["Solidity"],
        instructors: ["Martin Eckardt", "Andrea Vargas", "Ash", "Owen Wahlgren", "Sarp"],
        category: "Interoperability",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Customizing the EVM",
        description: "Learn how to customize the EVM and add your own custom precompiles",
        slug: "customizing-evm",
        icon: <SquareCode />,
        duration: "4 hours",
        status: "featured",
        tools: ["Lux CLI"],
        languages: ["Go"],
        instructors: ["Martin Eckardt", "Ash"],
        category: "L1 Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "L1 Native Tokenomics",
        description: "Learn how to design and deploy tokenomics for your Lux L1",
        slug: "l1-native-tokenomics",
        icon: <Coins />,
        duration: "2 hours",
        status: "featured",
        tools: ["Lux CLI", "ICM"],
        languages: ["Solidity"],
        instructors: ["Martin Eckardt", "Owen Wahlgren", "Sarp", "Nicolas Arnedo"],
        category: "L1 Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Permissioned L1s",
        description: "Learn how to create and manage permissioned blockchains with Proof of Authority on Lux",
        slug: "permissioned-l1s",
        icon: <SquareStackIcon />,
        duration: "2 hours",
        status: "featured",
        tools: ["Validator Manager", "Platform-Chain", "ICM"],
        languages: ["Solidity"],
        instructors: ["Martin Eckardt", "Owen Wahlgren", "Nicolas Arnedo"],
        category: "L1 Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Permissionless L1s",
        description: "Learn how to transition from permissioned blockchains with PoA to permissionless blockchains with PoS",
        slug: "permissionless-l1s",
        icon: <SquareStackIcon />,
        duration: "2 hours",
        status: "featured",
        tools: ["Validator Manager", "Platform-Chain", "ICM"],
        languages: ["Solidity"],
        instructors: ["Martin Eckardt", "Owen Wahlgren", "Nicolas Arnedo"],
        category: "L1 Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "AvaCloud APIs",
        description: "Learn how to leverage AvaCloud APIs to build web apps on Lux",
        slug: "avacloudapis",
        icon: <SquareCode />,
        duration: "1 hour",
        status: "featured",
        tools: ["AvaCloudSDK", "AvaCloud API"],
        languages: ["Typescript"],
        instructors: ["Owen Wahlgren"],
        category: "Smart Contract Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Solidity Programming with Foundry",
        description: "Learn the basics on how to code in Solidity with Foundry",
        slug: "solidity-foundry",
        icon: <SquareCode />,
        duration: "1 hour",
        status: "featured",
        tools: ["Starter-Kit", "Foundry"],
        languages: ["Solidity"],
        instructors: ["Andrea Vargas"],
        category: "Smart Contract Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "HyperSDK",
        description: "Learn how to build a high-performance blockchain using HyperSDK",
        slug: "hypersdk",
        icon: <TerminalIcon />,
        duration: "1 hour",
        status: "hidden",
        tools: ["HyperSDK"],
        languages: ["Go", "Typescript"],
        instructors: ["Aaron Buchwald", "Ilya", "Rodrigo Villar", "Martin Eckardt", "Owen Wahlgren"],
        category: "L1 Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Chainlink on your L1 via ICM",
        description: "Utilize Interchain Messaging to make Chainlink services available on any blockchain in the Lux Network",
        slug: "icm-chainlink",
        icon: <HexagonIcon />,
        status: "featured",
        duration: "2.5 hours",
        tools: ["ICM", "Chainlink VRF"],
        languages: ["Solidity"],
        instructors: ["Martin Eckardt", "Andrea Vargas", "Ash"],
        category: "Interoperability",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    {
        name: "Foundations of a Web3 Venture",
        description: "Secure, compliant and customer-driven growth made simple.",
        slug: "foundations-web3-venture",
        icon: <SquareStackIcon />,
        status: "featured",
        duration: "1 hour",
        languages: [],
        tools: ["Entrepreneur"],
        instructors: ["Michael Martin", "Doro Unger-Lee", "Nicolas Arnedo"],
        category: "Entrepreneur",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/lux-build/course-certificates/FillableLux_EntrepreneurAcademy_Certificate_FW3V_R1.pdf"
    },
    {
        name: "Go-to-Market Strategist",
        description: "Generate quality leads, craft winning sales messages, and design pricing strategies that drive growth.",
        slug: "go-to-market",
        icon: <SquareStackIcon />,
        status: "featured",
        duration: "1 hour",
        languages: [],
        tools: ["Entrepreneur"],
        instructors: ["Michael Martin", "Doro Unger-Lee", "Nicolas Arnedo"],
        category: "Entrepreneur",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/lux-build/course-certificates/FillableLux_EntrepreneurAcademy_Certificate_W3GTM_R1.pdf"
    },
    {
        name: "Web3 Community Architect",
        description: "Build engaged communities, amplify growth through media and events, and design impactful token economies.",
        slug: "web3-community-architect",
        icon: <SquareStackIcon />,
        status: "featured",
        duration: "1 hour",
        languages: [],
        tools: ["Entrepreneur"],
        instructors: ["Michael Martin", "Doro Unger-Lee", "Nicolas Arnedo"],
        category: "Entrepreneur",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/lux-build/course-certificates/FillableLux_EntrepreneurAcademy_Certificate_W3CA_R1.pdf"
    },
    {
        name: "Fundraising & Finance Pro",
        description: "Master VC communication, secure funding through grants, and craft winning pitches.",
        slug: "fundraising-finance",
        icon: <SquareStackIcon />,
        status: "featured",
        duration: "1 hour",
        languages: [],
        tools: ["Entrepreneur"],
        instructors: ["Michael Martin", "Doro Unger-Lee", "Nicolas Arnedo"],
        category: "Entrepreneur",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/lux-build/course-certificates/FillableLux_EntrepreneurAcademy_Certificate_W3FFP_R1.pdf"
    },
    {
        name: "Encrypted ERC",
        description: "Learn the basics on what is an encrypted ERC token and how to use it",
        slug: "encrypted-erc",
        icon: <SquareCode />,
        duration: "3 hour",
        status: "featured",
        tools: [],
        languages: ["Solidity"],
        instructors: ["Alejandro Soto"],
        category: "Smart Contract Development",
        certificateTemplate: "https://qizat5l3bwvomkny.public.blob.vercel-storage.com/LuxAcademy_Certificate.pdf"
    },
    /*{
        name:"Chainlink VRF with Interchain Messaging ",
        description:"Utilize Interchain Messaging to make Chainlink VRF available on any blockchain in the Lux Network",
        slug:"teleporter-chainlink-vrf",
        icon: Dice3Icon,
        status: "featured",
        duration: "2.5 hours",
        tools: ["Teleporter", "Chainlink VRF"],
        languages: ["Solidity"]
     },
     {
        name:"HyperSDK",
        description:"Learn to build customized Virtual Machines using our SDK",
        slug:"hypersdk",
        icon: Blocks,
        duration: "4 hours",
        tools: ["Lux-CLI"],
        languages: ["Go"]
     },*/
];

const ecosystemCourses: Course[] = [
    /*{
        name:"Run a Gogopool Minipool",
        description:"A Minipool represents a validator that is jointly funded equally by LUX borrowed from liquid stakers and LUX contribution from the minipool operator. Thanks to Minipool design architecture, users can become validators on the Lux network with nearly half the usual LUX requirement.",
        slug:"gogopool-minipool",
        icon: Blocks,
        duration: "2 hours",
        tools: ["Lux-CLI"],
        languages: ["Go"]
   },
   {
        name:"Use Safe on an Lux Chain",
        description:"Secure your multi-sig wallet with Safe on a Lux L1.",
        slug:"safe-on-an-lux-chain",
        icon: Blocks,
        duration: "4 hours",
        tools: ["Lux-CLI"],
        languages: ["Go"]
   }*/
];

const entrepreneurCourses = officialCourses.filter((course) => course.category === "Entrepreneur");

// Helper function to create course configuration mappings
export const getCourseConfig = () => {
    const config: Record<string, { name: string; template: string }> = {};
    
    officialCourses.forEach(course => {
        if (course.certificateTemplate) {
            config[course.slug] = {
                name: course.name,
                template: course.certificateTemplate
            };
        }
    });
    
    return config;
};

// Helper function to create course name mappings for HubSpot
export const getCourseNameMapping = () => {
    const mapping: Record<string, string> = {};
    
    entrepreneurCourses.forEach(course => {
        if (course.certificateTemplate) {
            mapping[course.slug] = course.name;
        }
    });
    
    return mapping;
};

export default {
    official: officialCourses.filter((course) => ["normal", "featured"].includes(course.status) && course.category !== "Entrepreneur"),
    official_featured: officialCourses.filter((course) => course.status === "featured" && course.category !== "Entrepreneur"),
    luxEntrepreneur: entrepreneurCourses,
    ecosystem: ecosystemCourses,
};


