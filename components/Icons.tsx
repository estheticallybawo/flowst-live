/* Flowst UI line icons — thin, rounded, black, currentColor.
   Closest match to the brand's specified Supercons set (see ICONOGRAPHY
   in the design system readme). Feather/Lucide-weight strokes (1.7px).

   NOTE (production): swap these for the brand's Supercons set when
   integrating the real icon package. */
import type { ReactNode, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  children?: ReactNode;
}

function Icon({ size = 22, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

type P = Omit<IconProps, "children">;

export const Bell = (p: P) => (
  <Icon {...p}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </Icon>
);
export const Brain = (p: P) => (
  <Icon {...p}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </Icon>
);
export const Shield = (p: P) => (
  <Icon {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
export const Nodes = (p: P) => (
  <Icon {...p}>
    <circle cx="5" cy="6" r="2.2" />
    <circle cx="19" cy="9" r="2.2" />
    <circle cx="9" cy="18" r="2.2" />
    <path d="m7 7 10 1.5M7.5 16 17 10.5M6 8l2.5 8" />
  </Icon>
);
export const Chart = (p: P) => (
  <Icon {...p}>
    <path d="M3 3v18h18" />
    <rect x="7" y="12" width="3" height="6" rx="1" />
    <rect x="12" y="8" width="3" height="10" rx="1" />
    <rect x="17" y="5" width="3" height="13" rx="1" />
  </Icon>
);
export const Heart = (p: P) => (
  <Icon {...p}>
    <path d="M19 14c1.5-1.5 3-3.4 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7Z" />
  </Icon>
);
export const Target = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </Icon>
);
export const Bulb = (p: P) => (
  <Icon {...p}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
  </Icon>
);
export const Image = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.6" />
    <path d="m21 16-5-5-9 9" />
  </Icon>
);
export const Wave = (p: P) => (
  <Icon {...p}>
    <path d="M5 9v6M9 5v14M13 8v8M17 6v12M21 10v4" />
  </Icon>
);
export const Mic = (p: P) => (
  <Icon {...p}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </Icon>
);
export const Arrow = (p: P) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
export const Cpu = (p: P) => (
  <Icon {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </Icon>
);

export const ICONS = {
  Bell,
  Brain,
  Shield,
  Nodes,
  Chart,
  Heart,
  Target,
  Bulb,
  Image,
  Wave,
  Mic,
  Arrow,
  Cpu,
} as const;

export type IconName = keyof typeof ICONS;
