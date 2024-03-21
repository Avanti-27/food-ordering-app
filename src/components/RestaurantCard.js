import { CDN_URL } from "../utils/constants.js";

const RestrauntCard = (props) => {
  return (
    <div className="bg-slate-100 w-[350px] p-3 m-2 hover:bg-slate-200">
      <img 
        className="rounded-md mb-2 w-[325px] h-[250px]"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold text-lg">{props.resData.info.name}</h3>
      <p className="cuisines">{props.resData.info.cuisines.join(",")}</p>
      <h4>{props.resData.info.avgRating}</h4>
      <h4>{props.resData.info.costForTwo}</h4>
      <h4>{props.resData.info.sla.deliveryTime}</h4>
    </div>
  );
};



export default RestrauntCard;
