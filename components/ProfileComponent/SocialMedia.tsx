import { BsGithub, BsLinkedin, BsWhatsapp, BsStackOverflow } from "react-icons/bs"

interface MediaProps {
  className: string
}


export default function Socialmedia( {className} : MediaProps ){

  return (
      <nav className={className} >
        <a href="https://github.com/eramoss">
          <BsGithub/>
        </a>
        <a href="https://www.linkedin.com/in/eramoss/">
          <BsLinkedin/>
        </a>
        <a href="https://wa.me/5547997057214">
          <BsWhatsapp/>
        </a>
        <a href="https://stackoverflow.com/users/20567056/eduardo-ramos">
          <BsStackOverflow/>
        </a>
      </nav>
  )

}