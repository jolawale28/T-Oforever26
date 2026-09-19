'use client'

import { useActionState } from "react";
import { SubmissionState, submitForm } from "../lib/actions/submissions";
import Image from "next/image";

export default function AttendanceConfirmation() {

    const initialState: SubmissionState = {
        success: false,
        message: "",
    };

    const [state, formAction, pending] = useActionState(
        submitForm,
        initialState
    );

    return (
        <form id="" action={formAction}>
            <label>Full Name<input name="name" required placeholder="Your name" /></label>
            <label>Phone Number<input name="phone" required placeholder="+234..." /></label>
            <label>Email Address<input name="email" type="email" placeholder="you@example.com" /></label>
            <label>Will you attend?
                <select name="attendance" required>
                    <option value="">Select</option>
                    <option value="1">Joyfully attending</option>
                    <option value="0">Sorry, I can't attend</option>
                </select>
            </label>
            <label>Guest Category
                <select name="category">
                    <option value="family">Family</option>
                    <option value="friend">Friend</option>
                    <option value="colleague">Colleague</option>
                    <option value="church">Church</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>Message<textarea name="message" rows={4}
                placeholder="Leave a message for the couple"></textarea></label>
            <button disabled={pending} className="disabled:opacity-40 btn btn-primary" type="submit">
                {pending ? 'Sending...' : 'SEND RSVP'}
            </button>
            {!pending && state.message && (
                <div
                    className={`form-message text-lg ${state.success
                        ? "text-[#216b68]"
                        : "text-red-500"
                        } flex gap-2 items-center bg-[#216b68]/10 p-2`}
                        style = {{padding: "10px"}}
                >
                    <div className="shrink-0 grow-0">
                        {
                        state.success ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check preview-icon"><circle cx="12" cy="12" r="10" /><path d="m16 9-5.5 5.5L8 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x preview-icon"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                        )
                    }
                    </div>
                    <span>{state.message}</span>
                </div>
            )}
        </form>
    )
}