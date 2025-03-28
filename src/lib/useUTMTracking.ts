import { useEffect } from "react";

export const useUTMTracking = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source");
    const utm_campaign = params.get("utm_campaign");

    if (utm_source || utm_campaign) {
      localStorage.setItem("utm_source", utm_source || "");
      localStorage.setItem("utm_campaign", utm_campaign || "");
    }
  }, []);
};
