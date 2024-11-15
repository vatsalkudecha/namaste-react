import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // to check user is online or offline

  const [onlineStatus, setOnlineStatus] = useState(true);

  // we need this event listener on webpage only once
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
