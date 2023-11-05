// import DataInput from "../DataInput/DataInput";
import Experience from "../Experience/Experience";
import Preview from "../Preview/Preview";
import Sidebar from "../Sidebar/Sidebar";
// import Summary from "../Summary/Summary";

const HomeBody = () => {
  return (
    <>
      <div className="container-full flex gap-4 mx-auto p-2">
        <Sidebar />
        {/* <DataInput /> */}
        {/* <Summary/> */}
        <Experience/>
        <Preview />
      </div>
    </>
  );
};

export default HomeBody;
