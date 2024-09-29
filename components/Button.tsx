
interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullwidth?: boolean;
    large?: boolean;
    onclick: () => void;
    disabled?: boolean;
    outline?: boolean;

}

const Button:React.FC<ButtonProps> = ({label, secondary, fullwidth, large, disabled, outline, onclick}) => {
  return (
    <button
    disabled={disabled}
    onClick={onclick}
     
    className={`disabled: opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 
        ${fullwidth ? 'w-full': 'w-fit'} 
        ${secondary ? 'bg-white': 'bg-sky-500'} 
        ${secondary ? 'text-black': 'text-white'} 
        ${secondary ? 'border-black': 'border-sky-500'} 
        ${large ? 'text-xl': 'text-md'}
        ${large ? 'py-3': 'py-2'}
        ${large ? 'px-5': 'px-4'}
        ${outline ? 'bg-transparent': ''}
        ${outline ? 'border-white': ''}
        ${outline ? 'text-white': ''}
        `}></button>

  )
}

export default Button
