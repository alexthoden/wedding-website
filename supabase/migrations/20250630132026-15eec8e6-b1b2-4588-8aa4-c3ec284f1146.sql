
-- Create a table to store RSVP responses
CREATE TABLE public.rsvp_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_email TEXT NOT NULL UNIQUE,
  guest_name TEXT NOT NULL,
  attendance TEXT NOT NULL CHECK (attendance IN ('yes', 'no')),
  number_of_guests INTEGER NOT NULL DEFAULT 1,
  dietary_restrictions TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index on guest_email for faster lookups
CREATE INDEX idx_rsvp_responses_guest_email ON public.rsvp_responses(guest_email);

-- Enable Row Level Security (RLS) - allowing public read/write since this is a wedding RSVP
ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read and write RSVP responses (public wedding RSVP)
CREATE POLICY "Anyone can view RSVP responses" 
  ON public.rsvp_responses 
  FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can create RSVP responses" 
  ON public.rsvp_responses 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can update RSVP responses" 
  ON public.rsvp_responses 
  FOR UPDATE 
  USING (true);
