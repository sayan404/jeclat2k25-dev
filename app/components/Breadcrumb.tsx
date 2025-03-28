import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path);

  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="text-gray-400 hover:text-white">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {paths.map((path, index) => (
          <li 
            key={path}
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <span className="text-gray-400 mx-2">/</span>
            <Link 
              href={`/${paths.slice(0, index + 1).join('/')}`}
              className={`${
                index === paths.length - 1 
                  ? 'text-cyan-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span itemProp="name">
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </span>
            </Link>
            <meta itemProp="position" content={`${index + 2}`} />
          </li>
        ))}
      </ol>
    </nav>
  );
} 