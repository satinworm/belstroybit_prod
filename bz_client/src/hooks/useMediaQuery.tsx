
import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string) => {

  if(typeof window === "undefined") {
    return false;
  }

  const [isVerified, setIsVerified] = useState(window.matchMedia(mediaQuery).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const documentChangeHandler = () => setIsVerified(mediaQueryList.matches)

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler)
    } catch (e) {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler)
    }

    documentChangeHandler()
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler)
      } catch (e) {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler)
      }
    }
  }, [mediaQuery])

  return isVerified
}

export default useMediaQuery