import { FC } from "react";
import { LinkProps, NavLink } from "react-router-dom";

export interface IUiNavLinkProps extends LinkProps {}

export const UiNavLink: FC<IUiNavLinkProps> = (props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `flex gap-1 items-center py-2 border-b-2  ${!isActive && "hover:text-neutral-100 border-transparent"}  transition-all
                ${isActive ? "border-purple-600" : ""}`
            }
            {...props}
        />
    );
};