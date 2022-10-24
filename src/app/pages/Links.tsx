import { FaBlogger, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const links = [
  {
    index: 0,
    title: 'Find me on Github',
    href: 'https://github.com/rakimsth',
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: 'Find me on LinkedIn',
    href: 'https://www.linkedin.com/in/raktim-shrestha-63a780109',
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: 'Contact me via email',
    href: 'mailto:rakimsth@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    index: 4,
    title: 'Find me on Blog',
    href: 'https://blogs.raktim.com.np',
    icon: <FaBlogger />,
  },
];

export default links;
