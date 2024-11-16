
type Props = {
    children: React.ReactNode;
}

const Wrapper = ({children}: Props) => {
  return (
    <div className="hidden lg:block w-[668px]  sticky self-end bottom-6">
       <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">
        <Wrapper>
        {children}
        </Wrapper>
       </div>
    </div>
  )
}

export default Wrapper