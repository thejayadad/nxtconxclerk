
type Props = {
    children: React.ReactNode;
}
const FeedWrapper = ({children}: Props) => {
  return (
    <div className="bg-purple-200 flex-1 relative top-0 pb-10 w-full">
        {children}
    </div>
  )
}

export default FeedWrapper