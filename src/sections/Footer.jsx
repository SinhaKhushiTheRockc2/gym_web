import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="bg-black p-2 flex justify-center items-center">
      <img src={copyrightSign} alt="copyright sign" width={15} height={15} />
      <p className="text-white">2024. GymFluencer. All rights reserved</p>
    </footer>
  )
}

export default Footer
