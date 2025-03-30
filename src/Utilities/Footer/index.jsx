import Threads from "../../Animation/Threads";

const Footer = () => {
  return (
    <div className="bg-black h-[250px]">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        
      </div>
      <p className="text-black text-center">Copyright &copy; 2023</p>
      
    </div>
  );
};
export default Footer;
