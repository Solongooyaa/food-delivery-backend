// import { Request, Response, Router } from "express";
// import { FoodOrderItemModel } from "../models/food-category";

// export const foodOrderItemRouter = Router();

// foodOrderItemRouter.get("/", async (req: Request, res: Response) => {
//   const item = await FoodOrderItemModel.find();
//   res.json(item);
// });

// foodOrderItemRouter.put("/:id", async (req: Request, res: Response) => {
//   const updatedItem = await FoodOrderItemModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       food: req.body.food,
//     },
//     { new: true }
//   );
//   res.json(updatedItem);
// });
