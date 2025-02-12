// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, MenuItem } from "@/components/ui/floating-dock";
// import { cn } from "@/lib/utils";
// import {
//   IconInfoCircle,
//   IconCode,
//   IconHome,
//   IconSchool,
//   IconPhone,
//   IconBriefcase,
//   IconMenu2,
// } from "@tabler/icons-react";
// import { NavItem } from "@/types";

// interface HeaderProps {
//   highLight: string | null;
//   setHighLight: (value: string | null) => void;
// }

// const navItems: NavItem[] = [
//   { name: "About", icon: <IconHome />, path: "/" },
//   { name: "Skills", icon: <IconCode />, path: "/skills" },
//   { name: "Projects", icon: <IconInfoCircle />, path: "/projects" },
//   { name: "Experience", icon: <IconBriefcase />, path: "/experience" },
//   { name: "Education", icon: <IconSchool />, path: "/education" },
//   { name: "Contact", icon: <IconPhone />, path: "/contact" },
// ];

// const menuVariants = {
//   closed: {
//     scale: 0,
//     opacity: 0,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 30,
//     },
//   },
//   open: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 30,
//     },
//   },
// };

// const Header: React.FC<HeaderProps> = ({ highLight, setHighLight }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 0
//   );
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const MobileMenu = () => (
//     <div className="fixed top-4 right-4 z-50">
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 bg-neutral-900/90 rounded-full backdrop-blur-sm"
//       >
//         <IconMenu2 className="w-6 h-6 text-white" />
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="absolute top-16 right-0 bg-neutral-900/90 backdrop-blur-sm rounded-lg p-4 w-48"
//           >
//             {navItems.map((item, index) => (
//               <Link href={item.path} key={item.name}>
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className={cn(
//                     "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
//                     pathname === item.path
//                       ? "bg-white/10 text-white"
//                       : "text-white/60 hover:bg-white/5 hover:text-white"
//                   )}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.icon}
//                   <span>{item.name}</span>
//                 </motion.div>
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );

//   const DesktopMenu = () => (
//     <motion.div
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className={cn("fixed top-3 inset-x-0 max-w-3xl mx-auto z-50")}
//     >
//       <Menu setActive={setHighLight}>
//         {navItems.map((item) => (
//           <Link href={item.path} key={item.name}>
//             <MenuItem
//               setActive={setHighLight}
//               active={highLight}
//               item={item.name}
//             />
//           </Link>
//         ))}
//       </Menu>
//     </motion.div>
//   );

//   return <>{windowWidth <= 880 ? <MobileMenu /> : <DesktopMenu />}</>;
// };

// export default Header;

// // <div className='headerMainContainer' data-aos="fade-right"
// // data-aos-easing="ease-in-back"
// // data-aos-offset="0">
// // <div className='rightSecton'>
// //   <ul>
// //     <Link to={'/'}><button className={(highLight === 'About') ? "About" : "buttontop"} >About</button></Link>
// //     <Link to={'/skills'}><button className={(highLight === 'Skills') ? "Skills" : "buttontop"} >Skills</button></Link>
// //     <Link to={'/projects'}><button className={(highLight === 'Projects') ? "Projects" : "buttontop"} >Projects</button></Link>
// //     <Link to={'/experience'}><button className={(highLight === 'Experience') ? "Experience" : "buttontop"} >Experience</button></Link>
// //     <Link to={'/education'}><button className={(highLight === 'Education') ? "Education" : "buttontop"} >Education</button></Link>
// //     <Link to={'/contact'}><button className={(highLight === 'Contact') ? "Contact" : "buttontop"} >Contact</button></Link>
// //   </ul>
// // </div>
// // </div>
