import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("AboutUs","routes/About.tsx"),
    route("AdmissionProcedure","routes/AdmissionProcedure.tsx"),
    route("Contactus","routes/Contactus.tsx"),
    route("Gallery","routes/Gallery.tsx"),
    route("Facilities","routes/Facilities.tsx"),
    route("DirectorMessage","routes/DirectorMessage.tsx"),
    route("ManagementDesk","routes/ManagementDesk.tsx"),
    route("PrincipalMessage","routes/PrincipalMessage.tsx")
] satisfies RouteConfig;
