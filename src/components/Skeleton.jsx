const Skeleton = ({
  height,
  width
}) => {
  return (
    <div role="status" className="animate-pulse">
      <div style={{height: height, width: width}} className={`bg-gray-200 rounded-md dark:bg-gray-700 mb-4`}></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Skeleton