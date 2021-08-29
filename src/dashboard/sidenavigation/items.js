import { Link, useLocation } from 'react-router-dom';

import data from './data';
import { useToggle } from '../provider/context';
// used to apply styles to link building below without repeating them. Can also define these inside index.css using tailwind @apply
const style = {
  title: `mx-4 text-sm`,
  active: `globalmainbg-color rounded-full`,
  link: `flex items-center justify-start my-1 p-3 w-full hover:text-white`,
  close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
  open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
};

export default function SidenavItems() {
  const { pathname } = useLocation();
  const { open } = useToggle();
  return (
    <ul className="md:pl-3">
      <li>
        {/* uses map to iterate through data array to build each sidebar nav link */}
        {data.map((item) => (
          <Link to={item.link} key={item.title}>
            <span className={style.link}>
              <div
                className={`p-2 ${item.link === pathname ? style.active : ''}`}
              >
                <span>{item.icon}</span>
              </div>
              <span
                className={`${style.title} ${open ? style.open : style.close}`}
              >
                {item.title}
              </span>
            </span>
          </Link>
        ))}
      </li>
    </ul>
  );
}
