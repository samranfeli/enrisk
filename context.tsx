import React, { useState, useContext, createContext, PropsWithChildren } from "react";

type OverFlowContextType = {
    isScrollable: boolean;
    setScrollable(isScrollable: boolean): void;
}

export const BodyOverflowContext = createContext<OverFlowContextType | null>(null);

const useScrollability = (): OverFlowContextType => {

    const context = useContext(BodyOverflowContext);

    if (!context) {
        throw new Error("Please use Provider in parent component");
    }

    return context;
}

export const BodyOverflowProvider = (props: PropsWithChildren) => {

    const [isScrollable, setScrollable] = useState<boolean>(true);

    return (
        <BodyOverflowContext.Provider value={{ isScrollable, setScrollable }} >
            {props.children}
        </BodyOverflowContext.Provider>
    )
}

export default useScrollability;