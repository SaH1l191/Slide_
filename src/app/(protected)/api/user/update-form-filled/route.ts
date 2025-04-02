"use server";
import { NextResponse } from "next/server";
import { onCurrentUser } from "@/actions/user";
import { client } from "@/lib/prisma"; // Import Prisma

export async function POST() {
  const user = await onCurrentUser(); // Get the logged-in user
  console.log('user logign in post request', user)
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    // Update the `formFilled` status
    const updatedUser = await client.user.update({
      where: { clerkId : user.id },
      data: { formFilled: true },
    });

    return NextResponse.json({ message: "Form status updated successfully", user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error("Error updating formFilled:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
// export const updateFormFilled = async () => {
//   // Get the current logged-in user
//   const user = await onCurrentUser();
//   if (!user) return { status: 401, data: "Unauthorized" };

//   try {
//     // Update the `formFilled` field in the database
//     const updatedUser = await client.user.update({
//       where: { id: user.id },
//       data: { formFilled: true },
//     });

//     if (updatedUser) {
//       return { status: 200, data: "Form status updated successfully", res: updatedUser };
//     }
//     return { status: 404, data: "User not found" };
//   } catch (error) {
//     console.error("Error updating formFilled:", error);
//     return { status: 500, data: "Internal Server Error" };
//   }
// };
