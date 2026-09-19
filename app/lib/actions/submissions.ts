"use server";

import { NeonDbError } from "@neondatabase/serverless";
import { sql } from "../db";

type SubmitFormResult =
    | {
        success: true;
    }
    | {
        success: false;
        error: string;
    };

export type SubmissionState = {
    success: boolean;
    message: string;
};

export async function submitForm(
    previousState: SubmissionState,
    formData: FormData
): Promise<SubmissionState> {
    console.log(formData, " :: formData")
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const category = formData.get("category")?.toString().trim()
    const will_attend = formData.get("attendance")?.toString().trim()
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
        return {
            success: false,
            message: "Please complete all required fields.",
        };
    }

    //     INSERT INTO attendance_confirmation_tb ("fullname", "email", "phone", "will_attend", "family_category", "message")
    // VALUES ('joseph', 'jolawale28@gmail.com', '087708765', '1', 'family', 'Hello');

    try {
        await sql`
            INSERT INTO attendance_confirmation_tb (
                fullname,
                email,
                phone,
                will_attend,
                family_category,
                message
            )
            VALUES (
                ${name},
                ${email},
                ${phone},
                ${will_attend},
                ${category},
                ${message}
            )
        `;

        return {
            success: true,
            message: "Thank you! Your RSVP has been received."
        };
    } catch (error) {
        console.error("Failed to save form submission:", error);
        const errObj = error as NeonDbError
        return {
            success: false,
            message: errObj.message
        };
    }
}