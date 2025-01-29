import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-order";
// import { CustomRequest } from "../constants/type";

export const foodOrderRouter = Router();
// const auth = async (req: any, res: any, next: any) => {
//   const token = req.get("authentication");

//   try {
//     const verified = await verifyToken(token, {
//       secretKey: process.env.CLERK_SECRET_KEY,
//     });
// console.log({ verified });
// const userId = verified?.sub;
// console.log(userId);
// req.userId = userId;
//     next();
//   } catch {
//     res.json({ status: "Forbidden" });
//   }
// };

foodOrderRouter.get("/", async (req: Request, res: Response) => {
  const allFoodOrder = await FoodOrderModel.find({});
  res.json(allFoodOrder);
});

foodOrderRouter.post("/", async (req: Request, res: Response) => {
  // const user = req?.userId;
  // const { foodOrderItems, totalPrice } = req.body;
  // const order = { user: "dfg", foodOrderItems: , totalPrice: };
  // const newOrder = await FoodOrderModel.create(order);

  const newFoodOrder = await FoodOrderModel.create({
    foodName: req.body.foodName,
  });
  res.json(newFoodOrder);
});

foodOrderRouter.get("/:id", async (req: Request, res: Response) => {
  //Create Food Category
  const id = req.params.id;
  const oneFoodOrder = await FoodOrderModel.findById(id);
  res.json(oneFoodOrder);
});

foodOrderRouter.patch("/:id", async (req: Request, res: Response) => {
  const updatedFoodOrder = await FoodOrderModel.findByIdAndUpdate(
    req.params.id,
    {
      user: req.body.user,
      totalPrice: req.body.totalPrice,
    },
    { new: true }
  );
  res.json(updatedFoodOrder);
});
foodOrderRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedFoodOrder = await FoodOrderModel.findByIdAndDelete(
    req.params.id
  );
  res.json(deletedFoodOrder);
});
function verifyToken(token: any, arg1: { secretKey: string | undefined }) {
  throw new Error("Function not implemented.");
}
