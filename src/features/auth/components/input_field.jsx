
const InputField = ({ label, hint, onChange }) => {
    return (
        <div>
            <label htmlFor={label} className="w-full text-[1rem] text-white md:text-gray-500">{label}</label>
            <input type="text" className="w-full bg-white md:bg-gray-200 p-4 rounded-md md:bg-opacity-50 mb-3" id={label} placeholder={hint} onChange={onChange} />
        </div>
    )
}

export default InputField