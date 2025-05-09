import { createContext, ReactNode } from "react";
import { products } from "../assets/frontend_assets/assets";

interface ShopContextType {
  products: typeof products;
  currency: string;
  delivery_fee: number;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {

    const currency = '$';
    const delivery_fee = 10;

    const value: ShopContextType = { products, currency, delivery_fee };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;