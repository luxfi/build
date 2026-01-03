"use client"
import GrantApplicationForm from '@/components/client/infrabuidl-form';
import Image from 'next/image';

const InfraBUIDLAIHeader = () => (
  <>
      <div className="w-full relative mb-8">
        <Image
          src="/infrabuidl-ai.png"
          alt="Lux infraBUILD() Program"
          width={800}
          height={200}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
      <h1 className="text-7xl font-bold mb-4 leading-tight font-mono">Lux<br/>infraBUIDL(AI)<br/>Program</h1>
      <h2 className="text-2xl mb-6 font-semibold text-blue-500 font-mono">Application Form</h2>
      
      <div className="mb-12 space-y-4">
        <p className="text-lg">
          The infraBUIDL(AI) Program is designed to energize the Lux ecosystem by supporting 
          projects that fuse artificial intelligence (AI) with decentralized infrastructure.
        </p>

        <p className="text-gray-400 text-sm">
          Through robust funding and community engagement, the initiative encourages developers 
          to create intelligent tooling, coin-operated agents (COAs), AI-driven launchpads, 
          and other next-generation solutions that enhance usability, foster developer adoption, 
          and help position Lux at the forefront of this emerging frontier in AI.
        </p>
        
        <p className="text-gray-400 text-sm">
          To be considered for support from the program, please fill out the form with all
          relevant details, and the Lux Foundation will reach out to discuss your
          project.
        </p>
        
        <p className="text-gray-400 text-sm">
          For further information on the infraBUILD() Program, including eligibility criteria
          and application requirements, visit the <a href="https://forum.lux.network" className="text-blue-500 underline">Forum</a>.
        </p>
      </div>
  </>
);

export default function Page() {
  return <GrantApplicationForm programType="infraBUIDL(AI)" headerComponent={<InfraBUIDLAIHeader />} />;
}

