export default function Button(props: any) {
    return (
        <button className="bg-yellow-100 shadow text-red-700 p-2 rounded-md" {...props}>
            {props.children}
        </button>
    );
}