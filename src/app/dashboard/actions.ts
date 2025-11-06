// 'use server';

// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { Prisma } from "@prisma/client";
// import { revalidatePath } from "next/cache";
// import {nanoid} from "nanoid";
// import { Session } from "inspector/promises";
// import { error } from "console";

// export async function createShortUrl(formData:FormData) {
//     const session = await getServerSession();

//     if (!session?.user?.id) {
//         return error("Not Authenticated");
//     }

//     const targetUrl = formData.get('targetUrl') as string;
    
// }