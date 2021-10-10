import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextUse = () => {
    return useContext(SidebarContext);
}
export default function SidebarContextProvider({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleClose = () => setShowSidebar(false);

    const handleShow = () => setShowSidebar(true);
    
    return(
        <SidebarContext.Provider value={{
            showSidebar,
            handleClose,
            handleShow
        }}>
            {children}
        </SidebarContext.Provider>
    )

}