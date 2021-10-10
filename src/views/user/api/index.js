import  {Server as Fetch} from "@/utils/request";

export const getData=(params)=>{
    return Fetch({
        url:"/getTabelData",
        methods:"get",
        params
    })
}