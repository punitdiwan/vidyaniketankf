import React  from "react";


const AdmissionProcedure = () => {
//  function getStaticProps(context) {
//       let data_header

//       try {
//             const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

//             data_header = await response.json()
//       }
//       catch (error) {
//             data_header = false
//       }
//       return {
//             props: { data_header },
//             revalidate: 2, // will be passed to the page component as props
//       }
// }

      return (
           
                  <div
  className="w-full h-full bg-[url('/public/images/ad_lower.jpeg')] bg-no-repeat bg-cover "

>
  <h5 className="text-2xl font-medium text-center leading-tight pt-5">
    Rose Mary Hr. Sec. School:
  </h5>

  <div className="mt-3 mx-5 px-4 md:px-28">
    <b className="text-xl font-bold leading-tight">Registration</b>
    <p className="mb-0 text-xl font-normal leading-tight">
      Parents are required to submit a non-refundable application form to the school.
    </p>
    <p className="mb-0 text-xl font-normal leading-tight">
      Registered parents are invited to visit the campus to understand the Goenkan culture &amp; ethos.
    </p>
    <p className="mb-9 text-xl font-normal leading-tight max-w-[75%]">
      The mere act of Registration will not constitute a guaranteed admission, which is subject to interaction with Principal, Aptitude test (grade V &amp; above) and the school rule book.
    </p>

    <b className="text-xl font-bold leading-tight mt-10 block">Submission of Documents</b>
    <p className="text-xl font-normal leading-tight max-w-[75%]">
      Following Registration, duly filled Application form needs to be submitted along with the documents listed below within 5 days of the registration date.
    </p>

    {[
      "Attested copy of Birth certificate",
      "Copy of Address proof",
      "TC from previous school (class II onwards)",
      "6 passport size photos of the child and 1 each of the parents",
      "Previous session report card for Nursery to class I or previous three session report cards (class II onwards), whichever applies.",
      "Vaccination card",
      "Blood group card or report",
      "Copy of Aadhar card",
      "Copy of Samagra ID",
      "Cheque Photocopy",
    ].map((item, i) => (
      <p key={i} className="mb-3 text-xl font-normal leading-tight flex items-start">
        <span className="text-red-500 mr-2">★</span> {item}
      </p>
    ))}
  </div>
</div>

      );

}

export default AdmissionProcedure;



