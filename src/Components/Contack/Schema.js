import * as Yup from "yup";
export const SignS = Yup.object(
    {
        name:Yup.string().min(2).max(25).required("plz fill your fullname") ,
        email:Yup.string().email().required("plz fill your email"),
        qusstion:Yup.string().required("plz enter your queries")
    }
   
)