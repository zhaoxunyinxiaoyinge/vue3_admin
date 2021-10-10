import  {Server as Fetch} from "@/utils/request";

export function getEchearts ({url,params}){
   return Fetch({
      url:url,
      methods:"get",
      params
   });
}