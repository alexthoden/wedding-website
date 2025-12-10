// utils/sendRsvp.ts
export type RsvpPayload = {
  guest_name: string;
  guest_email: string;
  attendance: string;
  dietary_restrictions?: string;
  accommodation?: string;
  message?: string;
};

export async function sendRsvp(payload: RsvpPayload) {
  const res = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/rsvp-submit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "RSVP submission failed");
  }

  return res.json();
}