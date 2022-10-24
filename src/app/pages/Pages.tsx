import { FaTrophy, FaUniversity } from 'react-icons/fa';
import { RiUserStarLine } from 'react-icons/ri';
import { TbBulb, TbCertificate } from 'react-icons/tb';
import { GiBinoculars, GiSkills } from 'react-icons/gi';

const pages = [
  {
    index: 0,
    name: 'overview.md',
    route: '/overview',
    icon: <GiBinoculars color="#D07000" />,
  },
  {
    index: 1,
    name: 'skills.md',
    route: '/skills',
    icon: <GiSkills color="#7E8A97" />,
  },
  {
    index: 2,
    name: 'experience.md',
    route: '/experience',
    icon: <RiUserStarLine color="#E0144C" />,
  },
  {
    index: 3,
    name: 'education.md',
    route: '/education',
    icon: <FaUniversity color="#8758FF" />,
  },
  {
    index: 4,
    name: 'projects.md',
    route: '/projects',
    icon: <TbBulb color="#F0A500" />,
  },
  {
    index: 5,
    name: 'certificates.md',
    route: '/certificates',
    icon: <TbCertificate />,
  },
  {
    index: 6,
    name: 'accomplishments.md',
    route: '/accomplishments',
    icon: <FaTrophy color="#FFE300" />,
  },
];
export default pages;
