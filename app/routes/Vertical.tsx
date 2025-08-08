import React from "react";





const VerticalMarquee = ({ data1 }: { data1: any }) => {
  console.log('====================================');
  console.log("data1",data1);
  console.log('====================================');
     

  return (
    <div
      style={{
        height: "305px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "scrollUp 20s linear infinite",
        }}
      >
        <div className="m-5 bg-white">
          {data1?.data?.data?.map((ei:any, i:any) => (
            <div className="flex mb-2" key={i}>
              <div className="bg-indigo-900 text-white w-[25%] py-5 px-2">
                {ei.eventdate}
              </div>
              <div className="px-2 py-5 bg-purple-100 w-[75%]">{ei.title}</div>
            </div>
          ))}
          {/* Duplicate content for smooth infinite scroll */}
          {/* {data1?.map((ei:any, i:any) => (
            <div className="flex mb-2" key={"dup-" + i}>
              <div className="bg-indigo-900 text-white w-[25%] py-5 px-2">
                {ei.eventdate}
              </div>
              <div className="px-2 py-5 bg-purple-100 w-[75%]">{ei.title}</div>
            </div>
          ))} */}
        </div>
      </div>

      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalMarquee;
