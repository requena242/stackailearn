# Newsletter semanal (propuesta)

## Estado actual (comprobado)
- El código ya está preparado: `src/data/newsletter.ts` tiene `enabled: true`, `provider: "buttondown"` y `username: "stackailearn"`.
- El componente `EmailCapture` (`src/components/newsletter/EmailCapture.tsx`) sale en las páginas de tutorial (variantes tutorial y banner) y en el footer.
- https://buttondown.com/stackailearn responde 200, así que esa página existe. **Javier tiene que confirmar si la cuenta es suya.** Si no lo es, hay que cambiar de proveedor o desactivar el formulario.

## Opción recomendada: Buttondown (gratis)
- Plan gratuito hasta 100 suscriptores. Es Markdown y tiene embed por POST, que ya está integrado.
- Si Javier ya tiene la cuenta «stackailearn», no hay nada que tocar en el código.

## Alternativas gratuitas
- Beehiiv: plan Launch gratuito hasta unos 2.500 suscriptores. El código acepta `publicationId` o `formAction`.
- Brevo: plan gratis de unos 300 emails al día. Habría que añadir el proveedor en `src/lib/newsletter.ts`, porque hoy no está.
- MailerLite y ConvertKit (Kit) ya están soportados. Solo hace falta su action URL o formId.

## Dónde va el formulario
1. Al final de cada tutorial (`EmailCapture variant="tutorial"`), que ya existe.
2. En el footer global.
3. En el banner al 42 % de scroll o a los 22 s. Si molesta, se puede subir el umbral.

## Contenido semanal (domingo)
Las 5–7 piezas de la semana con un truco de cada una, sacado de ops/x-posts.md, y una herramienta destacada. Sin afiliados hasta que Javier esté dado de alta.

No he creado ninguna cuenta.
