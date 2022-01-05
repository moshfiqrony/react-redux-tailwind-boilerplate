const DangerButton = ({
    name = '',
    className = '',
    style = {},
    ...rest
}) => (<button
    className={`px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 ${className}`}
    style={{ ...style }}
    {...rest}
>
    {name}
</button>)

export default DangerButton;