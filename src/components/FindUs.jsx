import { FaFacebook, FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start text-[10px] md:text-sm gap-1 md:gap-2">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start text-[10px] md:text-sm gap-1 md:gap-2">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="btn join-item justify-start text-[10px] md:text-sm gap-1 md:gap-2">
          <FaFacebook></FaFacebook> Facebook
        </button>
      </div>
    </div>
  );
};

export default FindUs;
