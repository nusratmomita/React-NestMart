import React from 'react'

const Button = ({ buttonText, Icon, iconPosition = "left", href, variant , onClick }) => {

  const baseStyle = `py-2.5 px-5 text-[14px] font-bold rounded-sm flex justify-center items-center gap-2 cursor-pointer transition-all duration-300`

  const variants = {
    primary: "bg-[#1d8751] text-white hover:bg-[#fdc040] hover:text-black hover:-translate-y-0.75 transition",
    light: "bg-[#1c875133] text-[#1d8751] hover:bg-[#1d8751] hover:text-white hover:-translate-y-0.75 transition",
    shop: "bg-[#1d8751] text-white text-[12px] hover:bg-[#fdc040] hover:text-black mt-10 max-w-35 w-full whitespace-nowrap"
  }

  const content = 
  <>
    {Icon && iconPosition === "left" && <Icon className="text-[18px]" />}

      <span>{buttonText}</span>

      {Icon && iconPosition === "right" && (
        <Icon className="text-[18px] transition-all group-hover:translate-x-1" />
      )}
  </>

  if(href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} group`}>{content}</a>
    )
  }
  return (
    <div className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {content}
    </div>
  )
}

export default Button