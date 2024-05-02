"use server";

import { z } from "zod";
import { formSchema } from "../bbs-posts/create/page";
import prisma from "@/lib/prismaClient";

export const postBbs = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
};
