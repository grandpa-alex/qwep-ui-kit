export type Hex = `#${string}`;

export type TypeColorScheme = {
    primary: Hex;
    secondary: Hex;
    system: Hex;

    //other
    lightShadow: Hex;
    lightElem: Hex;
    backgroundInfo: Hex;
    backgroundSuccess: Hex;
    backgroundWarning: Hex;
    backgroundError: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    layoutBox: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //text
    title: Hex;
    text: Hex;
    subText: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
};

export const colorsLight: TypeColorScheme = {
    primary: '#2563EB',
    secondary: '#EFF6FF',
    system: '#E2E8F0',

    //other
    lightShadow: '#AABDE840',
    lightElem: '#A9C1CF',
    backgroundInfo: '#BFDBFE',
    backgroundSuccess: '#BBF7D0',
    backgroundWarning: '#FED7AA',
    backgroundError: '#FECACA',

    //items
    primaryItem: '#2563EB',
    primaryItemActive: '#1D4ED8',
    successItem: '#16A34A',
    successItemActive: '#15803D',
    infoItem: '#1E40AF',
    infoItemActive: '#18338C',
    errorItem: '#DC2626',
    errorItemActive: '#B91C1C',
    warningItem: '#EA580C',
    warningItemActive: '#C2410C',

    //base
    background: '#CBD5E1',
    layoutBox: '#ffffff',
    backgroundBox: '#ffffff',
    backgroundTooltip: '#1f1f1fc8',
    disabled: '#B9BCBE',
    shadowColor: '#002B4D40',

    //text
    title: '#1A242A',
    text: '#1A242A',
    subText: '#475569',
    textItem: '#F5F5F5',
    link: '#2563EB',
    linkActive: '#1D4ED8',

    //general
    alpha: '#ffffff',
    omega: '#000000',
};

export const colorsDark: TypeColorScheme = {
    primary: '#3B82F6',
    secondary: '#334155',
    system: '#475569',

    //other
    lightElem: '#94A3B8',
    lightShadow: '#00000000',
    backgroundInfo: '#18338C',
    backgroundSuccess: '#12512A',
    backgroundWarning: '#7B2A0E',
    backgroundError: '#7A1616',

    //items
    primaryItem: '#3B82F6',
    primaryItemActive: '#2563EB',
    successItem: '#22C55E',
    successItemActive: '#16A34A',
    infoItem: '#60A5FA',
    infoItemActive: '#3B82F6',
    errorItem: '#EF4444',
    errorItemActive: '#DC2626',
    warningItem: '#F97316',
    warningItemActive: '#EA580C',

    //base
    background: '#121923',
    layoutBox: '#1E293B',
    backgroundBox: '#1E293B',
    backgroundTooltip: '#334155c8',
    disabled: '#64748B',
    shadowColor: '#00000000',

    //text
    title: '#F8FAFC',
    text: '#A9C1CF',
    subText: '#F3F4F6',
    textItem: '#F8FAFC',
    link: '#3B82F6',
    linkActive: '#2563EB',

    //general
    alpha: '#ffffff',
    omega: '#000000',
};
