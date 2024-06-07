'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';

const CampaignInfo: React.FC = () => {
  return (
    <div className="pr-4">
      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 border-b-[0.5px] pb-1.5">
        <div className="col-span-1">Name</div>
        <div className="col-span-1 flex items-center">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          <span className="flex items-center text-black">
            Ville Rauma
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={12}
              height={12}
              className="ml-1 cursor-pointer"
            />
          </span>
        </div>

        <div className="col-span-1">Job title</div>
        <div className="col-span-1 text-black">Account Executive</div>

        <div className="col-span-1">Company</div>
        <div className="col-span-1 flex items-center text-black">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          <span className="flex items-center">
            GodmodeHQ
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={12}
              height={12}
              className="ml-1 cursor-pointer"
            />
            <ArrowUpRight
              size={12}
              color="#171717"
              className="ml-1 cursor-pointer"
            />
          </span>
        </div>

        <div className="col-span-1">Location</div>
        <div className="col-span-1 flex items-center text-black">
          <MapPin size={12} color="#006ADC" className="mr-1" />
          <div>San Francisco, United States</div>
        </div>

        <div className="col-span-1">Linkedin headline</div>
        <div className="col-span-1 text-black">
          Financial Adviser & Pension Transfer Specialist
        </div>
      </div>
      <div className="flex flex-col pt-1.5">
        <div className="text-xs text-gray-500 mb-1.5">Company Description</div>
        <div className="text-sm text-gray-800 leading-relaxed">
          EC21 has been created in September 2017 as the result of the proactive
          and innovative collaboration between its three founding partners:
          European Capital Partners S.A. (Luxembourg), Colombo Group
          (Switzerland) and Twenty First Capital S.A.S. (France). Our
          Shareholders European Capital Partners (Luxembourg) S.A. European
          Capital Partners is an independent Luxembourg based asset management
          boutique founded in 2010, jointly owned by the Edison Group and Léon
          Kirch. Specialist in European Value Equities, European Capital
          Partners aims at providing its investors with an active, flexible...
        </div>
        <hr className="my-2 border-[#E2E2E2]" />
        <div className="mb-1.5 text-xs text-blue-500 cursor-pointer">Why?</div>
        <div className="text-sm text-gray-800 leading-relaxed">
          EC21 has been created in September 2017 as the result of the proactive
          and innovative collaboration between its three founding partners:
          European Capital Partners S.A. (Luxembourg), Colombo Group
          (Switzerland) and Twenty First Capital S.A.S. (France). Our
          Shareholders European Capital Partners (Luxembourg) S.A. European
          Capital Partners is an independent Luxembourg based asset management
          boutique founded in 2010, jointly owned by the Edison Group and Léon
          Kirch. Specialist in European Value Equities, European Capital
          Partners aims at providing its investors with an active, flexible...
        </div>
      </div>
    </div>
  );
};

export default CampaignInfo;
