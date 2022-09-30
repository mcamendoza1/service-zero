type TextInputProps = {
  inputType: string
  placeholder: string
  props?: any
}

const TextInput = ({ inputType, placeholder, props }: TextInputProps) => {
  return (
    <>
      <div className="mb-6">
        <input
          className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-200::placeholder bg-white shadow border-2 border-indigo-900 rounded"
          type={inputType}
          placeholder={placeholder}
          {...props}
        />
        {/* <label className="label">
          <span className="label-text">Alt label</span>
        </label> */}
      </div>
    </>
  )
}

export default TextInput
