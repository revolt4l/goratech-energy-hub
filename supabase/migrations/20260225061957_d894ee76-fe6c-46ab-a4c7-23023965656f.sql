
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5,
  approved BOOLEAN NOT NULL DEFAULT false
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.testimonials
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow reading approved testimonials" ON public.testimonials
  FOR SELECT USING (approved = true);
