// export type Menu = {
//   id: number;
//   title: string;
//   path?: string;
//   sectionId?: string; // Include the sectionId property
//   newTab: boolean;
//   submenu?: Menu[];
// };

// types/menu.ts
export interface SubmenuItem {
  id: number;
  title: string;
  path: string;
  sectionId?: string; 
  newTab: boolean;
}

export type Menu ={
  id: number;
  title: string;
  path?: string;
  sectionId?: string; // Include the sectionId property
  newTab: boolean;
  submenu?: SubmenuItem[];
 
}
