import Sidebar from "./_components/sidebar/Sidebar";

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
    {/* Server component ignore error */}
      <Sidebar />
       <div className="">
        {children}
    </div>
    </>
  )
}

export default layout