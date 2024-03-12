
const page = ({params}) => {
  return (
    <div className="flex justify-center items-center h-screen text-6xl">
      {params.id}
    </div>
  )
}

export default page
