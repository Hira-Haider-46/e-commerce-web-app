import { createContext, ReactNode, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

interface ShopContextType {
  products: typeof products;
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {

    const currency = '$';
    const delivery_fee = 10;

    const [search, setSearch] = useState<string>('');
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const value: ShopContextType = { products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch };

    return (
      <ShopContext.Provider value={value}>
        {children}
      </ShopContext.Provider>
    );
}

export default ShopContextProvider;