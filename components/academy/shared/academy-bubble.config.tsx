"use client";

import BubbleNavigation from '@/components/navigation/BubbleNavigation';
import type { BubbleNavigationConfig } from '@/components/navigation/bubble-navigation.types';
import type { AcademyPathType } from './academy-types';

export const academyBubbleConfig: BubbleNavigationConfig = {
    items: [
        { id: "lux", label: "Lux L1", href: "/academy/lux-l1" },
        { id: "blockchain", label: "Blockchain", href: "/academy/blockchain" },
        { id: "entrepreneur", label: "Entrepreneur", href: "/academy/entrepreneur" },
    ],
    activeColor: "bg-zinc-800",
    darkActiveColor: "dark:bg-white",
    focusRingColor: "focus:ring-zinc-500",
    pulseColor: "bg-zinc-200/40",
    darkPulseColor: "dark:bg-zinc-400/40",
    buttonPadding: "px-4 py-2",
    buttonSpacing: "space-x-3",
};

interface AcademyBubbleNavProps {
    activePath?: AcademyPathType;
    onChange?: (path: AcademyPathType) => void;
}

export function AcademyBubbleNav(props: AcademyBubbleNavProps = {}) {
    const { activePath, onChange } = props;

    if (!activePath || !onChange) {
    const getActiveItem = (pathname: string, items: typeof academyBubbleConfig.items) => {
        if (pathname === "/academy/entrepreneur" || pathname.startsWith("/academy/entrepreneur/")) {
            return "entrepreneur";
        } else if (pathname === "/academy/blockchain" || pathname.startsWith("/academy/blockchain/")) {
            return "blockchain";
        } else if (
            pathname === "/academy" ||
            pathname === "/academy/lux-l1" ||
            pathname.startsWith("/academy/lux-l1/") ||
            (pathname.startsWith("/academy/") &&
                !pathname.startsWith("/academy/blockchain") &&
                !pathname.startsWith("/academy/entrepreneur"))
        ) {
            return "lux";
        }
        return "lux";
    };

    return <BubbleNavigation config={academyBubbleConfig} getActiveItem={getActiveItem} />;
    }

    return (
        <BubbleNavigation
            config={academyBubbleConfig}
            activeItem={activePath}
            onSelect={(item) => onChange(item.id as AcademyPathType)}
        />
    );
}
