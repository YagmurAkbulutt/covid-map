
const Loader = ({type}) => {

    if (type === "header") 
        return <div data-testid="header-loader" className="flex items-center space-x-2 animate-pulse">
    <div className="w-24 h-[64px] rounded-md bg-gray-400"/>
    <div className="w-[180px] h-[32px] rounded-md bg-gray-400"/>
</div>


    // 16 elemanlı dizi oluşturma
    const arr = new Array(16).fill()
  return (
    arr.map(() => (
        <div
      data-testid="card-loader"
      className="bg-gray-200 p-4 rounded-lg shadow-md text-transparent min-w-[206px] animate-pulse select-none"
    >
      <p className="bg-gray-300 w-2/5 text-sm font-semibold mb-2 rounded-md">
        .
      </p>
      <h2 className="bg-gray-400 w-3/4 text-lg font-bold rounded-md">.</h2>
    </div>
    ))
  )
}

export default Loader