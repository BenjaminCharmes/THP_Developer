import express from "express";
import { getUser , updateUser} from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)

router.get("/test", (req, res) => {
  res.send("dlqdwd")
})


export default router;
