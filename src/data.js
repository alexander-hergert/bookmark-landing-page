import { nanoid } from "nanoid";

export const tabs = [
  { id: "1", title: "Simple Bookmarking" },
  {
    id: "2",
    title: "Speedy Searching",
  },
  { id: "3", title: "Easy Sharing" },
];

export const features = [
  {
    id: "1",
    title: "Bookmark in one click",
    src: "/images/illustration-features-tab-1.svg",
    content: `Organize your bookmarks however you like. 
    Our simple drag-and-drop interface gives you complete control 
    over how you manage your favourite sites.`,
  },
  {
    id: "2",
    title: "Intelligent search",
    src: "/images/illustration-features-tab-2.svg",
    content: `Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.`,
  },
  {
    id: "3",
    title: "Share your bookmarks",
    src: "/images/illustration-features-tab-3.svg",
    content: `Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.`,
  },
];

export const download = [
  {
    id: nanoid(),
    title: "Add to Chrome",
    src: "/images/logo-chrome.svg",
    alt: "chrome-icon",
    version: `Minimum version 62`,
  },
  {
    id: nanoid(),
    title: "Add to Firefox",
    src: "/images/logo-firefox.svg",
    alt: "firefox-icon",
    version: `Minimum version 55`,
  },
  {
    id: nanoid(),
    title: "Add to Opera",
    src: "/images/logo-opera.svg",
    alt: "opera-icon",
    version: `Minimum version 46`,
  },
];
