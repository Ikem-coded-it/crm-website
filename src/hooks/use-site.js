import { useContext, createContext } from "react";

import config from "../../package.json";

import { removeLastTrailingSlash } from "lib/util";

export const SiteContext = createContext();

/**
 * useSiteContext
 */

export function useSiteContext(data) {
  // Trim the trailing slash from the end of homepage to avoid
  // double // issues throughout the metadata
  const homepage = removeLastTrailingSlash(config.homepage);

  return {
    ...data,
    homepage,
  };
}

/**
 * useSite
 */

export default function useSite() {
  const site = useContext(SiteContext);
  return site;
}
