
interface Props{
    text: string
}

export default function SectionH2({text}:Props){
    return(
        <h2 className="text-[2.5rem] text-center font-bold">
            {text}
        </h2>
    )
}