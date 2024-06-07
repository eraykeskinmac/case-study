import { Users, Mail, Globe, Building2 } from 'lucide-react';

const searchData = [
  {
    title: 'Search people',
    items: [
      {
        name: 'Bertan Teberci',
        icon: (
          <Users
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'bertan-teb' },
          {
            variant: 'mail',
            text: 'bertan@troylabs.io',
            icon: <Mail size={10} />,
          },
        ],
      },
      {
        name: 'Gaston Che',
        icon: (
          <Users
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'gastonche' },
          {
            variant: 'mail',
            text: 'gaston@troylabs.io',
            icon: <Mail size={10} />,
          },
        ],
      },
      {
        name: 'Vineet Rai',
        icon: (
          <Users
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'vinneet-rai-12e12' },
          {
            variant: 'mail',
            text: 'raina@brblabs.io',
            icon: <Mail size={10} />,
          },
        ],
      },
      {
        name: 'Joseph Vinai',
        icon: (
          <Users
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'jovin-ai' },
          {
            variant: 'mail',
            text: 'blob@tajhotels.com',
            icon: <Mail size={10} />,
          },
        ],
      },
    ],
  },
  {
    title: 'Search companies',
    items: [
      {
        name: 'GodmodeHQ',
        icon: (
          <Building2
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'gmhq' },
          {
            variant: 'company',
            text: 'godmodehq.com',
            icon: <Globe size={10} />,
          },
        ],
      },
      {
        name: 'Sanlo',
        icon: (
          <Building2
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'sanloio' },
          {
            variant: 'company',
            text: 'sanlo.com',
            icon: <Globe size={10} />,
          },
        ],
      },
      {
        name: 'Kaskade Finance',
        icon: (
          <Building2
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'kaskade-finance' },
          {
            variant: 'company',
            text: 'kaskade.finance',
            icon: <Globe size={10} />,
          },
        ],
      },
      {
        name: 'Kombo.dev',
        icon: (
          <Building2
            color="#6F6F6F"
            className="bg-[#F3F3F3] p-1 rounded-full border-[0.5px]"
          />
        ),
        badges: [
          { variant: 'linkedin', text: 'kombo0dev' },
          {
            variant: 'company',
            text: 'kombo.dev',
            icon: <Globe size={10} />,
          },
        ],
      },
    ],
  },
];

export default searchData;
