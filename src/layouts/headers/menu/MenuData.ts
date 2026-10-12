interface DataType {
  id: number;
  title: string;
  link: string;
  section_id?: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    demo_img?: any;
    mobile_menu?: boolean;
  }[];
}
// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/#tp-hero",
    section_id: "tp-hero",
  },
  {
    id: 2,
    title: "About Me",
    link: "/#tp-about",
    section_id: "tp-about",
  },
  {
    id: 3,
    title: "Services",
    link: "/#tp-sv",
    section_id: "tp-sv",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/#tp-portfolio",
    section_id: "tp-portfolio",
  },
];
export default menu_data;
