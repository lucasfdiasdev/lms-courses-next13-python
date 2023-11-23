import { IconType } from 'react-icons';

interface InputSearchProps {
  placeholder: string;
  type: string;
  onClick: () => void;
  icon: IconType;
}

const InputSearch: React.FC<InputSearchProps> = ({
  onClick,
  icon: Icon,
  type,
  placeholder
}) => {
  return (
    <div className='flex relative'>
      <input 
        placeholder={placeholder}
        type={type}
        className='
          w-full
          rounded-full
          pr-10
          pl-4
          py-2
          text-lg
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500-200
          focus:border-indigo-500
        '
      />
      <button
        onClick={onClick} 
        className='absolute top-1/2 -translate-y-1/2 right-4 ml-4 text-gray-400 hover:text-gray-500'
      >
        <Icon size={24} className='hover:text-indigo-500 transition-all duration-300'/>
      </button>
    </div>
  )
}

export default InputSearch