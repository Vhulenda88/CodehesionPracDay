export interface Menu {
   data: MenuItems[];
   succeeded: boolean;
   error: string;
}

export interface MenuItems{
    id: number;
    name: string;
}
