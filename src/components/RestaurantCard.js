import { CDN_URL } from "../utils/constants.js";

const RestrauntCard = (props) => {
  return (
    <div className="bg-slate-100 hover:bg-slate-200 w-96 h-fit p-4 my-10 rounded-lg">
      <img
        className="rounded-lg h-[425px] my-2"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold text-lg">{props.resData.info.name}</h3>
      <p className="">{props.resData.info.cuisines.join(",")}</p>
      <h4>{props.resData.info.avgRating}</h4>
      <h4>{props.resData.info.costForTwo}</h4>
      <h4>{props.resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestrauntCard;
