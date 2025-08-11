import React, { useEffect } from "react";

const VerticalMarquee = ({ data1 }: { data1: any }) => {
  useEffect(() => {
    // console.log("VerticalMarquee useEffect ran", data1);
  }, [data1]);

  return (
    <>
      {data1?.data ? (
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
              {data1?.data?.data?.map((ei: any, i: number) => (
                <div className="flex mb-2" key={i}>
                  <div className="bg-indigo-900 text-white w-[25%] py-5 px-2">
                    {ei.eventdate}
                  </div>
                  <div className="px-2 py-5 bg-purple-100 w-[75%]">{ei.title}</div>
                </div>
              ))}
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
      ) : (
        <div className="relative bg-white w-full md:py-[150px] rounded-[5px] text-center">
          Loading...
        </div>
      )}
    </>
  );
};

// ✅ Add memo here
export default React.memo(VerticalMarquee);
