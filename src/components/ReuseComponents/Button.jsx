const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`nav_btn relative py-2 px-3 rounded-lg font-medium bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ${className}`}
      {...props}
    >
      <div className="absolute inset-0">
        <div className="absolute rounded-lg border border-white/20  inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute rounded-lg border border-white/40 inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset rounded-lg]"></div>
      </div>
      <span>
        <span>{children}</span>
      </span>
    </button>
  );
};

export default Button;
