import { t } from 'elysia';

export const responseSchema = t.Object({
  success: t.Boolean(),
  data: t.String()
})