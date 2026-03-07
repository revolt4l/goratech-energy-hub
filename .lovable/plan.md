

## Fix Testimonials System

### Problem
Both RLS policies on `testimonials` are **RESTRICTIVE** (`Permissive: No`). PostgreSQL requires at least one PERMISSIVE policy for access — restrictive-only means all operations are denied.

### Database Migration

Drop existing restrictive policies and create permissive ones. Set `approved` to `true` by default so testimonials auto-display:

```sql
-- Fix INSERT policy
DROP POLICY "Allow anonymous inserts" ON public.testimonials;
CREATE POLICY "Allow anonymous inserts"
  ON public.testimonials FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Fix SELECT policy — allow reading all testimonials
DROP POLICY "Allow reading approved testimonials" ON public.testimonials;
CREATE POLICY "Allow reading all testimonials"
  ON public.testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Auto-approve: change default to true
ALTER TABLE public.testimonials ALTER COLUMN approved SET DEFAULT true;

-- Also fix contact_submissions INSERT
DROP POLICY "Allow anonymous inserts" ON public.contact_submissions;
CREATE POLICY "Allow anonymous inserts"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
```

### Code Change

**`src/components/TestimonialsSection.tsx`** — Remove `.eq("approved", true)` filter if present (currently not in code, so no change needed there). The insert already sets the right fields. After migration, inserts and selects will work.

No design or layout changes needed — existing responsive grid is preserved.

