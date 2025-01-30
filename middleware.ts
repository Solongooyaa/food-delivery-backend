// export const auth = async (req: any, res: any, next: any) => {
//   const token = req.get("authentication");

//   try {
//     const verified = await verifyToken(token, {
//       secretKey: process.env.CLERK_SECRET_KEY,
//     });
//     console.log({ verified });
//     const userId = verified?.sub;
//     console.log(userId);
//     req.userId = userId;
//     next();
//   } catch {
//     res.json({ status: "Forbidden" });
//   }
// };

// function verifyToken(token: any, arg1: { secretKey: string | undefined }) {
//     throw new Error("Function not implemented.");
//   }
