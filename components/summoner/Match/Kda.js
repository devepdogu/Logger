export default function Kda({ item }) {

    return (
        <div className='ml-auto mr-auto'>
            <span className='text-[#3CBC8D] font-semibold'>{item.kills}</span>
            <span className='mx-2 font-semibold'>/</span>
            <span className='text-[#E9422E] font-semibold'>{item.deaths}</span>
            <span className='mx-2 font-semibold'>/</span>
            <span className='text-[#FAC552] font-semibold'>{item.assists}</span>
        </div>

    )
}
