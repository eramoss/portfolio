import { useState, useEffect } from "react"
export default function hookResize() {

  const [width, setWidth] = useState(0)
  var Ratioxlg = 14
  var Ratiolg = 13
  var Ratiomd = 10
  var Ratiosm = 9


  useEffect(() => {
    function handleResize() {
      setWidth(window.screen.width);
    }  
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  if(width <= 640){
    Ratioxlg = 6
    Ratiolg = 6
    Ratiomd = 6
    Ratiosm = 6
  }

  return {Ratioxlg,Ratiolg,Ratiomd,Ratiosm}
}
  