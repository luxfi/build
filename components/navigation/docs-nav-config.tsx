import {
  Network,
  Layers,
  Cable,
  Server,
  Database,
  Activity,
  Webhook,
  Code,
  CircleDollarSign,
  Package,
  Terminal,
  Milestone,
  Book,
  Eye,
  Bot
} from 'lucide-react';

export const documentationOptions = [
  {
    title: 'Primary Network',
    description: 'LUExchange-Chain, Platform-Chain, and Exchange-Chain',
    icon: <Network className="w-5 h-5" />,
    url: '/docs/primary-network',
  },
  {
    title: 'Layer 1s',
    description: 'Build your own Lux blockchain',
    icon: <Layers className="w-5 h-5" />,
    url: '/docs/lux-l1s',
  },
  {
    title: 'Interchain Messaging',
    description: 'Interchain messaging protocol',
    icon: <Cable className="w-5 h-5" />,
    url: '/docs/cross-chain',
  },
];

export const nodesOptions = [
  {
    title: 'LuxGo Node',
    description: 'Run nodes and validators',
    icon: <Server className="w-5 h-5" />,
    url: '/docs/nodes',
  },
  {
    title: 'LUExchange-Chain RPC',
    description: 'Contract Chain RPC reference',
    icon: <Code className="w-5 h-5" />,
    url: '/docs/rpcs/c-chain',
  },
  {
    title: 'Platform-Chain RPC',
    description: 'Platform Chain RPC reference',
    icon: <Server className="w-5 h-5" />,
    url: '/docs/rpcs/p-chain',
  },
  {
    title: 'Exchange-Chain RPC',
    description: 'Exchange Chain RPC reference',
    icon: <CircleDollarSign className="w-5 h-5" />,
    url: '/docs/rpcs/x-chain',
  },
  {
    title: 'Subnet-EVM RPC',
    description: 'Subnet-EVM RPC reference',
    icon: <Network className="w-5 h-5" />,
    url: '/docs/rpcs/subnet-evm',
  },
  {
    title: 'Other RPCs',
    description: 'Additional RPC references',
    icon: <Webhook className="w-5 h-5" />,
    url: '/docs/rpcs/other',
  },
];

export const apiReferenceOptions = [
  {
    title: 'Data API',
    description: 'Access blockchain data',
    icon: <Database className="w-5 h-5" />,
    url: '/docs/api-reference/data-api',
  },
  {
    title: 'Metrics API',
    description: 'Network metrics and statistics',
    icon: <Activity className="w-5 h-5" />,
    url: '/docs/api-reference/metrics-api',
  },
  {
    title: 'Webhook API',
    description: 'Real-time blockchain notifications',
    icon: <Webhook className="w-5 h-5" />,
    url: '/docs/api-reference/webhook-api',
  },
];

export const toolingOptions = [
  {
    title: 'Lux-SDK',
    description: 'Software development kit for Lux',
    icon: <Package className="w-5 h-5" />,
    url: '/docs/tooling/lux-sdk',
  },
  {
    title: 'Lux-CLI',
    description: 'Command-line interface for Lux',
    icon: <Terminal className="w-5 h-5" />,
    url: '/docs/tooling/lux-cli',
  },
  {
    title: 'tmpnet',
    description: 'Temporary networks for local testing',
    icon: <Network className="w-5 h-5" />,
    url: '/docs/tooling/tmpnet',
  },
  {
    title: "Postman Collection",
    description: 'Postman collection for Lux APIs',
    icon: <Milestone className="w-5 h-5" />,
    url: '/docs/tooling/lux-postman',
  },
  {
    title: 'AI & LLM',
    description: 'Integrate docs with AI apps and LLMs',
    icon: <Bot className="w-5 h-5" />,
    url: '/docs/tooling/ai-llm',
  },
];


export const lpsOptions = [
  {
    title: 'Streaming Asynchronous Execution',
    description: 'LP-194',
    icon: <Book className="w-5 h-5" />,
    url: '/docs/lps/194-streaming-asynchronous-execution',
  },
  {
    title: 'Continuous Staking',
    description: 'LP-236',
    icon: <Book className="w-5 h-5" />,
    url: '/docs/lps/236-continuous-staking',
  },
  {
    title: 'ValidatorManager Contract',
    description: 'LP-99',
    icon: <Book className="w-5 h-5" />,
    url: '/docs/lps/99-validatorsetmanager-contract',
  },
  {
    title: "View All LPs",
    description: 'View all Lux Community Proposals',
    icon: <Eye className="w-5 h-5" />,
    url: '/docs/lps',
  }
];