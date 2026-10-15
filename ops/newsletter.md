# Newsletter semanal

## Estado actual (comprobado 15/10/2026)
- Cuenta propia en Buttondown (plan gratis), creada con hello@stackailearn.com: **stackailearnes** → https://buttondown.com/stackailearnes (pública, confirmada).
- `src/data/newsletter.ts`: `enabled: true`, `provider: "buttondown"`, `username: "stackailearnes"`.
- El formulario envía a `https://buttondown.com/api/emails/embed-subscribe/stackailearnes`.
- La página https://buttondown.com/stackailearn **no es nuestra** (el reset de contraseña no llegó a hello@). No usarla.
- El componente `EmailCapture` (`src/components/newsletter/EmailCapture.tsx`) sale en las páginas de tutorial (variantes tutorial y banner) y en el footer.

## Buttondown
- Plan gratuito hasta 100 suscriptores. Markdown y embed por POST, ya integrado.
- Credenciales: no se guardan aquí. Los correos de verificación llegan a hello@ (los lee Secretaría).

## Dónde va el formulario
1. Al final de cada tutorial (`EmailCapture variant="tutorial"`).
2. En el footer global.
3. En el banner al 42 % de scroll o a los 22 s.

## Contenido semanal (domingo)
Las piezas de la semana con un truco de cada una, sacado de ops/x-posts.md, y una herramienta destacada. Sin afiliados hasta que Javier esté dado de alta.
