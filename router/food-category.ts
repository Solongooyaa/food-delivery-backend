import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", async (req: Request, res: Response) => {
  const allCategory = await FoodCategoryModel.find();
  res.json(allCategory);
});

foodCategoryRouter.post("/", async (req: Request, res: Response) => {
  const newCategory = await FoodCategoryModel.create({
    categoryName: req.body.categoryName,
  });
  res.json(newCategory);
});
foodCategoryRouter.get("/:id", async (req: Request, res: Response) => {
  //Create Food Category
  const id = req.params.id;
  const item = await FoodCategoryModel.findById(id);
  res.json(item);
});

foodCategoryRouter.put("/:id", async (req: Request, res: Response) => {
  const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      categoryName: req.body.categoryName,
    },
    { new: true }
  );
  res.json(updatedItem);
});

foodCategoryRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});
