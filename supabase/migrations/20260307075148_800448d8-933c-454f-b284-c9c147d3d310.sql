-- Fix testimonials INSERT policy (restrictive -> permissive)
DROP POLICY "Allow anonymous inserts" ON public.testimonials;
CREATE POLICY "Allow anonymous inserts"
  ON public.testimonials FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Fix testimonials SELECT policy (restrictive -> permissive, show all)
DROP POLICY "Allow reading approved testimonials" ON public.testimonials;
CREATE POLICY "Allow reading all testimonials"
  ON public.testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Auto-approve testimonials
ALTER TABLE public.testimonials ALTER COLUMN approved SET DEFAULT true;

-- Fix contact_submissions INSERT policy (restrictive -> permissive)
DROP POLICY "Allow anonymous inserts" ON public.contact_submissions;
CREATE POLICY "Allow anonymous inserts"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);