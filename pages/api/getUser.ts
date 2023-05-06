import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../models/user";
import dbConnect from "../../utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function HANDLER(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method == "GET") {
      console.log("i run");
      let session;
      try {
        session = await getServerSession(authOptions);
        //   await dbConnect();
      } catch (er) {
        return res.status(501).json({ error: er });
      }
      if (!session?.user?.email) {
        return res.status(404).send({ error: "session is not found" });
      }
      // let user = await User.findOne({ email: session?.user?.email });
      else return res.status(200).send({ d: "dound" });
      // else {
      //   //create a user in the db
      //   const newuser = new User({
      //     email: session?.user?.email,
      //     name: session?.user?.name,
      //     description: "",
      //     avatar: session?.user?.image || "/user.png",
      //     videos: [],
      //     seved: [],
      //   });
      //   newuser.save();
      //   return res.status(200).send(newuser);
      // }
    }
    return res.status(404).end();
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}