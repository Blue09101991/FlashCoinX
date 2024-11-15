import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NavLinkProps = {
    id: number;
    url: string;
    label: string;
};

export type headerProps = {
    title: string;
    description?: string | null;
    navLinks?: NavLinkProps[];
};

export type motionProps = {
    children: ReactNode;
    idx?: number | string;
    className?: string;
};

export type faqType = {
    id: number;
    question: string;
    answer: string;
};

export type counterElementType = {
    style: string;
    counterNumber: number;
    sizeText?: string;
};

export type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    children: ReactNode;
}

export type socialLinksType = {
    web: string;
    facebook: string;
    Instra: string;
    twiter: string;
    linkedin: string;
};

export type releaseDiscountType = {
    id: number;
    vestingTime: string;
    releasePercentage: number;
    amount: number;
};

interface MarketSwapItem {
    id: number;
    category: string;

    title: string;
    subTitel: string;
    percentage: number;
    price: number;
    tvl: number;
    hrVolume: number;
    blockchain: string;
    marketCap: number;
}

export type web3CoinType = {
    id: number;
    category: string;
    image?: string;
    image1?: string;
    image2?: string;
    title: string;
    subTitel: string;
    percentage: number;
    price: number;
    tvl: number;
    hrVolume: number;
    blockchain: string;
    marketCap: number;
    type?: string;
    action?: string;
};

export type projectDataType = {
    id: number;
    title: string;
    subTitle: string;
    status: string;
    image: string; // Assuming project1 is a string representing the image URL
    details: string;
    description: string;
    idoTimeline: string;
    subscriptionPeriod: string;
    snapshotPeriod: string;
    lotteryPeriod: string;
    redemptionPeriod: string;
    peakROI: number;
    participants: number;
    totalRaised: string;
    totalAmount: number;
    totalIssued: number;
    totalTickets: number;
    redemptionAmount: number;
    launchPrice: number;
    currencyCategory: string;
    completedAt: string;
    socalLinks: socialLinksType[];
    releaseDiscount: releaseDiscountType[];
}

export type blogDataType = {
    id: number | string;
    category: string;
    author: string;
    bio: string;
    social: {
        facebook: string;
        instra: string;
        twitter: string;
    };
    title: string;
    subTitle: string;
    blogImage?: StaticImageData | string; // Assuming blogImage is a string representing the image URL
    authorImg?: StaticImageData | string; // Assuming authorImg is a string representing the image URL
    details: string;
    blogDetailsPoint: BlogDetailPoint[];
    publish: string;
};

export type BlogDetailPoint = {
    id: number | string;
    title: string;
    description: string;
    features?: string[]; // Optional array of strings
};





